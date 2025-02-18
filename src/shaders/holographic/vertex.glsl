varying vec3 vLocalPosition;
varying vec3 vWorldPosition;

varying vec3 vLocalNormal;
varying vec3 vGlobalNormal;

uniform float uTime;
uniform float uGlitchScale;
uniform float uGlitchFrequency;

#include ../includes/random2D.glsl

void main() {
    // Position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // Glitch
    float glitchTime = uTime - modelPosition.y;
    float glitchStrength = sin(glitchTime) + sin(glitchTime * 3.45) + sin(glitchTime * 8.76);
    glitchStrength = smoothstep(uGlitchFrequency, 1.0, glitchStrength);
    glitchStrength *= uGlitchScale;
    modelPosition.x += (random2D(modelPosition.xz + uTime) - 0.5) * glitchStrength;
    modelPosition.z += (random2D(modelPosition.zx + uTime) - 0.5) * glitchStrength;

    // Final position
    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    // Model normal
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    // Varying
    vLocalPosition = position.xyz;
    vWorldPosition = modelPosition.xyz;

    vLocalNormal = normal;
    vGlobalNormal = modelNormal.xyz;
}