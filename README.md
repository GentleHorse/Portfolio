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

### 1-0. Download a rigged character
You can directly download rigged characters from below sites. <br><br>

- [pmndrs market](https://market.pmnd.rs/)
- [Mixamo](https://www.mixamo.com/)
- [TURBOSQUID](https://www.turbosquid.com/)
- [Free3D](https://free3d.com/)
- [BLEND SWAP](https://www.blendswap.com/)

### 1-1. Auto rigging via Mixamo

### cf. Manually rig a custom character (in Blender)

#### cf-0. Activate the "rigify" addon
![blender rigify addon](/public/images/screenshots/blender-rigify-addon.png)<br>

#### cf-1. Add the "Armature - Basic - Basic Human" to the scene
Once you add the armature to the scene, scale it up to roughly fit the character. <br>

![blender armature basic human](/public/images/screenshots/blender-add-armature-human.png)<br>
![blender scale up armature](/public/images/screenshots/blender-scale-up-armature.png)<br>

#### cf-2. Check "In Front" of viewport display
Go to **"metarig > metarig > Viewport Display > Show"** and check **"In Front"**, then the rig is always visible and not get hidden inside the character mesh. <br>

![blender armature in front](/public/images/screenshots/blender-armature-viewport-infront.png)<br>

#### cf-3. Adjust metarig
Select the rig, go to **"Edit"** mode and adjust bones to roughly fit inside the character mesh. <br>

![blender adjust metarig](/public/images/screenshots/blender-adjust-metarig.png)<br>

#### cf-4. Apply "all transform" of the rig
Select the rig and apply "all transform". <br>

![blender armature apply all transform 01](/public/images/screenshots/blender-armature-apply-all-transform-01.png)<br>
![blender armature apply all transform 02](/public/images/screenshots/blender-armature-apply-all-transform-02.png)<br>

#### cf-5. Generate the rig
Go to **"metarig > metarig > Rigify"** and press **"Generate Rig"** button. <br>

![blender armature generate rig 01](/public/images/screenshots/blender-armature-generate-rig-01.png)<br>
![blender armature generate rig 02](/public/images/screenshots/blender-armature-generate-rig-02.png)<br>

#### cf-6. Link the rig to the character mesh
1. Select a character mesh & the auto generated rig
2. Press **Ctr + p** to select **"Set Parent To > Armature Deform > With Automatic Weights"** 
3. Wait a bit
4. The rig and the mesh are connected <br>

![blender armature link to mesh 01](/public/images/screenshots/blender-armature-link-to-mesh-01.png)<br>
![blender armature link to mesh 02](/public/images/screenshots/blender-armature-link-to-mesh-02.png)<br>

#### cf-7. Check if the rig is correctly connected
Go to **"Pose Mode"** and check whether the rig is properly functioned. <br>

![blender armature pose mode 01](/public/images/screenshots/blender-armature-pose-mode-01.png)<br>
![blender armature pose mode 02](/public/images/screenshots/blender-armature-pose-mode-02.png)<br>


## 2. Add animations to the rigged character

## 3. Character control with ecctrl

### 3-0. Documentation
- [pmndrs/ecctrl Git Repo](https://github.com/pmndrs/ecctrl?tab=readme-ov-file)

### 3-1. Install
```
npm install ecctrl
```



