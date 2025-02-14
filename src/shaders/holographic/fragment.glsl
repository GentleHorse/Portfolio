varying vec3 vLocalPosition;
varying vec3 vWorldPosition;

varying vec3 vLocalNormal;
varying vec3 vGlobalNormal;

uniform float uTime;
uniform float uStripesFrequency;
uniform float uStripesSpeed;
uniform float uStripesStrength;
uniform float uFresnelStrength;
uniform float uFalloffStrength;
uniform vec3 uColor;

void main() {
    // Normal
    vec3 normal = normalize(vGlobalNormal);
    if (!gl_FrontFacing){
        normal *= -1.0;
    }

    // Stripes
    float stripes = mod((vWorldPosition.y - uTime * uStripesSpeed) * uStripesFrequency, 1.0);
    stripes = pow(stripes, uStripesStrength);

    // Fresnel
    vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
    float fresnel = dot(viewDirection, normal) + 1.0;
    fresnel = pow(fresnel, uFresnelStrength);

    // Falloff
    float falloff = smoothstep(uFalloffStrength, 0.0, fresnel);

    // Holographic
    float holographic = stripes * fresnel;
    holographic += fresnel * 1.25;  // apply another frensel to strengthen its effect
    holographic *= falloff; // blur the edges

    // Final color
    gl_FragColor = vec4(uColor, holographic);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}

