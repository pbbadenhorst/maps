import React from 'react';
import { NativeMethods, processColor } from 'react-native';
import { AllLayerStyleProps, Expression } from '../utils/MapboxStyles';
declare type PropsBase = {
    id: string;
    sourceID?: string;
    minZoomLevel?: number;
    maxZoomLevel?: number;
    aboveLayerID?: string;
    belowLayerID?: string;
    layerIndex?: number;
    filter?: Expression;
    style: AllLayerStyleProps;
};
declare class AbstractLayer<PropsType extends PropsBase, NativePropsType> extends React.PureComponent<PropsType> {
    get baseProps(): PropsType;
    nativeLayer: (React.Component<NativePropsType> & Readonly<NativeMethods>) | undefined;
    setNativeLayer: (instance: React.Component<NativePropsType> & Readonly<NativeMethods>) => void;
    getStyleTypeFormatter(styleType: string): typeof processColor | undefined;
    getStyle(style: AllLayerStyleProps): {
        [key: string]: import("../utils/StyleValue").StyleValue;
    } | undefined;
    setNativeProps(props: {
        [key: string]: unknown;
    }): void;
}
export default AbstractLayer;
