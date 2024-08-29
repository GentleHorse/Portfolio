uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vElevation;

void main(){
    /*
     * MIX SURFACE & DEPTH COLORS
     */
     float mix_Strength = (vElevation + uColorOffset) * uColorMultiplier;
     vec3 color = mix(uDepthColor, uSurfaceColor, mix_Strength);

    /*
     * GL COLOR OUT
     */
    gl_FragColor = vec4(color, 0.5);

    #include <colorspace_fragment>
}