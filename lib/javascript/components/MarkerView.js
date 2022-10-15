import React from 'react';
import { Platform, NativeModules, requireNativeComponent, View, } from 'react-native';
import { toJSONString } from '../utils';
import { makePoint } from '../utils/geoUtils';
import PointAnnotation from './PointAnnotation';
const Mapbox = NativeModules.MGLModule;
export const NATIVE_MODULE_NAME = 'RCTMGLMarkerView';
/**
 * MarkerView represents an interactive React Native marker on the map.
 *
 * If you have static views, consider using PointAnnotation or SymbolLayer to display
 * an image, as they'll offer much better performance. Mapbox suggests using this
 * component for a maximum of around 100 views displayed at one time.
 *
 * This is implemented with view annotations on [Android](https://docs.mapbox.com/android/maps/guides/annotations/view-annotations/)
 * and [iOS](https://docs.mapbox.com/ios/maps/guides/annotations/view-annotations).
 *
 * This component has no dedicated `onPress` method. Instead, you should handle gestures
 * with the React views passed in as `children`.
 */
class MarkerView extends React.PureComponent {
    _idForPointAnnotation() {
        if (this.__idForPointAnnotation === undefined) {
            MarkerView.lastId = MarkerView.lastId + 1;
            this.__idForPointAnnotation = `MV-${MarkerView.lastId}`;
        }
        return this.__idForPointAnnotation;
    }
    _getCoordinate(coordinate) {
        if (!coordinate) {
            return undefined;
        }
        return toJSONString(makePoint(coordinate));
    }
    render() {
        if (this.props.anchor.x < 0 ||
            this.props.anchor.y < 0 ||
            this.props.anchor.x > 1 ||
            this.props.anchor.y > 1) {
            console.warn(`[MarkerView] Anchor with value (${this.props.anchor.x}, ${this.props.anchor.y}) should not be outside the range [(0, 0), (1, 1)]`);
        }
        if (Platform.OS === 'ios' && !Mapbox.MapboxV10) {
            return (<PointAnnotation id={this._idForPointAnnotation()} {...this.props}/>);
        }
        const { anchor = { x: 0.5, y: 0.5 } } = this.props;
        return (<RCTMGLMarkerView style={[
                {
                    flex: 0,
                    alignSelf: 'flex-start',
                },
                this.props.style,
            ]} coordinate={this._getCoordinate(this.props.coordinate)} anchor={anchor} allowOverlap={this.props.allowOverlap} isSelected={this.props.isSelected} onTouchEnd={(e) => {
                console.log('e => ');
                e.stopPropagation();
            }}>
        <View style={{ flex: 0, alignSelf: 'flex-start' }} onStartShouldSetResponder={(_event) => {
                console.log('+> onStart');
                return true;
            }} onTouchEnd={(e) => {
                console.log('e => ');
                e.stopPropagation();
            }}>
          {this.props.children}
        </View>
      </RCTMGLMarkerView>);
    }
}
MarkerView.defaultProps = {
    anchor: { x: 0.5, y: 0.5 },
    allowOverlap: false,
    isSelected: false,
};
MarkerView.lastId = 0;
const RCTMGLMarkerView = requireNativeComponent(NATIVE_MODULE_NAME);
export default MarkerView;
