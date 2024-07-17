import { WebGLRenderer } from 'three';
import { Font } from './font.js';
export declare function loadCachedFont(url: string, renderer: WebGLRenderer, onLoad: (font: Font) => void): void;
