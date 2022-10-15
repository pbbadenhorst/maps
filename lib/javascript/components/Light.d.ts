export const NATIVE_MODULE_NAME: "RCTMGLLight";
export default Light;
/**
 * Light represents the light source for extruded geometries
 */
declare class Light extends AbstractLayer<any, any> {
    static propTypes: any;
    constructor(props: any);
    constructor(props: any, context: any);
    setNativeProps(props: any): void;
    render(): JSX.Element;
}
import AbstractLayer from "./AbstractLayer";
