import { TextureLoader } from 'three';
import { Font } from './font.js';
const fontCache = new Map();
const textureLoader = new TextureLoader();
export function loadCachedFont(url, renderer, onLoad) {
    let entry = fontCache.get(url);
    if (entry instanceof Set) {
        entry.add(onLoad);
        return;
    }
    if (entry != null) {
        onLoad(entry);
        return;
    }
    const set = new Set();
    set.add(onLoad);
    fontCache.set(url, set);
    loadFont(url, renderer)
        .then((font) => {
        for (const fn of set) {
            fn(font);
        }
        fontCache.set(url, font);
    })
        .catch(console.error);
}
async function loadFont(url, renderer) {
    const info = await (await fetch(url)).json();
    if (info.pages.length !== 1) {
        throw new Error('only supporting exactly 1 page');
    }
    const page = await textureLoader.loadAsync(new URL(info.pages[0], new URL(url, window.location.href)).href);
    page.anisotropy = renderer.capabilities.getMaxAnisotropy();
    page.flipY = false;
    return new Font(info, page);
}
