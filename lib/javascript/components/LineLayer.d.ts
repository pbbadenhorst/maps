export const NATIVE_MODULE_NAME: "RCTMGLLineLayer";
export default LineLayer;
/**
 * LineLayer is a style layer that renders one or more stroked polylines on the map.
 */
declare class LineLayer extends AbstractLayer<any, any> {
    static propTypes: any;
    static defaultProps: {
        sourceID: any;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import AbstractLayer from "./AbstractLayer";
