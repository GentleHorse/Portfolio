import type { Signal } from '@preact/signals-core';
import { Camera } from 'three';
import type { RootProperties } from './root.js';
export type FullscreenProperties = Omit<RootProperties, 'sizeX' | 'sizeY' | 'pixelSize' | 'anchorX' | 'anchorY'>;
export declare function updateSizeFullscreen(sizeX: Signal<number>, sizeY: Signal<number>, pixelSize: Signal<number>, distanceToCamera: number, camera: Camera, screenHeight: number): void;
