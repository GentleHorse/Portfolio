import { Signal } from '@preact/signals-core';
import { Matrix4, Plane } from 'three';
import type { Vector2Tuple } from 'three';
import { FlexNodeState } from './flex/node.js';
import { RootContext } from './context.js';
import { Initializers } from './utils.js';
export declare class ClippingRect {
    readonly planes: Array<Plane>;
    private readonly facePlane;
    private readonly originalCenter;
    constructor(globalMatrix: Matrix4, centerX: number, centerY: number, width: number, height: number);
    min({ planes }: ClippingRect): this;
    toArray(array: ArrayLike<number>, offset: number): void;
}
export declare function computedIsClipped(parentClippingRect: Signal<ClippingRect | undefined> | undefined, globalMatrix: Signal<Matrix4 | undefined>, size: Signal<Vector2Tuple | undefined>, pixelSizeSignal: Signal<number>): Signal<boolean>;
export declare function computedClippingRect(globalMatrix: Signal<Matrix4 | undefined>, { overflow, borderInset, size }: FlexNodeState, pixelSizeSignal: Signal<number>, parentClippingRect: Signal<ClippingRect | undefined> | undefined): Signal<ClippingRect | undefined>;
export declare const NoClippingPlane: Plane;
export declare const defaultClippingData: Float32Array;
export declare function createClippingPlanes(): void;
export declare function createGlobalClippingPlanes(root: RootContext, clippingRect: Signal<ClippingRect | undefined>, initializers: Initializers): Plane[];
