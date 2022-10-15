var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { NativeModules, requireNativeComponent, } from 'react-native';
import { getFilter } from '../utils/filterUtils';
import { toJSONString, cloneReactChildrenWithProps, isFunction, isAndroid, } from '../utils';
import { copyPropertiesAsDeprecated } from '../utils/deprecation';
import AbstractSource from './AbstractSource';
import NativeBridgeComponent from './NativeBridgeComponent';
const MapboxGL = NativeModules.MGLModule;
export const NATIVE_MODULE_NAME = 'RCTMGLShapeSource';
/**
 * ShapeSource is a map content source that supplies vector shapes to be shown on the map.
 * The shape may be an url or a GeoJSON object
 */
export class ShapeSource extends NativeBridgeComponent((AbstractSource), NATIVE_MODULE_NAME) {
    constructor(props) {
        super(props);
    }
    _setNativeRef(nativeRef) {
        this.setNativeRef(nativeRef);
        super._runPendingNativeCommands(nativeRef);
    }
    /**
     * Returns all features from the source that match the query parameters whether the feature is currently
     * rendered on the map.
     *
     * @example
     * shapeSource.features()
     *
     * @param  {Array=} filter - an optional filter statement to filter the returned Features.
     * @return {FeatureCollection}
     */
    features(filter = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this._runNativeCommand('features', this._nativeRef, getFilter(filter));
            if (isAndroid()) {
                return JSON.parse(res.data);
            }
            return res.data;
        });
    }
    /**
     * Returns the zoom needed to expand the cluster.
     *
     * @example
     * const zoom = await shapeSource.getClusterExpansionZoom(clusterId);
     *
     * @param  {Feature} feature - The feature cluster to expand.
     * @return {number}
     */
    getClusterExpansionZoom(feature) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof feature === 'number') {
                console.warn('Using cluster_id is deprecated and will be removed from the future releases. Please use cluster as an argument instead.');
                const res = yield this._runNativeCommand('getClusterExpansionZoomById', this._nativeRef, [feature]);
                return res.data;
            }
            const res = yield this._runNativeCommand('getClusterExpansionZoom', this._nativeRef, [JSON.stringify(feature)]);
            return res.data;
        });
    }
    /**
     * Returns the FeatureCollection from the cluster.
     *
     * @example
     * const collection = await shapeSource.getClusterLeaves(clusterId, limit, offset);
     *
     * @param  {GeoJSON.Feature} feature - The feature cluster to expand.
     * @param  {number} limit - The number of points to return.
     * @param  {number} offset - The amount of points to skip (for pagination).
     * @return {FeatureCollection}
     */
    getClusterLeaves(feature, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof feature === 'number') {
                console.warn('Using cluster_id is deprecated and will be removed from the future releases. Please use cluster as an argument instead.');
                const res = yield this._runNativeCommand('getClusterLeavesById', this._nativeRef, [feature, limit, offset]);
                if (isAndroid()) {
                    return JSON.parse(res.data);
                }
                return res.data;
            }
            const res = yield this._runNativeCommand('getClusterLeaves', this._nativeRef, [JSON.stringify(feature), limit, offset]);
            if (isAndroid()) {
                return JSON.parse(res.data);
            }
            return res.data;
        });
    }
    /**
     * Returns the FeatureCollection from the cluster (on the next zoom level).
     *
     * @example
     * const collection = await shapeSource.getClusterChildren(clusterId);
     *
     * @param  {GeoJSON.Feature} feature - The feature cluster to expand.
     * @return {FeatureCollection}
     */
    getClusterChildren(feature) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof feature === 'number') {
                console.warn('Using cluster_id is deprecated and will be removed from the future releases. Please use cluster as an argument instead.');
                const res = yield this._runNativeCommand('getClusterChildrenById', this._nativeRef, [feature]);
                if (isAndroid()) {
                    return JSON.parse(res.data);
                }
                return res.data;
            }
            const res = yield this._runNativeCommand('getClusterChildren', this._nativeRef, [JSON.stringify(feature)]);
            if (isAndroid()) {
                return JSON.parse(res.data);
            }
            return res.data;
        });
    }
    setNativeProps(props) {
        const shallowProps = Object.assign({}, props);
        // Adds support for Animated
        if (shallowProps.shape && typeof shallowProps.shape !== 'string') {
            shallowProps.shape = JSON.stringify(shallowProps.shape);
        }
        super.setNativeProps(shallowProps);
    }
    _getShape() {
        if (!this.props.shape) {
            return;
        }
        return toJSONString(this.props.shape);
    }
    onPress(event) {
        var _a, _b;
        const { nativeEvent: { payload: { features, coordinates, point }, }, } = event;
        let newEvent = {
            features,
            coordinates,
            point,
        };
        newEvent = copyPropertiesAsDeprecated(event, newEvent, (key) => {
            console.warn(`event.${key} is deprecated on ShapeSource#onPress, please use event.features`);
        }, {
            nativeEvent: (origNativeEvent) => (Object.assign(Object.assign({}, origNativeEvent), { payload: features[0] })),
        });
        (_b = (_a = this.props).onPress) === null || _b === void 0 ? void 0 : _b.call(_a, newEvent);
    }
    render() {
        const props = {
            id: this.props.id,
            url: this.props.url,
            shape: this._getShape(),
            hitbox: this.props.hitbox,
            hasPressListener: isFunction(this.props.onPress),
            onMapboxShapeSourcePress: this.onPress.bind(this),
            cluster: this.props.cluster ? 1 : 0,
            clusterRadius: this.props.clusterRadius,
            clusterMaxZoomLevel: this.props.clusterMaxZoomLevel,
            clusterProperties: this.props.clusterProperties,
            maxZoomLevel: this.props.maxZoomLevel,
            buffer: this.props.buffer,
            tolerance: this.props.tolerance,
            lineMetrics: this.props.lineMetrics,
            onPress: undefined,
            ref: (nativeRef) => this._setNativeRef(nativeRef),
            onAndroidCallback: isAndroid() ? this._onAndroidCallback : undefined,
        };
        return (<RCTMGLShapeSource {...props}>
        {cloneReactChildrenWithProps(this.props.children, {
                sourceID: this.props.id,
            })}
      </RCTMGLShapeSource>);
    }
}
ShapeSource.NATIVE_ASSETS_KEY = 'assets';
ShapeSource.defaultProps = {
    id: MapboxGL.StyleSource.DefaultSourceID,
};
const RCTMGLShapeSource = requireNativeComponent(NATIVE_MODULE_NAME);
