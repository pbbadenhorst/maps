/// <reference types="react" />
import { Expression, type SymbolLayerStyleProps } from '../utils/MapboxStyles';
import { type StyleValue } from '../utils/StyleValue';
import AbstractLayer from './AbstractLayer';
export declare const NATIVE_MODULE_NAME = "RCTMGLSymbolLayer";
export declare type Props = {
    /**
     * A string that uniquely identifies the source in the style to which it is added.
     */
    id: string;
    /**
     * The source from which to obtain the data to style.
     * If the source has not yet been added to the current style, the behavior is undefined.
     * Inferred from parent source only if the layer is a direct child to it.
     */
    sourceID?: string;
    /**
     * Identifier of the layer within the source identified by the sourceID property from which the receiver obtains the data to style.
     */
    sourceLayerID?: string;
    /**
     * Inserts a layer above aboveLayerID.
     */
    aboveLayerID?: string;
    /**
     * Inserts a layer below belowLayerID
     */
    belowLayerID?: string;
    /**
     * Inserts a layer at a specified index
     */
    layerIndex?: number;
    /**
     *  Filter only the features in the source layer that satisfy a condition that you define
     */
    filter?: Expression;
    /**
     * The minimum zoom level at which the layer gets parsed and appears.
     */
    minZoomLevel?: number;
    /**
     * The maximum zoom level at which the layer gets parsed and appears.
     */
    maxZoomLevel?: number;
    style: SymbolLayerStyleProps;
    children?: JSX.Element | JSX.Element[];
};
declare type NativeTypeProps = Omit<Props, 'style'> & {
    snapshot: boolean;
    reactStyle?: {
        [key: string]: StyleValue;
    };
};
/**
 * SymbolLayer is a style layer that renders icon and text labels at points or along lines on the map.
 */
export declare class SymbolLayer extends AbstractLayer<Props, NativeTypeProps> {
    static defaultProps: {
        sourceID: any;
    };
    _shouldSnapshot(): boolean;
    render(): JSX.Element;
}
export {};
