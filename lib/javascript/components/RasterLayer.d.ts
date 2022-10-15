export const NATIVE_MODULE_NAME: "RCTMGLRasterLayer";
export default RasterLayer;
declare class RasterLayer extends AbstractLayer<any, any> {
    static propTypes: any;
    static defaultProps: {
        sourceID: any;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import AbstractLayer from "./AbstractLayer";
