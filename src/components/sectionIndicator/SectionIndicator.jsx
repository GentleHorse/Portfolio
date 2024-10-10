import { Suspense, useState } from "react";
import { Link as ReactScrollLink } from "react-scroll";

/**
 * target id: "intro", "challenge", "approach", "outcome"
 */
export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("intro");

  const activeSectionHandler = (section) => {
    setActiveSection(section);
  };

  return (
    <Suspense>
      <div className="fixed z-20 h-[100vh] flex flex-col justify-center ml-5">
        <ReactScrollLink
          to="intro"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="flex items-center gap-2 my-3 hover:cursor-pointer"
          onSetActive={(event) => {
            activeSectionHandler(event);
          }}
          onClick={() => {
            activeSectionHandler("intro");
          }}
        >
          <div
            className={`w-[10px] h-[10px] ${
              activeSection === "intro" ? "bg-[#FFFFFF]" : "bg-[#C1C1C160]"
            }   rounded-full`}
          />
          <p
            className={`font-montserrat text-[12px] ${
              activeSection === "intro" ? "text-[#FFFFFF]" : "text-[#C1C1C160]"
            }  `}
          >
            Intro
          </p>
        </ReactScrollLink>
        <ReactScrollLink
          to="challenge"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="flex items-center gap-2 my-3 hover:cursor-pointer"
          onSetActive={(event) => {
            activeSectionHandler(event);
          }}
          onClick={() => {
            activeSectionHandler("challenge");
          }}
        >
          <div
            className={`w-[10px] h-[10px] ${
              activeSection === "challenge" ? "bg-[#FFFFFF]" : "bg-[#C1C1C160]"
            }   rounded-full`}
          />
          <p
            className={`font-montserrat text-[12px] ${
              activeSection === "challenge"
                ? "text-[#FFFFFF]"
                : "text-[#C1C1C160]"
            }  `}
          >
            Challenge
          </p>
        </ReactScrollLink>
        <ReactScrollLink
          to="approach"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="flex items-center gap-2 my-3 hover:cursor-pointer"
          onSetActive={(event) => {
            activeSectionHandler(event);
          }}
          onClick={() => {
            activeSectionHandler("approach");
          }}
        >
          <div
            className={`w-[10px] h-[10px] ${
              activeSection === "approach" ? "bg-[#FFFFFF]" : "bg-[#C1C1C160]"
            }   rounded-full`}
          />
          <p
            className={`font-montserrat text-[12px] ${
              activeSection === "approach"
                ? "text-[#FFFFFF]"
                : "text-[#C1C1C160]"
            }  `}
          >
            Approach
          </p>
        </ReactScrollLink>
        <ReactScrollLink
          to="outcome"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="flex items-center gap-2 my-3 hover:cursor-pointer"
          onSetActive={(event) => {
            activeSectionHandler(event);
          }}
          onClick={() => {
            activeSectionHandler("outcome");
          }}
        >
          <div
            className={`w-[10px] h-[10px] ${
              activeSection === "outcome" ? "bg-[#FFFFFF]" : "bg-[#C1C1C160]"
            }   rounded-full`}
          />
          <p
            className={`font-montserrat text-[12px] ${
              activeSection === "outcome"
                ? "text-[#FFFFFF]"
                : "text-[#C1C1C160]"
            }  `}
          >
            Outcome
          </p>
        </ReactScrollLink>
      </div>
    </Suspense>
  );
}
