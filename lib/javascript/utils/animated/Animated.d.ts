export default Animated;
declare namespace Animated {
    const ShapeSource: RNAnimated.AnimatedComponent<typeof import("../../components/ShapeSource").ShapeSource>;
    const ImageSource: RNAnimated.AnimatedComponent<typeof import("../../components/ImageSource").default>;
    const FillLayer: RNAnimated.AnimatedComponent<typeof import("../../components/FillLayer").default>;
    const FillExtrusionLayer: RNAnimated.AnimatedComponent<typeof import("../../components/FillExtrusionLayer").default>;
    const LineLayer: RNAnimated.AnimatedComponent<typeof import("../../components/LineLayer").default>;
    const CircleLayer: RNAnimated.AnimatedComponent<typeof import("../../components/CircleLayer").default>;
    const SymbolLayer: RNAnimated.AnimatedComponent<typeof import("../../components/SymbolLayer").SymbolLayer>;
    const RasterLayer: RNAnimated.AnimatedComponent<typeof import("../../components/RasterLayer").default>;
    const BackgroundLayer: RNAnimated.AnimatedComponent<typeof import("../../components/BackgroundLayer").default>;
}
import { Animated as RNAnimated } from "react-native";
