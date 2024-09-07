varying vec2 vUv;

void main() {

    gl_FragColor = vec4(vec3(1.0), pow(1.0 - vUv.y, 4.5));
}