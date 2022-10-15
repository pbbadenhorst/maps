import React from 'react';
import MapContext from '../MapContext';
class Camera extends React.Component {
    componentDidMount() {
        const { map } = this.context;
        const { centerCoordinate } = this.props;
        if (map && centerCoordinate) {
            map.flyTo({ center: centerCoordinate });
        }
    }
    fitBounds(northEastCoordinates, southWestCoordinates, padding = 0, animationDuration = 0.0) {
        const { map } = this.context;
        if (map) {
            map.fitBounds([northEastCoordinates, southWestCoordinates]);
        }
    }
    render() {
        return <></>;
    }
}
Camera.contextType = MapContext;
Camera.UserTrackingModes = [];
export { Camera };
export default Camera;
