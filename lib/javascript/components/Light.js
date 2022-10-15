import React from 'react';
import { requireNativeComponent } from 'react-native';
import { viewPropTypes } from '../utils';
import { LightLayerStyleProp } from '../utils/styleMap';
import AbstractLayer from './AbstractLayer';
export const NATIVE_MODULE_NAME = 'RCTMGLLight';
/**
 * Light represents the light source for extruded geometries
 */
class Light extends AbstractLayer {
    setNativeProps(props) {
        if (this.refs.nativeLight) {
            this.refs.nativeLight.setNativeProps(props);
        }
    }
    render() {
        return (<RCTMGLLight ref="nativeLight" testID="rctmglLight" {...this.props} style={undefined} reactStyle={this.getStyle(this.props.style)}/>);
    }
}
Light.propTypes = Object.assign(Object.assign({}, viewPropTypes), { 
    /**
     * Customizable style attributes
     */
    style: LightLayerStyleProp });
const RCTMGLLight = requireNativeComponent(NATIVE_MODULE_NAME, Light, {
    nativeOnly: { reactStyle: true },
});
export default Light;
