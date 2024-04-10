import {
  Bloom,
  ToneMapping,
  EffectComposer,
} from "@react-three/postprocessing";
import { Suspense } from "react";

const PostProcessingEffects = () => {
  return (
    <EffectComposer disableNormalPass>
        <Bloom
          mipmapBlur={true}
          intensity={0.05}
          kernelSize={0.1}
          levels={9} 
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
          resolutionX={128}
          resolutionY={128}
        />

      {/* <ToneMapping /> */}
    </EffectComposer>
  );
};

export default PostProcessingEffects;
