import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";
import SoundLayerUI from "../../components/utilComponents/SoundLayerUI.jsx";

import "lenis/dist/lenis.css";

import WeatherCerealHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-weather-cereal.jpg";
import ObjectRotterdam2024HeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-object-rotterdam-2024.jpg";

import WeatherCerealImage01 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-01.jpg";
import WeatherCerealImage02 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-02.jpg";
import WeatherCerealImage03 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-03.jpg";
import WeatherCerealImage04 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-04.jpg";
import WeatherCerealImage05 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-05.jpg";
import WeatherCerealImage06 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-06.jpg";
import WeatherCerealImage07 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-07.jpg";

import WeatherCerealVideo01 from "../../../public/videos/weather-cereal/weather-cereal-01.mp4";
import WeatherCerealVideo02 from "../../../public/videos/weather-cereal/weather-cereal-02.mp4";
import WeatherCerealVideo03 from "../../../public/videos/weather-cereal/weather-cereal-03.mp4";

const IMAGES_ARRAY = [
  WeatherCerealImage01,
  WeatherCerealImage02,
  WeatherCerealImage03,
  WeatherCerealImage04,
  WeatherCerealImage05,
  WeatherCerealImage06,
  WeatherCerealImage07,
];

const VIDEOS_ARRAY = [
  WeatherCerealVideo01,
  WeatherCerealVideo02,
  WeatherCerealVideo03,
];

const WEATHER_SOUNDS_SOURCE_ARRAY_OBJ = {
  clear: [
    {
      id: "clear-01",
      audioName: "Waterfall",
      audioURL: "/sounds/weather/clear/waterfall.mp3",
    },
    {
      id: "clear-02",
      audioName: "Wind (soft)",
      audioURL: "/sounds/weather/clear/wind-soft.mp3",
    },
    {
      id: "clear-03",
      audioName: "Leaves",
      audioURL: "/sounds/weather/clear/leaves.mp3",
    },
    {
      id: "clear-04",
      audioName: "Birds (dawn chorus)",
      audioURL: "/sounds/weather/clear/birds-dawn-chorus.mp3",
    },
    {
      id: "clear-05",
      audioName: "Stream",
      audioURL: "/sounds/weather/clear/stream.mp3",
    },
  ],
  clouds: [
    {
      id: "clouds-01",
      audioName: "Wind (soft)",
      audioURL: "/sounds/weather/clouds/wind-soft.mp3",
    },
    {
      id: "clouds-02",
      audioName: "Leaves",
      audioURL: "/sounds/weather/clouds/leaves.mp3",
    },
    {
      id: "clouds-03",
      audioName: "Birds (raven)",
      audioURL: "/sounds/weather/clouds/birds-raven.mp3",
    },
    {
      id: "clouds-04",
      audioName: "Stream",
      audioURL: "/sounds/weather/clouds/stream.mp3",
    },
  ],
  rain: [
    {
      id: "rain-01",
      audioName: "Wind (soft)",
      audioURL: "/sounds/weather/rain/wind-soft.mp3",
    },
    {
      id: "rain-02",
      audioName: "Dripping rain",
      audioURL: "/sounds/weather/rain/dripping-rain.mp3",
    },
    {
      id: "rain-03",
      audioName: "Rainfall (light)",
      audioURL: "/sounds/weather/rain/rainfall-light.mp3",
    },
    {
      id: "rain-04",
      audioName: "Rainfall (heavy)",
      audioURL: "/sounds/weather/rain/rainfall-heavy.mp3",
    },
  ],
  drizzle: [
    {
      id: "drizzle-01",
      audioName: "Wind (soft)",
      audioURL: "/sounds/weather/drizzle/wind-soft.mp3",
    },
    {
      id: "drizzle-02",
      audioName: "Leaves",
      audioURL: "/sounds/weather/drizzle/leaves.mp3",
    },
    {
      id: "drizzle-03",
      audioName: "Stream",
      audioURL: "/sounds/weather/drizzle/stream.mp3",
    },
    {
      id: "drizzle-04",
      audioName: "Dripping rain",
      audioURL: "/sounds/weather/drizzle/dripping-rain.mp3",
    },
    {
      id: "drizzle-05",
      audioName: "Rainfall (light)",
      audioURL: "/sounds/weather/drizzle/rainfall-light.mp3",
    },
    {
      id: "drizzle-06",
      audioName: "Rainfall (medium)",
      audioURL: "/sounds/weather/drizzle/rainfall-medium.mp3",
    },
  ],
  thunderstorm: [
    {
      id: "thunderstorm-01",
      audioName: "Waterfall",
      audioURL: "/sounds/weather/thunderstorm/waterfall.mp3",
    },
    {
      id: "thunderstorm-02",
      audioName: "Wind (soft)",
      audioURL: "/sounds/weather/thunderstorm/wind-soft.mp3",
    },
    {
      id: "thunderstorm-03",
      audioName: "Stream",
      audioURL: "/sounds/weather/thunderstorm/stream.mp3",
    },
    {
      id: "thunderstorm-04",
      audioName: "Rainfall (heavy)",
      audioURL: "/sounds/weather/thunderstorm/rainfall-heavy.mp3",
    },
    {
      id: "thunderstorm-05",
      audioName: "Thunder rumbles",
      audioURL: "/sounds/weather/thunderstorm/thunder-rumbles.mp3",
    },
  ],
  snow: [
    {
      id: "snow-01",
      audioName: "Wind (soft)",
      audioURL: "/sounds/weather/snow/wind-soft.mp3",
    },
    {
      id: "snow-02",
      audioName: "Wind (hard)",
      audioURL: "/sounds/weather/snow/wind-hard.mp3",
    },
    {
      id: "snow-03",
      audioName: "Frost cracking",
      audioURL: "/sounds/weather/snow/frost-cracking.mp3",
    },
    {
      id: "snow-04",
      audioName: "Crunching snow",
      audioURL: "/sounds/weather/snow/crunching-snow.mp3",
    },
    {
      id: "snow-05",
      audioName: "Wind chimes",
      audioURL: "/sounds/weather/snow/wind-chimes.mp3",
    },
  ],
  mist: [
    {
      id: "mist-01",
      audioName: "Wind (soft)",
      audioURL: "/sounds/weather/mist/wind-soft.mp3",
    },
    {
      id: "mist-02",
      audioName: "Wind (deep)",
      audioURL: "/sounds/weather/mist/wind-deep.mp3",
    },
    {
      id: "mist-03",
      audioName: "Leaves",
      audioURL: "/sounds/weather/mist/leaves.mp3",
    },
    {
      id: "mist-04",
      audioName: "Birds (owl)",
      audioURL: "/sounds/weather/mist/birds-owl.mp3",
    },
    {
      id: "mist-05",
      audioName: "Birds (raven)",
      audioURL: "/sounds/weather/mist/birds-raven.mp3",
    },
  ],
};

export default function WeatherCerealPage() {
  /**
   * IMAGES ARRAY
   */
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    setImagesArray((prevImagesArray) => {
      const newImagesArray = [...prevImagesArray];
      IMAGES_ARRAY.forEach((image) => {
        newImagesArray.push(image);
      });

      return newImagesArray;
    });
  }, []);

  /**
   * VIDEOS ARRAY
   */
  const [videosArray, setVideosArray] = useState([]);

  useEffect(() => {
    setVideosArray((prevVideosArray) => {
      const newVideosArray = [...prevVideosArray];
      VIDEOS_ARRAY.forEach((video) => {
        newVideosArray.push(video);
      });

      return newVideosArray;
    });
  }, []);

  /**
   * MOMENTUM SMOOTH SCROLLING - LENIS SETUP
   */
  const [loadedStatus, setLoadedStatus] = useState(false);

  useEffect(() => {
    setLoadedStatus(document.readyState === "complete");
    console.log("LoadedStauts: ", loadedStatus);

    // if (imagesArray.length === 18 && videosArray.length === 2) {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    console.log(`Set Lenis`);
    // }

    return () => {
      lenis.scrollTo(100);
      lenis.destroy();

      console.log("Reset and destroy Lenis");
    };
  }, [imagesArray, videosArray]);

  /**
   * SCROLL ELEMENT APPEAR ANIMATION
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-element");
          } else {
            entry.target.classList.remove("show-element");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: [0, 0.1, 1],
      }
    );

    const tags = document.querySelectorAll(".hidden-element");
    tags.forEach((tag) => {
      observer.observe(tag);
    });
  }, []);

  /**
   * Hover state
   */
  const [hover, setHover] = useState(false);

  return (
    <>
      <Header home about works contact />

      {!!isBrowser && <SectionIndicator />}

      <Suspense>
        <div id="page">
          {/* ----- INTRO ----- */}

          <section
            name="intro"
            className="py-[76px] xl:pt-[148px] mx-[10vw] xl:mx-[240px]"
          >
            <h1 className="project-title mb-[21px] xl:mb-[42px] font-serif text-[36px] xl:text-[72px] text-[#C1C1C1]">
              Weather Cereal
            </h1>
            <img
              src={WeatherCerealHeroImage}
              alt="Weather Cereal Hero Image"
              className="mb-[25px] xl:mb-[70px] w-full h-auto object-cover"
            />
            <div className="flex flex-col xl:flex-row">
              <div className="flex-none w-auto xl:w-[350px]">
                <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  2025
                </p>
                <div>
                  <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                    UX/UI Design
                    <br /> + 3D Modeling
                    <br /> + Web Development
                  </p>
                  <div className="mt-0 xl:mt-10 mb-10 xl:mb-16 flex flex-row items-center gap-4">
                    <button
                      className="border-2 rounded-xl hover:bg-[#C1C1C1]"
                      onClick={() =>
                        window.open("https://weather-cereal.vercel.app/")
                      }
                    >
                      <p className="text-center mx-4 my-2 xl:px-2 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#C1C1C1] hover:text-[#ffffff]">
                        Launch Project
                      </p>
                    </button>
                    <a
                      href="https://github.com/GentleHorse/WeatherCereal"
                      target="_blank"
                      className="focus:outline-none" // Remove outline of the default focus
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-[45px] text-[#FFFFFF] hover:text-[#FFFFFF]/70"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
                Though brief, checking the weather each morning deeply
                influences one’s mood. "Weather Cereal" turns that habit into a
                calming experience with tranquil 3D scenes and gentle sounds
                inspired by Japanese zen gardens, aiming to elevate emotional
                well-being alongside providing practical weather updates.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">#mindful mornings</p>
              <p className="text-[14px] text-[#C1C1C1]">
                #daily tranquil ritual
              </p>
              <p className="text-[14px] text-[#C1C1C1]">#mood by design</p>
            </div>
          </section>

          <section className="mt-[87px]">
            <img
              src={WeatherCerealImage01}
              className="w-full h-[120px] xl:h-[420px] object-cover"
            />
          </section>

          {/* ----- CHALLENGE ----- */}

          <section
            name="challenge"
            className="pt-[124px] xl:pt-[240px] mx-[10vw] xl:mx-[240px]"
          >
            <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
              CHALLENGE
            </p>
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Turning Forecasts into Feelings
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The key challenge lies in lifting the user’s mood within just
              20–60 seconds—the typical time people spend checking the weather.
              While offering clear, stress-free forecasts, "Weather Cereal"
              enhances this micro-moment with cinematic, data-driven 3D visuals,
              minimalist mobile-first UI, and gentle motion paired with nature
              sounds. Together, these elements create a calming yet energizing
              experience that subtly shifts the user's emotional state toward a
              more positive, vibrant start to their day.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="mx-auto w-[70%]">
              <video
                className="hidden-element grid-images w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={WeatherCerealVideo01} type="video/mp4" />
              </video>
            </div>
          </section>

          {/* ----- APPROACH ----- */}

          <section
            name="approach"
            className="pt-[124px] xl:pt-[240px] mx-[10vw] xl:mx-[240px]"
          >
            <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
              APPROACH
            </p>
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Zen garden mood enhanced by “komorebi” effects
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Nature is the heart of this weather app, designed to create a
              calming yet subtly energizing visual experience. Inspired by
              Japanese zen gardens—miniature landscapes of stylized nature—the
              scene brings serenity into users’ hands. To deepen the tranquil
              atmosphere, soft dappled light known as komorebi is projected,
              evoking the peaceful feeling of sunlight filtering through leaves.
            </p>
          </section>

          <section className="my-[87px] mx-[10vw] xl:mx-[240px] flex flex-col gap-10">
            <img
              src={WeatherCerealImage02}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={WeatherCerealImage03}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px] grid grid-cols-2 gap-10">
            <img
              src={WeatherCerealImage04}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={WeatherCerealImage05}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="pt-[124px] xl:pt-[240px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Slow animations create a relaxed interaction rhythm
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Every motion is carefully designed to slow the pace and evoke
              calm. Weather icons fall lightly, and petals rotate and drift
              gently, like floating in a breeze. These slow movements help shape
              a peaceful rhythm. The depth of field effect further enhances this
              softness, drawing attention to key elements while maintaining an
              overall sense of visual tranquility.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="mx-auto w-[70%]">
              <video
                className="hidden-element grid-images w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={WeatherCerealVideo02} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="pt-[124px] xl:pt-[240px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Layered nature sounds add depth to weather app experience
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The app uses weather-based audio to deepen sensory engagement.
              Natural sounds—such as wind, birds, and streams—are layered and
              adjusted based on real-time data. Shared base layers ensure
              consistency across scenes, while unique additions highlight
              changing weather. This approach strengthens the connection between
              sound and visuals, enriching the zen garden atmosphere with subtle
              emotional cues.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px] flex flex-col gap-20">
            <SoundLayerUI
              title='Weather - "Clear"'
              audioArray={WEATHER_SOUNDS_SOURCE_ARRAY_OBJ.clear}
            />
            <SoundLayerUI
              title='Weather - "Clouds"'
              audioArray={WEATHER_SOUNDS_SOURCE_ARRAY_OBJ.clouds}
            />
            <SoundLayerUI
              title='Weather - "Rain"'
              audioArray={WEATHER_SOUNDS_SOURCE_ARRAY_OBJ.rain}
            />
            <SoundLayerUI
              title='Weather - "Drizzle"'
              audioArray={WEATHER_SOUNDS_SOURCE_ARRAY_OBJ.drizzle}
            />
            <SoundLayerUI
              title='Weather - "Thunderstorm"'
              audioArray={WEATHER_SOUNDS_SOURCE_ARRAY_OBJ.thunderstorm}
            />
            <SoundLayerUI
              title='Weather - "Snow"'
              audioArray={WEATHER_SOUNDS_SOURCE_ARRAY_OBJ.snow}
            />
            <SoundLayerUI
              title='Weather - "Mist"'
              audioArray={WEATHER_SOUNDS_SOURCE_ARRAY_OBJ.mist}
            />
          </section>

          <section className="pt-[124px] xl:pt-[240px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Cohesive icons used across forecast and UI elements
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Clear, quick visual communication is key, so custom icons are used
              throughout to avoid visual noise and maintain calmness. A cohesive
              style spans 3D scenes, forecast data, and loading states. For
              precipitation, the app uses nine distinct levels with custom
              icons—moving beyond graphs—to help users better anticipate and
              prepare for varying weather conditions.
            </p>
          </section>

          <section className="my-[87px] mx-[10vw] xl:mx-[240px] flex flex-col gap-16 xl:gap-32">
            <img
              src={WeatherCerealImage06}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={WeatherCerealImage07}
              className="hidden-element w-full h-auto object-cover"
            />
            <video
              className="hidden-element grid-images w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={WeatherCerealVideo03} type="video/mp4" />
            </video>
          </section>

          {/* ----- OUTCOME ----- */}

          <section
            name="outcome"
            className="pt-[124px] mx-[10vw] xl:mx-[240px]"
          >
            <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
              OUTCOME
            </p>
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Weather data driven 3D scenes and soundscapes
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The app retrieves weather data via OpenWeatherMap API to create
              atmospheric 3D scenes, enriched with ambient audio that reflects
              the current weather.
            </p>
          </section>

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Geo-based auto location + global search support
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              To enhance everyday usability, the app automatically detects the
              user’s location via geolocation. For added flexibility, users can
              also manually enter any city name to check weather conditions
              globally, making the experience both convenient and customizable.
            </p>
          </section>

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              48 hours weather & precipitation forecast
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              One of the app’s core functions is its 48-hour forecast. Users
              access it easily by tapping an icon. To enhance the experience, a
              scroll-based 3D weather animation adds a subtle but fun layer to
              user interaction.
            </p>
          </section>

          <section className="pt-[48px] mx-[10vw] xl:mx-[240px]">
            <div className="mt-10 xl:mt-0 mb-16 xl:mb-24 mr-10 flex flex-col xl:flex-row items-start gap-10 xl:gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://object-rotterdam-2024-floor-plan.vercel.app/"
                  )
                }
              >
                <p className="inline border-2 rounded-xl hover:bg-[#C1C1C1] text-center mr-4 my-2 px-6 py-4 font-light font-roboto text-[10px] xl:text-[15px] text-[#C1C1C1] hover:text-[#ffffff]">
                  Launch Project
                </p>
              </button>
            </div>
          </section>

          {/* ----- BONUS ----- */}

          <section
            name="bonus"
            className="relative overflow-hidden mt-[96px] xl:mt-[240px] mb-[18px] xl:mb-[64px] mx-[10vw] xl:mx-[240px] p-[64px] bg-[url(/images/app-developments/weather-cereal/weather-cereal-image-01.jpg)] bg-fill bg-center rounded-lg"
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-white">
              WHY "WEATHER CEREAL"?
            </p>
            <p className="hidden-element text-[16px] xl:text-[22px] text-white/75">
              Why Weather Cereal? Because mornings are rituals — and just like
              cereal gives your body energy, this app gives your brain a gentle
              boost through visuals, sounds, and weather. It’s a playful way to
              say “start your day with nature.”
            </p>
          </section>

          {/* -------------- TO NEXT PROJECT FOOTER PART ------------ */}

          <section className="my-[84px] xl:my-[124px] mx-[5vw] xl:mx-[240px]">
            <div className="w-full flex">
              <hr className="mb-[60px] mx-20 xl:mx-56 flex-grow border-[#C1C1C1]" />
            </div>
          </section>

          <section className="mt-0 xl:mt-[87px] mx-[5vw] xl:mx-[240px]">
            <Link
              to="/object-rotterdam-2024"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={ObjectRotterdam2024HeroImage}
                className="w-3/5 xl:w-2/5 h-auto object-cover opacity-50"
              />

              <p className="absolute top-[45%] text-[12px] xl:text-[18px] text-[#C1C1C1]">
                Explore the next project
              </p>
            </Link>
          </section>

          <section className="mt-[87px] pb-[80px] mx-[5vw] xl:mx-[240px]">
            {isBrowser ? (
              <div className="w-full flex flex-row justify-center gap-12">
                <Link
                  to="/"
                  className="relative flex flex-col items-center"
                  reloadDocument={true}
                >
                  <div className="w-[120px] xl:w-[175px] h-[120px] xl:h-[175px] border hover:bg-[#CC543A] rounded-full text-[#C1C1C1] hover:text-[#FFFFFF]">
                    <p className="absolute w-[120px] xl:w-[175px] text-center font-roboto top-[55px] xl:top-[78px] text-[12px] xl:text-[18px] ">
                      Back to "Atelier"
                    </p>
                  </div>
                </Link>
                <Link
                  to="/works"
                  className="relative flex flex-col items-center"
                  reloadDocument={true}
                >
                  <div className="w-[120px] xl:w-[175px] h-[120px] xl:h-[175px] border hover:bg-[#0F2540] rounded-full text-[#C1C1C1] hover:text-[#FFFFFF]">
                    <p className="absolute w-[120px] xl:w-[175px] text-center font-roboto top-[55px] xl:top-[78px] text-[12px] xl:text-[18px] ">
                      Back to "Works"
                    </p>
                  </div>
                </Link>
              </div>
            ) : (
              <Link
                to="/works"
                className="relative w-full flex flex-col items-center"
                reloadDocument={true}
              >
                <div className="w-[120px] xl:w-[175px] h-[120px] xl:h-[175px] border hover:bg-[#C1C1C1] rounded-full text-[#C1C1C1] hover:text-[#FFFFFF]">
                  <p className="absolute w-[120px] xl:w-[175px] text-center font-roboto top-[55px] xl:top-[78px] text-[12px] xl:text-[18px] ">
                    Back to "Works"
                  </p>
                </div>
              </Link>
            )}
          </section>
        </div>
      </Suspense>
    </>
  );
}
