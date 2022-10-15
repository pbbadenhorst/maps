import React from 'react';
import { View, NativeModules, requireNativeComponent } from 'react-native';
import AbstractLayer from './AbstractLayer';
const MapboxGL = NativeModules.MGLModule;
export const NATIVE_MODULE_NAME = 'RCTMGLSymbolLayer';
const RCTMGLSymbolLayer = requireNativeComponent(NATIVE_MODULE_NAME);
/**
 * SymbolLayer is a style layer that renders icon and text labels at points or along lines on the map.
 */
export class SymbolLayer extends AbstractLayer {
    _shouldSnapshot() {
        let isSnapshot = false;
        if (React.Children.count(this.props.children) <= 0) {
            return isSnapshot;
        }
        React.Children.forEach(this.props.children, (child) => {
            if ((child === null || child === void 0 ? void 0 : child.type) === View) {
                isSnapshot = true;
            }
        });
        return isSnapshot;
    }
    render() {
        const props = Object.assign(Object.assign({}, this.baseProps), { snapshot: this._shouldSnapshot(), sourceLayerID: this.props.sourceLayerID });
        return (<RCTMGLSymbolLayer ref={this.setNativeLayer} {...props}>
        {this.props.children}
      </RCTMGLSymbolLayer>);
    }
}
SymbolLayer.defaultProps = {
    sourceID: MapboxGL.StyleSource.DefaultSourceID,
};
