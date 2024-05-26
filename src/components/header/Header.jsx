import { useState } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header({ topic = "Enjoy exploration !!" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed right-1 text-right mt-5 mr-5 z-10">
      <section>
        {/* <p className="font-micro-5 mb-[5px] text-[20px] text-[#FFB11B]">
          Toshihito Endo's Portfolio
        </p>
        <p className="font-pixelify-sans mb-[5px] text-[20px] text-[#FFB11B]">
          {topic}
        </p> */}

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
              <Link to="/">
                <h1 className="font-dot-gothic-16 mt-[30px] mb-[5px] text-[20px] text-[#721bff]">
                  Home
                </h1>
              </Link>

              <h1 className="font-dot-gothic-16 mt-[10px] mb-[5px] text-[20px] text-[#721bff]">
                Design Projects
              </h1>

              <Link to="/ambience-of-light">
                <p className="font-pixelify-sans mb-[5px] text-[20px] text-[#1bff6b]">
                  Ambience of Light
                </p>
              </Link>
              <Link to="/beauty-of-time-passing">
                <p className="font-pixelify-sans mb-[5px] text-[20px] text-[#1bff6b]">
                  Beauty of Time Passing
                </p>
              </Link>
              <Link to="/underrepresented-uniqueness">
                <p className="font-pixelify-sans mb-[5px] text-[20px] text-[#1bff6b]">
                  Underrepresented Uniqueness
                </p>
              </Link>
              <Link to="/intervention-in-our-disconnection">
                <p className="font-pixelify-sans mb-[5px] text-[20px] text-[#1bff6b]">
                  Intervention in our disconnection
                </p>
              </Link>
              <Link to="/living-typography">
                <p className="font-pixelify-sans mb-[5px] text-[20px] text-[#1bff6b]">
                  Living Typography
                </p>
              </Link>
              <Link to="/comforting-dinner">
                <p className="font-pixelify-sans mb-[5px] text-[20px] text-[#1bff6b]">
                  Comforting Dinner
                </p>
              </Link>

              <Link to="three-d-visuals">
                <h1 className="font-dot-gothic-16 mt-[10px] mb-[5px] text-[20px] text-[#721bff]">
                  3D Visuals
                </h1>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* <section>
        <p className="font-roboto mb-[5px] text-[20px] text-[#FFB11B]">
          This is "robot" font.
        </p>
        <p className="font-permanent-marker mb-[5px] text-[20px] text-[#FFB11B]">
          This is "permanent-marker" font.
        </p>
        <p className="font-shadows-into-light mb-[5px] text-[20px] text-[#FFB11B]">
          This is "shadows-into-light" font.
        </p>
        <p className="font-micro-5 mb-[5px] text-[20px] text-[#FFB11B]">
          This is "micro-5" font.
        </p>
        <p className="font-vt323 mb-[5px] text-[20px] text-[#FFB11B]">
          This is "vt323" font.
        </p>
        <p className="font-pixelify-sans mb-[5px] text-[20px] text-[#FFB11B]">
          This is "pixelify-sans" font.
        </p>
        <p className="font-new-tegomin mb-[5px] text-[20px] text-[#FFB11B]">
          此れは、「ニューテゴミン」の書体である。
        </p>
        <p className="font-yuji-syuku mb-[5px] text-[20px] text-[#FFB11B]">
          此れは、「佑字 肅」の書体である。
        </p>
        <p className="font-dot-gothic-16 mb-[5px] text-[20px] text-[#FFB11B]">
          此れは、「ドットゴシック１６」の書体である。
        </p>
      </section> */}
    </header>
  );
}
