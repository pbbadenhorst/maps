export const NATIVE_MODULE_NAME: "RCTMGLImageSource";
export default ImageSource;
/**
 * ImageSource is a content source that is used for a georeferenced raster image to be shown on the map.
 * The georeferenced image scales and rotates as the user zooms and rotates the map
 */
declare class ImageSource extends AbstractSource<any, any> {
    static propTypes: any;
    constructor(props: any);
    constructor(props: any, context: any);
    _getURL(): any;
    render(): JSX.Element | null;
}
import AbstractSource from "./AbstractSource";
