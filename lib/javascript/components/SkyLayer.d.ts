export const NATIVE_MODULE_NAME: "RCTMGLSkyLayer";
export default SkyLayer;
/**
 * SkyLayer is a spherical dome around the map that is always rendered behind all other layers
 */
declare class SkyLayer extends AbstractLayer<any, any> {
    static propTypes: any;
    static defaultProps: {
        sourceID: any;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import AbstractLayer from "./AbstractLayer";
