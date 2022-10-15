import MapboxModule from './MapboxModule';
import Camera from './components/Camera';
import MapView from './components/MapView';
import Logger from './utils/Logger';
const ExportedComponents = {
    Camera,
    MapView,
    Logger,
};
const Mapbox = Object.assign(Object.assign({}, MapboxModule), ExportedComponents);
export { Camera, MapView, Logger };
export default Mapbox;
