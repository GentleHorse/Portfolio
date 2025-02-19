uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uTipThreshold;

varying float vWobble;

void main() {
    float colorMix = smoothstep(-1.0, 1.0, vWobble);
    csm_DiffuseColor.rgb = mix(uColorA, uColorB, colorMix);

    // Mirror step (sharp transition)
    // csm_Metalness = step(0.25, vWobble);
    // csm_Roughness = 1.0 - csm_Metalness;

    // Mirror step (smooth transition)
    // csm_Metalness = smoothstep(-1.0, uTipThreshold, vWobble);
    // csm_Roughness = 1.0 - csm_Metalness;

    // Shinny tip
    csm_Roughness = 1.0 - colorMix;    
}