import { useState } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Header({ home, about, works, contact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed right-1 text-right mt-5 mr-5 z-10">
      <section>
        <div className="w-full flex justify-end">
          <Hamburger
            className="mr-0"
            direction="right"
            color="#fcfaf2"
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
          />
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {home && (
                <Link to="/">
                  <h1 className="font-roboto mt-[20px] mr-[10px] mb-[5px] text-[20px] text-[#C1C1C1]">
                    Explore
                  </h1>
                </Link>
              )}

              {about && (
                <Link to="/about">
                  <h1 className="font-roboto mt-[20px] mr-[10px] mb-[5px] text-[20px] text-[#C1C1C1]">
                    About
                  </h1>
                </Link>
              )}

              {works && (
                <Link to="/works">
                  <h1 className="font-roboto mt-[20px] mr-[10px] mb-[5px] text-[20px] text-[#C1C1C1]">
                    Works
                  </h1>
                </Link>
              )}

              {contact && (
                <Link to="/contact">
                  <h1 className="font-roboto mt-[20px] mr-[10px] mb-[5px] text-[20px] text-[#C1C1C1]">
                    Contact
                  </h1>
                </Link>
              )}

              <div className="flex flex-col">
                <a
                  href="https://www.instagram.com/toshiendo3d/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="font-roboto mt-[20px] mr-[10px] mb-[5px] text-[20px] text-[#C1C1C1]"
                  />
                </a>

                <a href="https://github.com/GentleHorse" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="font-roboto mt-[20px] mr-[10px] mb-[5px] text-[20px] text-[#C1C1C1]"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/toshihito-endo-a68a82172/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="font-roboto mt-[20px] mr-[10px] mb-[5px] text-[20px] text-[#C1C1C1]"
                  />
                </a>

                <a href="https://x.com/toshihito_endo" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="font-roboto mt-[20px] mr-[10px] mb-[5px] text-[20px] text-[#C1C1C1]"
                  />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </header>
  );
}
