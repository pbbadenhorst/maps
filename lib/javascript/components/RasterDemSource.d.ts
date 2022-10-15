export const NATIVE_MODULE_NAME: "RCTMGLRasterDemSource";
export default RasterDemSource;
declare class RasterDemSource extends AbstractSource<any, any> {
    static propTypes: any;
    static defaultProps: {
        id: any;
    };
    constructor(props: any);
    render(): JSX.Element;
}
import AbstractSource from "./AbstractSource";
