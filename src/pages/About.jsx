import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Text,
  Image,
  Scroll,
  ScrollControls,
  Environment,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { isBrowser } from "react-device-detect";

import Header from "../components/header/Header.jsx";
import MaleHead from "../components/models/maleHead/MaleHead.jsx";
import LoadingScreen from "../components/loadingScreen/LoadingScreen.jsx";

/**
 * INITIAL PARAM VALUES
 */
const SCROLL_PAGES = 6;
const SCROLL_DAMPING = 0.15;
const SCROLL_DISTANCE = 0.5;
const CAMERA_FOV = isBrowser ? 15 : 40;
const CAMERA_POSITION = isBrowser ? [0, 0, 20] : [0, 0, 8];
const HEAD_POSITION = isBrowser ? [0.8, -3, 0] : [0.15, -3.25, 0];

export default function AboutPage() {
  return (
    <>
      <Header home works contact />

      <Canvas camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}>
        <Suspense fallback={<LoadingScreen />}>
          <ScrollControls
            pages={SCROLL_PAGES}
            damping={SCROLL_DAMPING}
            distance={SCROLL_DISTANCE}
          >
            {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

            <MaleHead
              scale={0.47}
              position={HEAD_POSITION}
              rotation={[Math.PI * -0.1, Math.PI * 0.1, 0]}
            />

            {/* <OrbitControls /> */}

            <Environment preset="city" />

            <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>

            <Scroll html>
              {/* DOM contents in here will scroll along */}
              <section className="h-[100vh]">
                <h1 className="h-full mt-[50vh] ml-10 font-cinzel text-[60px] text-[#ffffff]">
                  Hello, <br />
                  it's Me, Toshi !
                </h1>
              </section>

              <section className="h-[100vh]">
                <article className="py-[5%] px-[12%] w-[60vw]">
                  <p className="font-roboto text-[#fcfaf2]">
                    Toshihito Endo is a designer, creative developer from Japan.
                    He got a economic bachelor degree in Japan and worked at a
                    finance and accounting department of a semiconductor
                    manufacturing company in Japan. After several years he
                    decide to dive into design feild, and moved to Netherlands.
                    In 2023, he graduated with a bachelor degree from the Design
                    Academy Eindhoven.
                    <br />
                    <br />
                    He is always interested in technologies and enjoys learning
                    new technologies, but at the same time he is concern that
                    nowadays rapid technological developments make us exhausted
                    by forcing us to keep it up with demanding never ending
                    adaptation to it. Most of his design design practices are
                    somewhere between this posibility and fragility of
                    technology, and attempts to search for tools, mindsets,
                    cultures to bridge our lives and technologies in a
                    harmonical way by connecting human to nature. He believes
                    that technology is not something "against" nature but
                    something "co-existing with" nature, and if we learn proper
                    usage of technology, it definitely helps us to unite with
                    nature again.
                  </p>
                </article>
              </section>

              <section className="h-[100vh]">
                <h1 className="ml-10 font-cinzel text-[60px] text-[#ffffff]">
                  Experiences
                </h1>
                <article className="py-[5%] px-[12%] w-[80vw]">
                  <p className="font-roboto text-[#fcfaf2]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean id lacus massa. Integer vulputate enim vitae leo
                    pulvinar, ut feugiat ex sodales. Sed ultricies eleifend
                    dictum. Vestibulum laoreet aliquet odio vel efficitur. Nunc
                    eget dui a risus lacinia bibendum. Donec pellentesque
                    aliquam lacus id sagittis. Vestibulum non quam eget mauris
                    hendrerit mattis id eu ante. Phasellus laoreet tincidunt
                    pellentesque. Morbi vel aliquet massa. Aliquam imperdiet dui
                    interdum lectus efficitur rhoncus. Proin aliquam tortor sem,
                    a rhoncus justo consectetur ut. Pellentesque congue ac diam
                    vel consectetur. Suspendisse pretium ultricies metus, eget
                    convallis dui euismod ac. Donec vitae semper ex. Nam vel
                    vestibulum magna. Phasellus sed vulputate massa. Proin sit
                    amet commodo leo. Maecenas pulvinar risus eu mauris ornare
                    porttitor. Ut laoreet gravida lorem, id efficitur eros
                    pharetra quis. Donec ornare augue et ornare interdum. Sed
                    porta mollis ipsum at dictum. Vestibulum nec scelerisque
                    urna. Nunc efficitur placerat efficitur. Curabitur feugiat
                    eros viverra vehicula imperdiet. Donec condimentum ante a
                    leo ultrices, et tempus dui pharetra. Aenean hendrerit diam
                    nisl, vel auctor enim cursus eu. Nullam neque ligula,
                    viverra sed pretium at, dapibus quis dui. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Vestibulum sed scelerisque odio. Etiam eros
                    erat, suscipit at augue vitae, sollicitudin cursus turpis.
                    Morbi venenatis nunc et elit dignissim ornare. Phasellus vel
                    purus enim. Nunc convallis dignissim tortor. Quisque
                    pulvinar nec nulla vel dignissim. Morbi id laoreet metus, eu
                    auctor velit. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Aenean euismod
                    aliquet maximus. Aliquam congue facilisis leo ac mollis.
                    Mauris sit amet nisl ac ipsum efficitur varius. Fusce mollis
                    tempus ipsum, scelerisque feugiat turpis rhoncus vel. In
                    tortor tortor, convallis ut ligula ac, congue faucibus nibh.
                  </p>
                </article>
              </section>

              <section className="h-[100vh]">
                <h1 className="ml-10 font-cinzel text-[60px] text-[#ffffff]">
                  Exhibitions
                </h1>
                <article className="py-[5%] px-[12%] w-[80vw]">
                  <p className="font-roboto text-[#fcfaf2]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean id lacus massa. Integer vulputate enim vitae leo
                    pulvinar, ut feugiat ex sodales. Sed ultricies eleifend
                    dictum. Vestibulum laoreet aliquet odio vel efficitur. Nunc
                    eget dui a risus lacinia bibendum. Donec pellentesque
                    aliquam lacus id sagittis. Vestibulum non quam eget mauris
                    hendrerit mattis id eu ante. Phasellus laoreet tincidunt
                    pellentesque. Morbi vel aliquet massa. Aliquam imperdiet dui
                    interdum lectus efficitur rhoncus. Proin aliquam tortor sem,
                    a rhoncus justo consectetur ut. Pellentesque congue ac diam
                    vel consectetur. Suspendisse pretium ultricies metus, eget
                    convallis dui euismod ac. Donec vitae semper ex. Nam vel
                    vestibulum magna. Phasellus sed vulputate massa. Proin sit
                    amet commodo leo. Maecenas pulvinar risus eu mauris ornare
                    porttitor. Ut laoreet gravida lorem, id efficitur eros
                    pharetra quis. Donec ornare augue et ornare interdum. Sed
                    porta mollis ipsum at dictum. Vestibulum nec scelerisque
                    urna. Nunc efficitur placerat efficitur. Curabitur feugiat
                    eros viverra vehicula imperdiet. Donec condimentum ante a
                    leo ultrices, et tempus dui pharetra. Aenean hendrerit diam
                    nisl, vel auctor enim cursus eu. Nullam neque ligula,
                    viverra sed pretium at, dapibus quis dui. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Vestibulum sed scelerisque odio. Etiam eros
                    erat, suscipit at augue vitae, sollicitudin cursus turpis.
                    Morbi venenatis nunc et elit dignissim ornare. Phasellus vel
                    purus enim. Nunc convallis dignissim tortor. Quisque
                    pulvinar nec nulla vel dignissim. Morbi id laoreet metus, eu
                    auctor velit. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Aenean euismod
                    aliquet maximus. Aliquam congue facilisis leo ac mollis.
                    Mauris sit amet nisl ac ipsum efficitur varius. Fusce mollis
                    tempus ipsum, scelerisque feugiat turpis rhoncus vel. In
                    tortor tortor, convallis ut ligula ac, congue faucibus nibh.
                  </p>
                </article>
              </section>

              <section className="h-[100vh]">
                <h1 className="ml-10 font-cinzel text-[60px] text-[#ffffff]">
                  Skills
                </h1>
                <article className="py-[5%] px-[12%] w-[80vw]">
                  <p className="font-roboto text-[#fcfaf2]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean id lacus massa. Integer vulputate enim vitae leo
                    pulvinar, ut feugiat ex sodales. Sed ultricies eleifend
                    dictum. Vestibulum laoreet aliquet odio vel efficitur. Nunc
                    eget dui a risus lacinia bibendum. Donec pellentesque
                    aliquam lacus id sagittis. Vestibulum non quam eget mauris
                    hendrerit mattis id eu ante. Phasellus laoreet tincidunt
                    pellentesque. Morbi vel aliquet massa. Aliquam imperdiet dui
                    interdum lectus efficitur rhoncus. Proin aliquam tortor sem,
                    a rhoncus justo consectetur ut. Pellentesque congue ac diam
                    vel consectetur. Suspendisse pretium ultricies metus, eget
                    convallis dui euismod ac. Donec vitae semper ex. Nam vel
                    vestibulum magna. Phasellus sed vulputate massa. Proin sit
                    amet commodo leo. Maecenas pulvinar risus eu mauris ornare
                    porttitor. Ut laoreet gravida lorem, id efficitur eros
                    pharetra quis. Donec ornare augue et ornare interdum. Sed
                    porta mollis ipsum at dictum. Vestibulum nec scelerisque
                    urna. Nunc efficitur placerat efficitur. Curabitur feugiat
                    eros viverra vehicula imperdiet. Donec condimentum ante a
                    leo ultrices, et tempus dui pharetra. Aenean hendrerit diam
                    nisl, vel auctor enim cursus eu. Nullam neque ligula,
                    viverra sed pretium at, dapibus quis dui. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Vestibulum sed scelerisque odio. Etiam eros
                    erat, suscipit at augue vitae, sollicitudin cursus turpis.
                    Morbi venenatis nunc et elit dignissim ornare. Phasellus vel
                    purus enim. Nunc convallis dignissim tortor. Quisque
                    pulvinar nec nulla vel dignissim. Morbi id laoreet metus, eu
                    auctor velit. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Aenean euismod
                    aliquet maximus. Aliquam congue facilisis leo ac mollis.
                    Mauris sit amet nisl ac ipsum efficitur varius. Fusce mollis
                    tempus ipsum, scelerisque feugiat turpis rhoncus vel. In
                    tortor tortor, convallis ut ligula ac, congue faucibus nibh.
                  </p>
                </article>
              </section>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

function TestCube(props) {
  const testCube = useRef();

  const scroll = useScroll();

  useFrame((state, delta) => {
    testCube.current.rotation.y = Math.PI * 2 * scroll.offset;
  });

  return (
    <mesh {...props} ref={testCube}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}
