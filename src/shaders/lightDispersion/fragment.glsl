uniform sampler2D uPerlinTexture;
uniform float uTime;
uniform float uSmokeColorRed;
uniform float uSmokeColorGreen;
uniform float uSmokeColorBlue;

varying vec2 vUv;

void main(){
    // Scale
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.15;
    smokeUv.y *= 0.7;

    // Animate
    smokeUv.x += uTime * 0.03;
 
    // Smoke
    float smoke = texture2D(uPerlinTexture, smokeUv).r;

    // Remap (value range: 0.0 - 1.0)
    smoke = smoothstep(0.4, 1.0, smoke);

    // Edges 
    smoke *= smoothstep(0.0, 0.5, vUv.x);  // left
    smoke *= smoothstep(1.0, 0.95, vUv.x);  // right
    smoke *= smoothstep(0.0, 0.5, vUv.y);  // bottom
    smoke *= smoothstep(1.0, 0.4, vUv.y);  // top


    // Final color
    gl_FragColor = vec4(uSmokeColorRed, uSmokeColorGreen, uSmokeColorBlue, smoke);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}