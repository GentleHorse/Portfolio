uniform float uTime;
uniform sampler2D uPerlinTexture;
uniform float uWindSpeed;
uniform float uSmokeCurveStrength;

varying vec2 vUv;

#include ../includes/rotate2D.glsl

void main(){
    vec3 newPosition = position;

    newPosition.z += sin(newPosition.y * uTime * 2.5) * 0.25;

    // // Twist
    // float twistPerlin = texture(
    //     uPerlinTexture, 
    //     vec2(0.5, uv.x * 0.2 - uTime * 0.005)
    // ).r;

    // float angle = twistPerlin * 10.0;
    // newPosition.yz = rotate2D(newPosition.xz, angle);

    // // Wind
    // vec2 windOffset = vec2(
    //     texture(uPerlinTexture, vec2(0.25, uTime * uWindSpeed)).r - 0.5, 
    //     texture(uPerlinTexture, vec2(0.75, uTime * uWindSpeed)).r - 0.5
    // );
    // windOffset *= pow(uv.x, uSmokeCurveStrength) * 10.0;
    // newPosition.z += windOffset; 

    // Order matters!
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    vUv = uv;
}