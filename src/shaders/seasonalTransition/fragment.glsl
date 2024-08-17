uniform float uTime;

void main() {
    float pctNormal = abs(sin(uTime * 0.1));
    float pctFast = abs(sin(uTime * 0.2));
    vec3 color = vec3(0.0);

    vec3 red = vec3(1.0, 0.0, 0.0);
    vec3 green = vec3(0.0, 1.0, 0.0);
    vec3 blue = vec3(0.0, 0.0, 1.0);
    vec3 yellow = vec3(1.0, 1.0, 0.0);

    vec3 springPink = vec3(248.0/255.0, 195.0/255.0, 205.0/255.0);
    vec3 summerGreen = vec3(0.0/255.0, 255.0/255.0, 0.0/255.0);
    vec3 autumnRed = vec3(203.0/255.0, 27.0/255.0, 69.0/255.0);

    vec3 color01 = mix(springPink, summerGreen, pctFast);
    vec3 color02 = mix(autumnRed, springPink, pctFast);

    color = mix(color01, color02, pctNormal);

    gl_FragColor = vec4(color, 1.0);
}