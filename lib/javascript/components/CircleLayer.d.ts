export const NATIVE_MODULE_NAME: "RCTMGLCircleLayer";
export default CircleLayer;
/**
 * CircleLayer is a style layer that renders one or more filled circles on the map.
 */
declare class CircleLayer extends AbstractLayer<any, any> {
    static propTypes: any;
    static defaultProps: {
        sourceID: any;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import AbstractLayer from "./AbstractLayer";
