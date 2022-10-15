export const NATIVE_MODULE_NAME: "RCTMGLMapView";
export const ANDROID_TEXTURE_NATIVE_MODULE_NAME: "RCTMGLAndroidTextureMapView";
export default MapView;
declare const MapView_base: {
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
} & typeof React.Component;
/**
 * MapView backed by Mapbox Native GL
 */
declare class MapView extends MapView_base {
    static propTypes: any;
    static defaultProps: {
        localizeLabels: boolean;
        scrollEnabled: boolean;
        pitchEnabled: boolean;
        rotateEnabled: boolean;
        attributionEnabled: boolean;
        compassEnabled: boolean;
        compassFadeWhenNorth: boolean;
        logoEnabled: boolean;
        scaleBarEnabled: boolean;
        surfaceView: boolean;
        regionWillChangeDebounceTime: number;
        regionDidChangeDebounceTime: number;
    };
    constructor(props: any);
    logger: any;
    state: {
        isReady: null;
        region: null;
        width: number;
        height: number;
        isUserInteraction: boolean;
    };
    _onPress(e: any): void;
    _onLongPress(e: any): void;
    _onChange(e: any): void;
    _onLayout(e: any): void;
    _onDebouncedRegionWillChange: any;
    _onDebouncedRegionDidChange: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    _setHandledMapChangedEvents(props: any): void;
    /**
     * Converts a geographic coordinate to a point in the given view’s coordinate system.
     *
     * @example
     * const pointInView = await this._map.getPointInView([-37.817070, 144.949901]);
     *
     * @param {Array<Number>} coordinate - A point expressed in the map view's coordinate system.
     * @return {Array}
     */
    getPointInView(coordinate: Array<number>): any[];
    /**
     * Converts a point in the given view’s coordinate system to a geographic coordinate.
     *
     * @example
     * const coordinate = await this._map.getCoordinateFromView([100, 100]);
     *
     * @param {Array<Number>} point - A point expressed in the given view’s coordinate system.
     * @return {Array}
     */
    getCoordinateFromView(point: Array<number>): any[];
    /**
     * The coordinate bounds (ne, sw) visible in the user’s viewport.
     *
     * @example
     * const visibleBounds = await this._map.getVisibleBounds();
     *
     * @return {Array}
     */
    getVisibleBounds(): any[];
    /**
     * Returns an array of rendered map features that intersect with a given point.
     *
     * @example
     * this._map.queryRenderedFeaturesAtPoint([30, 40], ['==', 'type', 'Point'], ['id1', 'id2'])
     *
     * @param  {Array<Number>} coordinate - A point expressed in the map view’s coordinate system.
     * @param  {Array=} filter - A set of strings that correspond to the names of layers defined in the current style. Only the features contained in these layers are included in the returned array.
     * @param  {Array=} layerIDs - A array of layer id's to filter the features by
     * @return {FeatureCollection}
     */
    queryRenderedFeaturesAtPoint(coordinate: Array<number>, filter?: any[] | undefined, layerIDs?: any[] | undefined): FeatureCollection;
    /**
     * Returns an array of rendered map features that intersect with the given rectangle,
     * restricted to the given style layers and filtered by the given predicate.
     *
     * @example
     * this._map.queryRenderedFeaturesInRect([30, 40, 20, 10], ['==', 'type', 'Point'], ['id1', 'id2'])
     *
     * @param  {Array<Number>} bbox - A rectangle expressed in the map view’s coordinate system.
     * @param  {Array=} filter - A set of strings that correspond to the names of layers defined in the current style. Only the features contained in these layers are included in the returned array.
     * @param  {Array=} layerIDs -  A array of layer id's to filter the features by
     * @return {FeatureCollection}
     */
    queryRenderedFeaturesInRect(bbox: Array<number>, filter?: any[] | undefined, layerIDs?: any[] | undefined): FeatureCollection;
    /**
     * Map camera will perform updates based on provided config. Deprecated use Camera#setCamera.
     */
    setCamera(): void;
    /**
     * Takes snapshot of map with current tiles and returns a URI to the image
     * @param  {Boolean} writeToDisk If true will create a temp file, otherwise it is in base64
     * @return {String}
     */
    takeSnap(writeToDisk?: boolean): string;
    /**
     * Returns the current zoom of the map view.
     *
     * @example
     * const zoom = await this._map.getZoom();
     *
     * @return {Number}
     */
    getZoom(): number;
    /**
     * Returns the map's geographical centerpoint
     *
     * @example
     * const center = await this._map.getCenter();
     *
     * @return {Array<Number>} Coordinates
     */
    getCenter(): Array<number>;
    /**
     * Queries the currently loaded data for elevation at a geographical location.
     * The elevation is returned in meters relative to mean sea-level.
     * Returns null if terrain is disabled or if terrain data for the location hasn't been loaded yet.
     *
     * @param {Array<Number>} coordinate - the coordinates to query elevation at
     * @return {Number}
     */
    queryTerrainElevation(coordinate: Array<number>): number;
    /**
     * Sets the visibility of all the layers referencing the specified `sourceLayerId` and/or `sourceId`
     *
     * @example
     * await this._map.setSourceVisibility(false, 'composite', 'building')
     *
     * @param {boolean} visible - Visibility of the layers
     * @param {String} sourceId - Identifier of the target source (e.g. 'composite')
     * @param {String=} sourceLayerId - Identifier of the target source-layer (e.g. 'building')
     */
    setSourceVisibility(visible: boolean, sourceId: string, sourceLayerId?: string | undefined): void;
    /**
     * Show the attribution and telemetry action sheet.
     * If you implement a custom attribution button, you should add this action to the button.
     */
    showAttribution(): Promise<import("../utils").NativeArg>;
    _createStopConfig(config?: {}): {
        mode: any;
        pitch: any;
        heading: any;
        duration: any;
        zoom: any;
    };
    _onRegionWillChange(payload: any): void;
    _onRegionDidChange(payload: any): void;
    _handleOnChange(propName: any, payload: any): void;
    _getCenterCoordinate(): string | undefined;
    _getVisibleCoordinateBounds(): string | undefined;
    _getContentInset(): any[] | undefined;
    _setNativeRef(nativeRef: any): void;
    _nativeRef: any;
    setNativeProps(props: any): void;
    _setStyleURL(props: any): void;
    render(): JSX.Element;
}
import React from "react";
