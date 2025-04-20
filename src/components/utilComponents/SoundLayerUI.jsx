import { useRef, useState } from "react";

export default function SoundLayerUI({ title, audioArray }) {
  const audioRefs = useRef([]);
  const [playingAudios, setPlayingAudios] = useState([]);

  const toggleAudio = (index) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    if (playingAudios.includes(index)) {
      audio.pause();
      audio.currentTime = 0;
      setPlayingAudios((prev) => prev.filter((i) => i !== index));
    } else {
      audio.play();

      // Attach ended listener only once
      if (!audio.__endedListenerAttached) {
        audio.addEventListener("ended", () => {
          setPlayingAudios((prev) => prev.filter((i) => i !== index));
        });
        audio.__endedListenerAttached = true; // prevent duplicate listeners
      }

      setPlayingAudios((prev) => [...prev, index]);
    }
  };

  return (
    <div className="mx-8 my-4">
      <h1 className="underline mb-[20px] xl:mb-[36px] font-bold text-[12px] xl:text-[18px] text-[#C1C1C1]">
        {title}
      </h1>

      <ul className="flex flex-row w-full justify-between flex-wrap gap-4">
        {audioArray.map((audio, index) => (
          <li key={audio.id} className="flex flex-col items-center">
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={audio.audioURL}
              preload="auto"
            />
            <div className="neumorphic-box-black p-4">
              <button
                onClick={() => toggleAudio(index)}
                className={`inline-block border-[0.5px] rounded-full p-4 transition-all duration-200 ${
                  playingAudios.includes(index)
                    ? "bg-[#FC3E41]/75 shadow-lg scale-105"
                    : "hover:bg-white/50 hover:scale-105"
                }`}
              >
                <img
                  src={
                    playingAudios.includes(index)
                      ? "/images/icons/white-square.svg"
                      : "/images/icons/white-triangle-roate-90d.svg"
                  }
                  className="w-[25px] h-[25px]"
                  alt={
                    playingAudios.includes(index) ? "stop icon" : "play icon"
                  }
                />
              </button>
            </div>

            <p className="mt-4 font-mono text-[9.5px] xl:text-[11px] text-[#C1C1C1]">
              {audio.audioName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
