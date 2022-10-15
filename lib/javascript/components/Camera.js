import React, { forwardRef, memo, useCallback, useImperativeHandle, useMemo, useRef, } from 'react';
import { NativeModules, requireNativeComponent } from 'react-native';
import { makeLatLngBounds, makePoint } from '../utils/geoUtils';
const NativeModule = NativeModules.MGLModule;
/**
 * Converts the provided React Native animation mode into the corresponding native enum value.
 */
const nativeAnimationMode = (mode) => {
    const NativeCameraModes = NativeModule.CameraModes;
    switch (mode) {
        case 'flyTo':
            return NativeCameraModes.Flight;
        case 'easeTo':
            return NativeCameraModes.Ease;
        case 'linearTo':
            return NativeCameraModes.Linear;
        case 'moveTo':
            return NativeCameraModes.Move;
        case 'none':
            return NativeCameraModes.None;
        default:
            return NativeCameraModes.Ease;
    }
};
export const NATIVE_MODULE_NAME = 'RCTMGLCamera';
/**
 * Controls the perspective from which the user sees the map.
 *
 * To use imperative methods, pass in a ref object:
 *
 * ```tsx
 * const camera = useRef<Camera>(null);
 *
 * useEffect(() => {
 *   camera.current?.setCamera({
 *     centerCoordinate: [lon, lat],
 *   });
 * }, []);
 *
 * return (
 *   <Camera ref={camera} />
 * );
 * ```
 */
export const Camera = memo(forwardRef((props, ref) => {
    const { centerCoordinate, bounds, heading, pitch, zoomLevel, padding, animationDuration, animationMode, minZoomLevel, maxZoomLevel, maxBounds, followUserLocation, followUserMode, followZoomLevel, followPitch, followHeading, defaultSettings, allowUpdates = true, triggerKey, onUserTrackingModeChange, } = props;
    // @ts-expect-error This avoids a type/value mismatch.
    const nativeCamera = useRef(null);
    const buildNativeStop = useCallback((stop, ignoreFollowUserLocation = false) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        stop = Object.assign(Object.assign({}, stop), { type: 'CameraStop' });
        if (props.followUserLocation && !ignoreFollowUserLocation) {
            return null;
        }
        const _nativeStop = {};
        if (stop.pitch !== undefined)
            _nativeStop.pitch = stop.pitch;
        if (stop.heading !== undefined)
            _nativeStop.heading = stop.heading;
        if (stop.zoomLevel !== undefined)
            _nativeStop.zoom = stop.zoomLevel;
        if (stop.animationMode !== undefined)
            _nativeStop.mode = nativeAnimationMode(stop.animationMode);
        if (stop.animationDuration !== undefined)
            _nativeStop.duration = stop.animationDuration;
        if (stop.centerCoordinate) {
            _nativeStop.centerCoordinate = JSON.stringify(makePoint(stop.centerCoordinate));
        }
        if (stop.bounds && stop.bounds.ne && stop.bounds.sw) {
            const { ne, sw } = stop.bounds;
            _nativeStop.bounds = JSON.stringify(makeLatLngBounds(ne, sw));
        }
        _nativeStop.paddingTop =
            (_d = (_b = (_a = stop.padding) === null || _a === void 0 ? void 0 : _a.paddingTop) !== null && _b !== void 0 ? _b : (_c = stop.bounds) === null || _c === void 0 ? void 0 : _c.paddingTop) !== null && _d !== void 0 ? _d : 0;
        _nativeStop.paddingRight =
            (_h = (_f = (_e = stop.padding) === null || _e === void 0 ? void 0 : _e.paddingRight) !== null && _f !== void 0 ? _f : (_g = stop.bounds) === null || _g === void 0 ? void 0 : _g.paddingRight) !== null && _h !== void 0 ? _h : 0;
        _nativeStop.paddingBottom =
            (_m = (_k = (_j = stop.padding) === null || _j === void 0 ? void 0 : _j.paddingBottom) !== null && _k !== void 0 ? _k : (_l = stop.bounds) === null || _l === void 0 ? void 0 : _l.paddingBottom) !== null && _m !== void 0 ? _m : 0;
        _nativeStop.paddingLeft =
            (_r = (_p = (_o = stop.padding) === null || _o === void 0 ? void 0 : _o.paddingLeft) !== null && _p !== void 0 ? _p : (_q = stop.bounds) === null || _q === void 0 ? void 0 : _q.paddingLeft) !== null && _r !== void 0 ? _r : 0;
        return _nativeStop;
    }, [props.followUserLocation]);
    const nativeDefaultStop = useMemo(() => {
        if (!defaultSettings) {
            return null;
        }
        return buildNativeStop(defaultSettings);
    }, [defaultSettings, buildNativeStop]);
    const nativeStop = useMemo(() => {
        return buildNativeStop({
            type: 'CameraStop',
            centerCoordinate,
            bounds,
            heading,
            pitch,
            zoomLevel,
            padding,
            animationDuration,
            animationMode,
        });
    }, [
        centerCoordinate,
        bounds,
        heading,
        pitch,
        zoomLevel,
        padding,
        animationDuration,
        animationMode,
        buildNativeStop,
    ]);
    const nativeMaxBounds = useMemo(() => {
        if (!(maxBounds === null || maxBounds === void 0 ? void 0 : maxBounds.ne) || !(maxBounds === null || maxBounds === void 0 ? void 0 : maxBounds.sw)) {
            return null;
        }
        return JSON.stringify(makeLatLngBounds(maxBounds.ne, maxBounds.sw));
    }, [maxBounds]);
    const _setCamera = (config) => {
        if (!allowUpdates) {
            return;
        }
        if (!config.type)
            // @ts-expect-error The compiler doesn't understand that the `config` union type is guaranteed
            // to be an object type.
            config = Object.assign(Object.assign({}, config), { 
                // @ts-expect-error Allows JS files to pass in an invalid config (lacking the `type` property),
                // which would raise a compilation error in TS files.
                type: config.stops ? 'CameraStops' : 'CameraStop' });
        if (config.type === 'CameraStops') {
            for (const _stop of config.stops) {
                let _nativeStops = [];
                const _nativeStop = buildNativeStop(_stop);
                if (_nativeStop) {
                    _nativeStops = [..._nativeStops, _nativeStop];
                }
                nativeCamera.current.setNativeProps({
                    stop: { stops: _nativeStops },
                });
            }
        }
        else if (config.type === 'CameraStop') {
            const _nativeStop = buildNativeStop(config);
            if (_nativeStop) {
                nativeCamera.current.setNativeProps({ stop: _nativeStop });
            }
        }
    };
    const setCamera = useCallback(_setCamera, [
        allowUpdates,
        buildNativeStop,
    ]);
    const _fitBounds = (ne, sw, paddingConfig = 0, _animationDuration = 0) => {
        let _padding = {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
        };
        if (typeof paddingConfig === 'object') {
            if (paddingConfig.length === 2) {
                _padding = {
                    paddingTop: paddingConfig[0],
                    paddingBottom: paddingConfig[0],
                    paddingLeft: paddingConfig[1],
                    paddingRight: paddingConfig[1],
                };
            }
            else if (paddingConfig.length === 4) {
                _padding = {
                    paddingTop: paddingConfig[0],
                    paddingBottom: paddingConfig[2],
                    paddingLeft: paddingConfig[3],
                    paddingRight: paddingConfig[1],
                };
            }
        }
        else if (typeof paddingConfig === 'number') {
            _padding = {
                paddingTop: paddingConfig,
                paddingBottom: paddingConfig,
                paddingLeft: paddingConfig,
                paddingRight: paddingConfig,
            };
        }
        setCamera({
            type: 'CameraStop',
            bounds: {
                ne,
                sw,
            },
            padding: _padding,
            animationDuration: _animationDuration,
            animationMode: 'easeTo',
        });
    };
    const fitBounds = useCallback(_fitBounds, [setCamera]);
    const _flyTo = (_centerCoordinate, _animationDuration = 2000) => {
        setCamera({
            type: 'CameraStop',
            centerCoordinate: _centerCoordinate,
            animationDuration: _animationDuration,
        });
    };
    const flyTo = useCallback(_flyTo, [setCamera]);
    const _moveTo = (_centerCoordinate, _animationDuration = 0) => {
        setCamera({
            type: 'CameraStop',
            centerCoordinate: _centerCoordinate,
            animationDuration: _animationDuration,
            animationMode: 'easeTo',
        });
    };
    const moveTo = useCallback(_moveTo, [setCamera]);
    const _zoomTo = (_zoomLevel, _animationDuration = 2000) => {
        setCamera({
            type: 'CameraStop',
            zoomLevel: _zoomLevel,
            animationDuration: _animationDuration,
            animationMode: 'flyTo',
        });
    };
    const zoomTo = useCallback(_zoomTo, [setCamera]);
    useImperativeHandle(ref, () => ({
        /**
         * Sets any camera properties, with default fallbacks if unspecified.
         *
         * @example
         * camera.current?.setCamera({
         *   centerCoordinate: [lon, lat],
         * });
         *
         * @param {CameraStop | CameraStops} config
         */
        setCamera,
        /**
         * Set the camera position to enclose the provided bounds, with optional
         * padding and duration.
         *
         * @example
         * camera.fitBounds([lon, lat], [lon, lat]);
         * camera.fitBounds([lon, lat], [lon, lat], [20, 0], 1000);
         *
         * @param {Position} ne Northeast coordinate of bounding box
         * @param {Position} sw Southwest coordinate of bounding box
         * @param {number | number[]} paddingConfig The viewport padding, specified as a number (all sides equal), a 2-item array ([vertical, horizontal]), or a 4-item array ([top, right, bottom, left])
         * @param {number} animationDuration The transition duration
         */
        fitBounds,
        /**
         * Sets the camera to center around the provided coordinate using a realistic 'travel'
         * animation, with optional duration.
         *
         * @example
         * camera.flyTo([lon, lat]);
         * camera.flyTo([lon, lat], 12000);
         *
         *  @param {Position} centerCoordinate The coordinate to center in the view
         *  @param {number} animationDuration The transition duration
         */
        flyTo,
        /**
         * Sets the camera to center around the provided coordinate, with optional duration.
         *
         * @example
         * camera.moveTo([lon, lat], 200);
         * camera.moveTo([lon, lat]);
         *
         *  @param {Position} centerCoordinate The coordinate to center in the view
         *  @param {number} animationDuration The transition duration
         */
        moveTo,
        /**
         * Zooms the camera to the provided level, with optional duration.
         *
         * @example
         * camera.zoomTo(16);
         * camera.zoomTo(16, 100);
         *
         * @param {number} zoomLevel The target zoom
         * @param {number} animationDuration The transition duration
         */
        zoomTo,
    }));
    return (<RCTMGLCamera testID={'Camera'} ref={nativeCamera} stop={nativeStop} animationDuration={animationDuration} animationMode={animationMode} defaultStop={nativeDefaultStop} followUserLocation={followUserLocation} followUserMode={followUserMode} followPitch={followPitch} followHeading={followHeading} followZoomLevel={followZoomLevel} minZoomLevel={minZoomLevel} maxZoomLevel={maxZoomLevel} maxBounds={nativeMaxBounds} onUserTrackingModeChange={onUserTrackingModeChange}/>);
}));
const RCTMGLCamera = requireNativeComponent(NATIVE_MODULE_NAME);
