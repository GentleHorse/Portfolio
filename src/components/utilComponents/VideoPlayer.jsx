import { useRef, useState, useEffect } from "react";

export default function VideoPlayer({ title, videoSrc, posterImgSrc }) {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto reset the 'isPlaying' state
  useEffect(() => {
    const vid = video.current;
    if (!vid) return;

    const onEnd = () => setIsPlaying(false);
    vid.addEventListener("ended", onEnd);

    return () => {
      vid.removeEventListener("ended", onEnd);
    };
  }, []);

  function playHandler() {
    if (video.current) {
      video.current.currentTime = 0;
      video.current.muted = false;
      video.current.play();
      setIsPlaying(true);
    }
  }

  function stopHandler() {
    if (video.current) {
      video.current.pause();
      video.current.currentTime = 0;
      setIsPlaying(false);
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <h1 className="underline mb-[10px] xl:mb-[18px] font-bold text-[12px] xl:text-[18px] text-[#C1C1C1]">
        {title}
      </h1>

      {/* Wrapper to manage hover overlay on desktop */}
      <div className="relative group">
        <video
          ref={video}
          className="w-full h-auto rounded-xl shadow-lg"
          playsInline
          muted
          controls={false}
          preload="metadata"
          poster={posterImgSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay controls for lg+ screens */}
        <div
          className={`max-lg:hidden ${
            isPlaying && "hidden"
          } lg:flex absolute inset-0 items-center justify-center bg-black/30 max-lg:opacity-0 ${
            isPlaying && "opacity-0"
          } group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
        >
          <button
            onClick={isPlaying ? stopHandler : playHandler}
            className="bg-white/70 text-black p-6 rounded-full scale-[1.02] hover:scale-105 transition-transform"
            aria-label={isPlaying ? "Stop video" : "Play video"}
          >
            <img
              src={
                isPlaying
                  ? "/images/icons/white-square.svg"
                  : "/images/icons/white-triangle.svg"
              }
              className={`w-[50px] h-[50px] ${isPlaying ? "" : "rotate-90"}`}
              alt={isPlaying ? "stop icon" : "play icon"}
            />
          </button>
        </div>
      </div>

      {/* Visible on mobile & small tablets (below lg) */}
      <div className="mt-6 flex lg:hidden justify-center gap-6">
        <button
          onClick={isPlaying ? stopHandler : playHandler}
          className={
            isPlaying
              ? "bg-red-600/60 p-4 rounded-full transition"
              : "border-[0.5px] p-4 rounded-full transition"
          }
          aria-label={isPlaying ? "Stop video" : "Play video"}
        >
          <img
            src={
              isPlaying
                ? "/images/icons/white-square.svg"
                : "/images/icons/white-triangle.svg"
            }
            className={`w-[25px] h-[25px] ${isPlaying ? "" : "rotate-90"}`}
            alt={isPlaying ? "stop icon" : "play icon"}
          />
        </button>
      </div>
    </div>
  );
}
