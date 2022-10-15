export const NATIVE_MODULE_NAME: "RCTMGLFillLayer";
export default FillLayer;
/**
 * FillLayer is a style layer that renders one or more filled (and optionally stroked) polygons on the map.
 */
declare class FillLayer extends AbstractLayer<any, any> {
    static propTypes: any;
    static defaultProps: {
        sourceID: any;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import AbstractLayer from "./AbstractLayer";
