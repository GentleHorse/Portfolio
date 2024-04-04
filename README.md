# Toshihito Endo's Portfolio 

## 0. Physics test environment
![test environment](/public/images/screenshots/test-environment.png)<br>

### 0-0. Geometries
- Test cube
- Test icosahedron
- Test floor

### 0-1. Settings 
- **Restitution:** 0.5
- **Friction:** 0.2

### 0-2. Test items
- **Keyboard input:** `WASD`, `Arrow`, `Space` and `Shift` keys
- **Force applied to objects:** `applyImpulse`, `applyTorqueImpulse`
- **Keybord input based control:** move (normal speed, fast speed), jump 

## 1. Prepare a rigged character

### 1-a. Download a rigged character
You can directly download rigged characters from below sites. <br><br>

- [pmndrs market](https://market.pmnd.rs/)
- [Mixamo](https://www.mixamo.com/)
- [TURBOSQUID](https://www.turbosquid.com/)
- [Free3D](https://free3d.com/)
- [BLEND SWAP](https://www.blendswap.com/)

### 1-b. Upload the model and auto rigging via Mixamo
You can upload the model as the format of **fbx** to Mixamo for auto rigging. <br><br>
![mixamo auto rigging 01](/public/images/screenshots/mixamo-auto-rigging-01.png)<br>
![mixamo auto rigging 02](/public/images/screenshots/mixamo-auto-rigging-02.png)<br>

## 2. Add animations to the rigged character

### 2-0. Steps
- Prepare the model as the format of **"fbx"**
- Upload to [Mixamo](https://www.mixamo.com/#/)
- Find an animation and download it
- Attach the imported animation to the model in blender
- Export as **"gltf"** file

### 2-1. Import the gltf model into blender and exported as the fbx file
![import to blender](/public/images/screenshots/import-gltf-model-to-blender.png)<br>
![export as fbx](/public/images/screenshots/export-gltf-as-fbx.png)<br>

### 2-2. Upload the fbx model to mixamo
![upload fbx to mixamo 01](/public/images/screenshots/upload-fbx-to-mixamo-01.png)<br>
![upload fbx to mixamo 02](/public/images/screenshots/upload-fbx-to-mixamo-02.png)<br>
![upload fbx to mixamo 03](/public/images/screenshots/upload-fbx-to-mixamo-03.png)<br>

### 2-3. Select an animation and download it
![upload fbx to mixamo 04](/public/images/screenshots/upload-fbx-to-mixamo-04.png)<br>
![upload fbx to mixamo 05](/public/images/screenshots/upload-fbx-to-mixamo-05.png)<br><br>

Don't forget to check **"In Place"**.

### 2-4. Import the animation (fbx) to blender
![import fbx animation](/public/images/screenshots/import-fbx-animation-to-blender.png)<br>

### 2-5. Change "Editor Type" to "Dope Sheet", open "Action Editor" and rename the animation
![dope sheet action editor](/public/images/screenshots/blender-dope-sheet-action-editor.png)<br>

### 2-6. Rename the original model, pose mode, open animation in action editor, hit "Push Down" 
![rename the original model](/public/images/screenshots/blender-rename-original-character.png)<br>
![open pose mode](/public/images/screenshots/blender-open-pose-mode.png)<br>
![action editor select animation](/public/images/screenshots/blender-action-editor-select-run.png)<br>
![action editor hit push down](/public/images/screenshots/blender-action-editor-hit-push-down.png)<br>

### 2-7. Change "Editor Type" to "Nonlinear Animation", rename, delete the animation model from Mixamo
![nonlinear animation](/public/images/screenshots/blender-nonlinear-animation.png)<br>
![rename nla track 1](/public/images/screenshots/blender-rename-nla-track-1.png)<br>
![rename nla track 2](/public/images/screenshots/blender-rename-nla-track-2.png)<br>
![delete imported animation model](/public/images/screenshots/blender-delete-imported-fbx-animation-model.png)<br>

### 2-8. Export the model as the format of gltf
![export animated gltf character](/public/images/screenshots/blender-export-animated-character.png)<br>

### 2-9. Switch the model with animated one
Run gltfjsx again to generate the code, and switch the model with the animation one. <br>

```
npx gltfjsx public/models/female-cyborg/model.gltf
```

## 3. Character control with ecctrl

### 3-0. Documentation
- [pmndrs/ecctrl Git Repo](https://github.com/pmndrs/ecctrl?tab=readme-ov-file)

### 3-1. Install
```
npm install ecctrl
```

### 3-2. Set up `KeyboardControls` from drei
In order to use ecctrl, you need to set up [KeyboardControls](https://github.com/pmndrs/drei?tab=readme-ov-file#keyboardcontrols) from drei. In the below code, `KeyboardControls` is set up outside `<Canvas>` in case for implementing an user interface, but it can be inside `<Canvas>`.<br>

```
const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },

    // Optional animation key map
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];

export default function App() {
  return (
    <>
      <Header />

      <KeyboardControls map={keyboardMap}>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [1, 5, 6],
          }}
        >
          <Experience />
        </Canvas>
      </KeyboardControls>
    </>
  );
}
```

### 3-3. Set up `Ecctrl` & `EcctrlAnimation` for animated character control
In below code, `Ecctrl` & `EcctrlAnimation` are set up inside the `Experience` component inside `<Canvas>`. <br>

```
....

import Ecctrl, { EcctrlAnimation } from "ecctrl";

....

export default function Experience() {
  const characterURL =
    "./models/fourth-dimensional-being/fourth-dimensional-being.gltf";

  const animationSet = {
    idle: "Idle",
    walk: "Walk",
    run: "Run",
    jump: "Jump_Start",
    jumpIdle: "Jump_Idle",
    jumpLand: "Jump_Land",
    fall: "Climbing", // This is for falling from high sky

    // Currently support four additional animations
    action1: "Wave",
    action2: "Dance",
    action3: "Cheer",
    action4: "Attack(1h)", // This is special action which can be trigger while walking or running
  };

  return (
    <>

      ....

      <Physics debug={Physics} timeStep="vary">
        
        ....

        <Ecctrl
          position={[0, 0, 0]}
          animated
        >
          <EcctrlAnimation
            characterURL={characterURL} // Must have property
            animationSet={animationSet} // Must have property
          >
            <FourthDimensionalBeing />  // The character component 
          </EcctrlAnimation>
        </Ecctrl>

      </Physics>
      
    </>
  );
}
```

## 4. Character control with sounds

### 4-0. Free sounds resources
- [freesound.org](https://freesound.org/)

### 4-1. Install useSound
```
npm install use-sound
```

