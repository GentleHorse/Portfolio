import { Signal } from '@preact/signals-core';
import { Texture, TypedArray, WebGLRenderer } from 'three';
import { MergedProperties } from '../properties/merged.js';
import { Initializers } from '../utils.js';
export type FontFamilyUrls = Partial<Record<FontWeight, string>>;
export type FontFamilies = Record<string, FontFamilyUrls>;
declare const fontWeightNames: {
    thin: number;
    'extra-light': number;
    light: number;
    normal: number;
    medium: number;
    'semi-bold': number;
    bold: number;
    'extra-bold': number;
    black: number;
    'extra-black': number;
};
export type FontWeight = keyof typeof fontWeightNames | number;
export type FontFamilyProperties = {
    fontFamily?: string;
    fontWeight?: FontWeight;
};
export declare function computedFont(properties: Signal<MergedProperties>, fontFamiliesSignal: Signal<FontFamilies | undefined> | undefined, renderer: WebGLRenderer, initializers: Initializers): Signal<Font | undefined>;
export type FontInfo = {
    pages: Array<string>;
    chars: Array<GlyphInfo>;
    info: {
        face: string;
        size: number;
        bold: number;
        italic: number;
        charset: Array<string>;
        unicode: number;
        stretchH: number;
        smooth: number;
        aa: number;
        padding: [number, number, number, number];
        spacing: [number, number, number, number];
        outline: number;
    };
    common: {
        lineHeight: number;
        base: number;
        scaleW: number;
        scaleH: number;
        pages: number;
        packed: number;
        alphaChnl: number;
        redChnl: number;
        greenChnl: number;
        blueChnl: number;
    };
    distanceField: {
        fieldType: string;
        distanceRange: number;
    };
    kernings: Array<{
        first: number;
        second: number;
        amount: number;
    }>;
};
export type GlyphInfo = {
    id: number;
    index: number;
    char: string;
    width: number;
    height: number;
    x: number;
    y: number;
    uvWidth: number;
    uvHeight: number;
    xoffset: number;
    yoffset: number;
    xadvance: number;
    chnl: number;
    uvX: number;
    uvY: number;
    page: number;
};
export declare class Font {
    page: Texture;
    private glyphInfoMap;
    private kerningMap;
    private questionmarkGlyphInfo;
    readonly pageWidth: number;
    readonly pageHeight: number;
    readonly distanceRange: number;
    constructor(info: FontInfo, page: Texture);
    getGlyphInfo(char: string): GlyphInfo;
    getKerning(firstId: number, secondId: number): number;
}
export declare function glyphIntoToUV(info: GlyphInfo, target: TypedArray, offset: number): void;
export {};
