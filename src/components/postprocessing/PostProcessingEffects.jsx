import {
  Bloom,
  ToneMapping,
  EffectComposer,
} from "@react-three/postprocessing";
import { Suspense } from "react";

const PostProcessingEffects = () => {
  return (
    <EffectComposer disableNormalPass>
      <Suspense>
        <Bloom mipmapBlur intensity={0.05} luminanceThreshold={0} />
      </Suspense>

      {/* <ToneMapping /> */}
    </EffectComposer>
  );
};

export default PostProcessingEffects;
