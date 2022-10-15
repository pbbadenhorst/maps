import React, { memo, useMemo } from 'react';
import { requireNativeComponent } from 'react-native';
import { transformStyle } from '../utils/StyleValue';
export const NATIVE_MODULE_NAME = 'RCTMGLTerrain';
export const Terrain = memo((props) => {
    let { style = {} } = props;
    if (props.exaggeration) {
        console.warn(`Tarrain: exaggeration property is deprecated pls use style.exaggeration instead!`);
        style = Object.assign({ exaggeration: props.exaggeration }, style);
    }
    const baseProps = useMemo(() => {
        return Object.assign(Object.assign({}, props), { reactStyle: transformStyle(style), style: undefined });
    }, [props, style]);
    console.log('BASE PROPS', baseProps);
    return <RCTMGLTerrain {...baseProps}/>;
});
const RCTMGLTerrain = requireNativeComponent(NATIVE_MODULE_NAME);
