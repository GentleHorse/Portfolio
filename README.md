# Toshihito Endo's Portfolio

## Local server

```
npm run dev
```

## Dev Memo 01 - UV of TV screens inside glb (gltf) models  

In order to play videos inside screen inside glb models, UV should be properly unwrapped, otherwise it cannot play the video in the way you want.

![tv screen UV unwrapp](./public/images/screenshots/tv-screen-uv-unwrap.png)

```
import { useVideoTexture } from "@react-three/drei";

....


  const silkySphereVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Silkey_Sphere.mp4"
  );

  silkySphereVideoTexture.wrapS = THREE.RepeatWrapping;
  silkySphereVideoTexture.wrapT = THREE.RepeatWrapping;
  silkySphereVideoTexture.flipY = false;

....

    <mesh geometry={nodes["analog-tv-01-modified-square-screen"].geometry}>
        <meshBasicMaterial map={silkySphereVideoTexture} toneMapped={false} />
    </mesh>

    ....

```

## Dev Memo 02 - Upload the rigged animated character

An astronout model is animated using [mixamo](https://www.mixamo.com/#/) and exported as **fbx**. Then it's imported in Blender and exported as **gltf**. To generating the `jsx` code, [online gltf converter](https://gltf.pmnd.rs/) was used.

#### Play an animation
```
....

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Flying"].play();
  }, []);

....

```