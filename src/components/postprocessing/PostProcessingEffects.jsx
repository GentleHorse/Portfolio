import { useRef, useState } from "react";
import {
  DepthOfField,
  Bloom,
  Noise,
  Glitch,
  ToneMapping,
  Vignette,
  EffectComposer,
} from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from "postprocessing";
import { button, useControls } from "leva";

const PostProcessingEffects = () => {
  const [isNoiseEffectActive, setIsNoiseEffectActive] = useState(false);

  const vignetteUI = useControls("vignette", {
    eskil: { value: true },
    offset: { value: 0.3, min: 0, max: 1, step: 0.01 },
    darkness: { value: 0.9, min: 0, max: 1, step: 0.01 },
    blendFunction: {
      options: {
        NORMAL: BlendFunction.NORMAL,
        COLOR_BURN: BlendFunction.COLOR_BURN,
        COLOR_DODGE: BlendFunction.COLOR_DODGE,
      },
    },
  });

  const noiseUI = useControls("noise", {
    ON: button(() => setIsNoiseEffectActive(true)),
    OFF: button(() => setIsNoiseEffectActive(false)),
    blendMode: {
      options: {
        SOFT_LIGHT: BlendFunction.SOFT_LIGHT,
        OVERLAY: BlendFunction.OVERLAY,
        SCREEN: BlendFunction.SCREEN,
        AVERAGE: BlendFunction.AVERAGE,
      },
    },
  });

  return (
    <EffectComposer disableNormalPass>
      <Vignette
        eskil={vignetteUI.eskil}
        offset={vignetteUI.offset}
        darkness={vignetteUI.darkness}
        blendFunction={vignetteUI.blendFunction}
      />

      {/* <Glitch
          delay={[0.5, 1]}
          duration={[0.1, 0.3]}
          strength={[0.2, 0.4]}
          mode={GlitchMode.CONSTANT_WILD}
        /> */}

      {isNoiseEffectActive && (
        <Noise premultiply blendFunction={noiseUI.blendMode} />
      )}

      <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0} />

      <ToneMapping />
    </EffectComposer>
  );
};

export default PostProcessingEffects;
