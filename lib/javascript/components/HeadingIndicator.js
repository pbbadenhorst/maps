import React from 'react';
import headingIcon from '../../assets/heading.png';
import { SymbolLayer } from './SymbolLayer';
const style = {
    iconImage: headingIcon,
    iconAllowOverlap: true,
    iconPitchAlignment: 'map',
    iconRotationAlignment: 'map',
};
const HeadingIndicator = ({ heading }) => (<SymbolLayer key="mapboxUserLocationHeadingIndicator" id="mapboxUserLocationHeadingIndicator" belowLayerID="mapboxUserLocationWhiteCircle" style={Object.assign({ iconRotate: heading }, style)}/>);
export default HeadingIndicator;
