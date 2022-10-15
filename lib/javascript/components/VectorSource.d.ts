export const NATIVE_MODULE_NAME: "RCTMGLVectorSource";
export default VectorSource;
declare const VectorSource_base: {
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
        _removeAndroidCallback(id: string): void; /**
         * An array of tile URL templates. If multiple endpoints are specified, clients may use any combination of endpoints.
         * Example: https://example.com/vector-tiles/{z}/{x}/{y}.pbf
         */
        _onAndroidCallbackO(e: React.SyntheticEvent<Element, import("./NativeBridgeComponent").RNMBEvent<{
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
} & typeof AbstractSource;
/**
 * VectorSource is a map content source that supplies tiled vector data in Mapbox Vector Tile format to be shown on the map.
 * The location of and metadata about the tiles are defined either by an option dictionary or by an external file that conforms to the TileJSON specification.
 */
declare class VectorSource extends VectorSource_base {
    static propTypes: any;
    static defaultProps: {
        id: any;
    };
    constructor(props: any);
    _setNativeRef(nativeRef: any): void;
    _nativeRef: (React.Component<any, {}, any> & Readonly<import("react-native").NativeMethods>) | undefined;
    /**
     * Returns all features that match the query parameters regardless of whether or not the feature is
     * currently rendered on the map. The domain of the query includes all currently-loaded vector tiles
     * and GeoJSON source tiles. This function does not check tiles outside of the visible viewport.
     *
     * @example
     * vectorSource.features(['id1', 'id2'])
     *
     * @param  {Array=} layerIDs - A set of strings that correspond to the names of layers defined in the current style. Only the features contained in these layers are included in the returned array.
     * @param  {Array=} filter - an optional filter statement to filter the returned Features.
     * @return {FeatureCollection}
     */
    features(layerIDs?: any[] | undefined, filter?: any[] | undefined): FeatureCollection;
    onPress(event: any): void;
    render(): JSX.Element;
}
import React from "react";
import AbstractSource from "./AbstractSource";
