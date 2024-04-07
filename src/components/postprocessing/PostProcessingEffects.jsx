import {
  Bloom,
  ToneMapping,
  EffectComposer,
} from "@react-three/postprocessing";

const PostProcessingEffects = () => {
  return (
    <EffectComposer disableNormalPass>
      <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0} />
      <ToneMapping />
    </EffectComposer>
  );
};

export default PostProcessingEffects;
