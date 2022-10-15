import React, { SyntheticEvent, type Component } from 'react';
import { type ViewProps } from 'react-native';
import { type Feature } from 'geojson';
import { type RNMBEvent } from './NativeBridgeComponent';
export declare const NATIVE_MODULE_NAME = "RCTMGLPointAnnotation";
declare type FeaturePayload = {
    feature: Feature;
};
declare type PointAnnotationProps = {
    /**
     * A string that uniquely identifies the annotation
     */
    id: string;
    /**
     * The string containing the annotation’s title. Note this is required to be set if you want to see a callout appear on iOS.
     */
    title?: string;
    /**
     * The string containing the annotation’s snippet(subtitle). Not displayed in the default callout.
     */
    snippet?: string;
    /**
     * Manually selects/deselects annotation
     */
    selected?: boolean;
    /**
     * Enable or disable dragging. Defaults to false.
     */
    draggable?: boolean;
    /**
     * The center point (specified as a map coordinate) of the annotation.
     */
    coordinate: [number, number];
    /**
     * Specifies the anchor being set on a particular point of the annotation.
     * The anchor point is specified in the continuous space [0.0, 1.0] x [0.0, 1.0],
     * where (0, 0) is the top-left corner of the image, and (1, 1) is the bottom-right corner.
     * Note this is only for custom annotations not the default pin view.
     * Defaults to the center of the view.
     */
    anchor?: {
        /**
         * See anchor
         */
        x: number;
        /**
         * See anchor
         */
        y: number;
    };
    /**
     * This callback is fired once this annotation is selected. Returns a Feature as the first param.
     */
    onSelected?: (payload: FeaturePayload) => void;
    /**
     * This callback is fired once this annotation is deselected.
     */
    onDeselected?: (payload: FeaturePayload) => void;
    /**
     * This callback is fired once this annotation has started being dragged.
     */
    onDragStart?: (payload: FeaturePayload) => void;
    /**
     * This callback is fired once this annotation has stopped being dragged.
     */
    onDragEnd?: (payload: FeaturePayload) => void;
    /**
     * This callback is fired while this annotation is being dragged.
     */
    onDrag?: (payload: FeaturePayload) => void;
    /**
     * Expects one child, and an optional callout can be added as well
     */
    children: React.ReactElement;
    style?: ViewProps['style'];
};
declare const PointAnnotation_base: {
    new (...args: any[]): {
        _nativeModuleName: string;
        _onAndroidCallback: (e: any) => void;
        _callbackMap: Map<string, any>;
        _preRefMapMethodQueue: {
            method: {
                name: string;
                args: import("../utils").NativeArg[];
            };
            resolver: (value: import("../utils").NativeArg) => void;
        }[];
        _addAddAndroidCallback<ReturnType_1>(id: string, resolve: (value: ReturnType_1) => void, reject: (error: Error) => void): void;
        _removeAndroidCallback(id: string): void;
        _onAndroidCallbackO(e: React.SyntheticEvent<Element, RNMBEvent<{
            [key: string]: string;
        }>>): void;
        _runPendingNativeCommands<RefType>(nativeRef: RefType): Promise<void>;
        _runNativeCommand<RefType_1, ReturnType_2 = import("../utils").NativeArg>(methodName: string, nativeRef: RefType_1, args?: import("../utils").NativeArg[]): Promise<ReturnType_2>;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: object) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        render(): React.ReactNode;
        readonly props: object;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: object, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: object, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: object, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: object, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: object, nextContext: any): void;
        componentWillUpdate?(nextProps: object, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: object, nextState: Readonly<{}>, nextContext: any): void;
    };
} & {
    new (props: PointAnnotationProps | Readonly<PointAnnotationProps>): React.PureComponent<PointAnnotationProps, {}, any>;
    new (props: PointAnnotationProps, context: any): React.PureComponent<PointAnnotationProps, {}, any>;
    contextType?: React.Context<any> | undefined;
};
/**
 * PointAnnotation represents a one-dimensional shape located at a single geographical coordinate.
 *
 * Consider using ShapeSource and SymbolLayer instead, if you have many points and you have static images,
 * they'll offer much better performance.
 *
 * If you need interactive views please use MarkerView,
 * as with PointAnnotation child views are rendered onto a bitmap
 */
declare class PointAnnotation extends PointAnnotation_base {
    static defaultProps: {
        anchor: {
            x: number;
            y: number;
        };
        draggable: boolean;
    };
    _nativeRef: NativePointAnnotationRef | null;
    constructor(props: PointAnnotationProps);
    _onSelected(e: SyntheticEvent<Element, RNMBEvent<FeaturePayload>>): void;
    _onDeselected(e: SyntheticEvent<Element, RNMBEvent<FeaturePayload>>): void;
    _onDragStart(e: SyntheticEvent<Element, RNMBEvent<FeaturePayload>>): void;
    _onDrag(e: SyntheticEvent<Element, RNMBEvent<FeaturePayload>>): void;
    _onDragEnd(e: SyntheticEvent<Element, RNMBEvent<FeaturePayload>>): void;
    _getCoordinate(): string | undefined;
    /**
     * On v10 and pre v10 android point annotation is rendered offscreen with a canvas into an image.
     * To rerender the image from the current state of the view call refresh.
     * Call this for example from Image#onLoad.
     */
    refresh(): void;
    _setNativeRef(nativeRef: NativePointAnnotationRef | null): void;
    render(): JSX.Element;
}
declare type NativePointAnnotationProps = Omit<PointAnnotationProps, 'coordinate'> & {
    coordinate: string | undefined;
};
declare type NativePointAnnotationRef = Component<NativePointAnnotationProps>;
export default PointAnnotation;
