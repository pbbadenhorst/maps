import React from 'react';
import type { TerrainLayerStyleProps, Value } from '../utils/MapboxStyles';
export declare const NATIVE_MODULE_NAME = "RCTMGLTerrain";
declare type Props = {
    /**
     * Name of a source of raster_dem type to be used for terrain elevation.
     */
    sourceID: string;
    /**
     * Deprecated, use exaggeration in style instead
     */
    exaggeration?: Value<number, ['zoom']>;
    /**
     * Customizable style attributes
     */
    style: TerrainLayerStyleProps;
};
export declare const Terrain: React.MemoExoticComponent<(props: Props) => JSX.Element>;
export {};
