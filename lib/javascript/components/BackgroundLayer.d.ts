export const NATIVE_MODULE_NAME: "RCTMGLBackgroundLayer";
export default BackgroundLayer;
declare class BackgroundLayer extends AbstractLayer<any, any> {
    static propTypes: any;
    static defaultProps: {
        sourceID: any;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    render(): JSX.Element;
}
import AbstractLayer from "./AbstractLayer";
