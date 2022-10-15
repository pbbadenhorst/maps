import React, { memo, useMemo } from 'react';
import { requireNativeComponent } from 'react-native';
import { transformStyle } from '../utils/StyleValue';
export const NATIVE_MODULE_NAME = 'RCTMGLAtmosphere';
export const Atmosphere = memo((props) => {
    const baseProps = useMemo(() => {
        return Object.assign(Object.assign({}, props), { reactStyle: transformStyle(props.style), style: undefined });
    }, [props]);
    return <RCTMGLAtmosphere {...baseProps}/>;
});
const RCTMGLAtmosphere = requireNativeComponent(NATIVE_MODULE_NAME);
