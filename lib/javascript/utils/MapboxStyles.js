var VisibilityEnum;
(function (VisibilityEnum) {
    /** The layer is shown. */
    VisibilityEnum["Visible"] = "visible";
    /** The layer is not shown. */
    VisibilityEnum["None"] = "none";
})(VisibilityEnum || (VisibilityEnum = {}));
var FillTranslateAnchorEnum;
(function (FillTranslateAnchorEnum) {
    /** The fill is translated relative to the map. */
    FillTranslateAnchorEnum["Map"] = "map";
    /** The fill is translated relative to the viewport. */
    FillTranslateAnchorEnum["Viewport"] = "viewport";
})(FillTranslateAnchorEnum || (FillTranslateAnchorEnum = {}));
var LineCapEnum;
(function (LineCapEnum) {
    /** A cap with a squared-off end which is drawn to the exact endpoint of the line. */
    LineCapEnum["Butt"] = "butt";
    /** A cap with a rounded end which is drawn beyond the endpoint of the line at a radius of one-half of the line's width and centered on the endpoint of the line. */
    LineCapEnum["Round"] = "round";
    /** A cap with a squared-off end which is drawn beyond the endpoint of the line at a distance of one-half of the line's width. */
    LineCapEnum["Square"] = "square";
})(LineCapEnum || (LineCapEnum = {}));
var LineJoinEnum;
(function (LineJoinEnum) {
    /** A join with a squared-off end which is drawn beyond the endpoint of the line at a distance of one-half of the line's width. */
    LineJoinEnum["Bevel"] = "bevel";
    /** A join with a rounded end which is drawn beyond the endpoint of the line at a radius of one-half of the line's width and centered on the endpoint of the line. */
    LineJoinEnum["Round"] = "round";
    /** A join with a sharp, angled corner which is drawn with the outer sides beyond the endpoint of the path until they meet. */
    LineJoinEnum["Miter"] = "miter";
})(LineJoinEnum || (LineJoinEnum = {}));
var LineTranslateAnchorEnum;
(function (LineTranslateAnchorEnum) {
    /** The line is translated relative to the map. */
    LineTranslateAnchorEnum["Map"] = "map";
    /** The line is translated relative to the viewport. */
    LineTranslateAnchorEnum["Viewport"] = "viewport";
})(LineTranslateAnchorEnum || (LineTranslateAnchorEnum = {}));
var SymbolPlacementEnum;
(function (SymbolPlacementEnum) {
    /** The label is placed at the point where the geometry is located. */
    SymbolPlacementEnum["Point"] = "point";
    /** The label is placed along the line of the geometry. Can only be used on `LineString` and `Polygon` geometries. */
    SymbolPlacementEnum["Line"] = "line";
    /** The label is placed at the center of the line of the geometry. Can only be used on `LineString` and `Polygon` geometries. Note that a single feature in a vector tile may contain multiple line geometries. */
    SymbolPlacementEnum["LineCenter"] = "line-center";
})(SymbolPlacementEnum || (SymbolPlacementEnum = {}));
var SymbolZOrderEnum;
(function (SymbolZOrderEnum) {
    /** Sorts symbols by `symbol-sort-key` if set. Otherwise, sorts symbols by their y-position relative to the viewport if `icon-allow-overlap` or `text-allow-overlap` is set to `true` or `icon-ignore-placement` or `text-ignore-placement` is `false`. */
    SymbolZOrderEnum["Auto"] = "auto";
    /** Sorts symbols by their y-position relative to the viewport if `icon-allow-overlap` or `text-allow-overlap` is set to `true` or `icon-ignore-placement` or `text-ignore-placement` is `false`. */
    SymbolZOrderEnum["ViewportY"] = "viewport-y";
    /** Sorts symbols by `symbol-sort-key` if set. Otherwise, no sorting is applied; symbols are rendered in the same order as the source data. */
    SymbolZOrderEnum["Source"] = "source";
})(SymbolZOrderEnum || (SymbolZOrderEnum = {}));
var IconRotationAlignmentEnum;
(function (IconRotationAlignmentEnum) {
    /** When `symbol-placement` is set to `point`, aligns icons east-west. When `symbol-placement` is set to `line` or `line-center`, aligns icon x-axes with the line. */
    IconRotationAlignmentEnum["Map"] = "map";
    /** Produces icons whose x-axes are aligned with the x-axis of the viewport, regardless of the value of `symbol-placement`. */
    IconRotationAlignmentEnum["Viewport"] = "viewport";
    /** When `symbol-placement` is set to `point`, this is equivalent to `viewport`. When `symbol-placement` is set to `line` or `line-center`, this is equivalent to `map`. */
    IconRotationAlignmentEnum["Auto"] = "auto";
})(IconRotationAlignmentEnum || (IconRotationAlignmentEnum = {}));
var IconTextFitEnum;
(function (IconTextFitEnum) {
    /** The icon is displayed at its intrinsic aspect ratio. */
    IconTextFitEnum["None"] = "none";
    /** The icon is scaled in the x-dimension to fit the width of the text. */
    IconTextFitEnum["Width"] = "width";
    /** The icon is scaled in the y-dimension to fit the height of the text. */
    IconTextFitEnum["Height"] = "height";
    /** The icon is scaled in both x- and y-dimensions. */
    IconTextFitEnum["Both"] = "both";
})(IconTextFitEnum || (IconTextFitEnum = {}));
var IconAnchorEnum;
(function (IconAnchorEnum) {
    /** The center of the icon is placed closest to the anchor. */
    IconAnchorEnum["Center"] = "center";
    /** The left side of the icon is placed closest to the anchor. */
    IconAnchorEnum["Left"] = "left";
    /** The right side of the icon is placed closest to the anchor. */
    IconAnchorEnum["Right"] = "right";
    /** The top of the icon is placed closest to the anchor. */
    IconAnchorEnum["Top"] = "top";
    /** The bottom of the icon is placed closest to the anchor. */
    IconAnchorEnum["Bottom"] = "bottom";
    /** The top left corner of the icon is placed closest to the anchor. */
    IconAnchorEnum["TopLeft"] = "top-left";
    /** The top right corner of the icon is placed closest to the anchor. */
    IconAnchorEnum["TopRight"] = "top-right";
    /** The bottom left corner of the icon is placed closest to the anchor. */
    IconAnchorEnum["BottomLeft"] = "bottom-left";
    /** The bottom right corner of the icon is placed closest to the anchor. */
    IconAnchorEnum["BottomRight"] = "bottom-right";
})(IconAnchorEnum || (IconAnchorEnum = {}));
var IconPitchAlignmentEnum;
(function (IconPitchAlignmentEnum) {
    /** The icon is aligned to the plane of the map. */
    IconPitchAlignmentEnum["Map"] = "map";
    /** The icon is aligned to the plane of the viewport. */
    IconPitchAlignmentEnum["Viewport"] = "viewport";
    /** Automatically matches the value of `icon-rotation-alignment`. */
    IconPitchAlignmentEnum["Auto"] = "auto";
})(IconPitchAlignmentEnum || (IconPitchAlignmentEnum = {}));
var TextPitchAlignmentEnum;
(function (TextPitchAlignmentEnum) {
    /** The text is aligned to the plane of the map. */
    TextPitchAlignmentEnum["Map"] = "map";
    /** The text is aligned to the plane of the viewport. */
    TextPitchAlignmentEnum["Viewport"] = "viewport";
    /** Automatically matches the value of `text-rotation-alignment`. */
    TextPitchAlignmentEnum["Auto"] = "auto";
})(TextPitchAlignmentEnum || (TextPitchAlignmentEnum = {}));
var TextRotationAlignmentEnum;
(function (TextRotationAlignmentEnum) {
    /** When `symbol-placement` is set to `point`, aligns text east-west. When `symbol-placement` is set to `line` or `line-center`, aligns text x-axes with the line. */
    TextRotationAlignmentEnum["Map"] = "map";
    /** Produces glyphs whose x-axes are aligned with the x-axis of the viewport, regardless of the value of `symbol-placement`. */
    TextRotationAlignmentEnum["Viewport"] = "viewport";
    /** When `symbol-placement` is set to `point`, this is equivalent to `viewport`. When `symbol-placement` is set to `line` or `line-center`, this is equivalent to `map`. */
    TextRotationAlignmentEnum["Auto"] = "auto";
})(TextRotationAlignmentEnum || (TextRotationAlignmentEnum = {}));
var TextJustifyEnum;
(function (TextJustifyEnum) {
    /** The text is aligned towards the anchor position. */
    TextJustifyEnum["Auto"] = "auto";
    /** The text is aligned to the left. */
    TextJustifyEnum["Left"] = "left";
    /** The text is centered. */
    TextJustifyEnum["Center"] = "center";
    /** The text is aligned to the right. */
    TextJustifyEnum["Right"] = "right";
})(TextJustifyEnum || (TextJustifyEnum = {}));
var TextVariableAnchorEnum;
(function (TextVariableAnchorEnum) {
    /** The center of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["Center"] = "center";
    /** The left side of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["Left"] = "left";
    /** The right side of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["Right"] = "right";
    /** The top of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["Top"] = "top";
    /** The bottom of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["Bottom"] = "bottom";
    /** The top left corner of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["TopLeft"] = "top-left";
    /** The top right corner of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["TopRight"] = "top-right";
    /** The bottom left corner of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["BottomLeft"] = "bottom-left";
    /** The bottom right corner of the text is placed closest to the anchor. */
    TextVariableAnchorEnum["BottomRight"] = "bottom-right";
})(TextVariableAnchorEnum || (TextVariableAnchorEnum = {}));
var TextAnchorEnum;
(function (TextAnchorEnum) {
    /** The center of the text is placed closest to the anchor. */
    TextAnchorEnum["Center"] = "center";
    /** The left side of the text is placed closest to the anchor. */
    TextAnchorEnum["Left"] = "left";
    /** The right side of the text is placed closest to the anchor. */
    TextAnchorEnum["Right"] = "right";
    /** The top of the text is placed closest to the anchor. */
    TextAnchorEnum["Top"] = "top";
    /** The bottom of the text is placed closest to the anchor. */
    TextAnchorEnum["Bottom"] = "bottom";
    /** The top left corner of the text is placed closest to the anchor. */
    TextAnchorEnum["TopLeft"] = "top-left";
    /** The top right corner of the text is placed closest to the anchor. */
    TextAnchorEnum["TopRight"] = "top-right";
    /** The bottom left corner of the text is placed closest to the anchor. */
    TextAnchorEnum["BottomLeft"] = "bottom-left";
    /** The bottom right corner of the text is placed closest to the anchor. */
    TextAnchorEnum["BottomRight"] = "bottom-right";
})(TextAnchorEnum || (TextAnchorEnum = {}));
var TextWritingModeEnum;
(function (TextWritingModeEnum) {
    /** If a text's language supports horizontal writing mode, symbols would be laid out horizontally. */
    TextWritingModeEnum["Horizontal"] = "horizontal";
    /** If a text's language supports vertical writing mode, symbols would be laid out vertically. */
    TextWritingModeEnum["Vertical"] = "vertical";
})(TextWritingModeEnum || (TextWritingModeEnum = {}));
var TextTransformEnum;
(function (TextTransformEnum) {
    /** The text is not altered. */
    TextTransformEnum["None"] = "none";
    /** Forces all letters to be displayed in uppercase. */
    TextTransformEnum["Uppercase"] = "uppercase";
    /** Forces all letters to be displayed in lowercase. */
    TextTransformEnum["Lowercase"] = "lowercase";
})(TextTransformEnum || (TextTransformEnum = {}));
var IconTranslateAnchorEnum;
(function (IconTranslateAnchorEnum) {
    /** Icons are translated relative to the map. */
    IconTranslateAnchorEnum["Map"] = "map";
    /** Icons are translated relative to the viewport. */
    IconTranslateAnchorEnum["Viewport"] = "viewport";
})(IconTranslateAnchorEnum || (IconTranslateAnchorEnum = {}));
var TextTranslateAnchorEnum;
(function (TextTranslateAnchorEnum) {
    /** The text is translated relative to the map. */
    TextTranslateAnchorEnum["Map"] = "map";
    /** The text is translated relative to the viewport. */
    TextTranslateAnchorEnum["Viewport"] = "viewport";
})(TextTranslateAnchorEnum || (TextTranslateAnchorEnum = {}));
var CircleTranslateAnchorEnum;
(function (CircleTranslateAnchorEnum) {
    /** The circle is translated relative to the map. */
    CircleTranslateAnchorEnum["Map"] = "map";
    /** The circle is translated relative to the viewport. */
    CircleTranslateAnchorEnum["Viewport"] = "viewport";
})(CircleTranslateAnchorEnum || (CircleTranslateAnchorEnum = {}));
var CirclePitchScaleEnum;
(function (CirclePitchScaleEnum) {
    /** Circles are scaled according to their apparent distance to the camera. */
    CirclePitchScaleEnum["Map"] = "map";
    /** Circles are not scaled. */
    CirclePitchScaleEnum["Viewport"] = "viewport";
})(CirclePitchScaleEnum || (CirclePitchScaleEnum = {}));
var CirclePitchAlignmentEnum;
(function (CirclePitchAlignmentEnum) {
    /** The circle is aligned to the plane of the map. */
    CirclePitchAlignmentEnum["Map"] = "map";
    /** The circle is aligned to the plane of the viewport. */
    CirclePitchAlignmentEnum["Viewport"] = "viewport";
})(CirclePitchAlignmentEnum || (CirclePitchAlignmentEnum = {}));
var FillExtrusionTranslateAnchorEnum;
(function (FillExtrusionTranslateAnchorEnum) {
    /** The fill extrusion is translated relative to the map. */
    FillExtrusionTranslateAnchorEnum["Map"] = "map";
    /** The fill extrusion is translated relative to the viewport. */
    FillExtrusionTranslateAnchorEnum["Viewport"] = "viewport";
})(FillExtrusionTranslateAnchorEnum || (FillExtrusionTranslateAnchorEnum = {}));
var RasterResamplingEnum;
(function (RasterResamplingEnum) {
    /** (Bi)linear filtering interpolates pixel values using the weighted average of the four closest original source pixels creating a smooth but blurry look when overscaled */
    RasterResamplingEnum["Linear"] = "linear";
    /** Nearest neighbor filtering interpolates pixel values using the nearest original source pixel creating a sharp but pixelated look when overscaled */
    RasterResamplingEnum["Nearest"] = "nearest";
})(RasterResamplingEnum || (RasterResamplingEnum = {}));
var HillshadeIlluminationAnchorEnum;
(function (HillshadeIlluminationAnchorEnum) {
    /** The hillshade illumination is relative to the north direction. */
    HillshadeIlluminationAnchorEnum["Map"] = "map";
    /** The hillshade illumination is relative to the top of the viewport. */
    HillshadeIlluminationAnchorEnum["Viewport"] = "viewport";
})(HillshadeIlluminationAnchorEnum || (HillshadeIlluminationAnchorEnum = {}));
var SkyTypeEnum;
(function (SkyTypeEnum) {
    /** Renders the sky with a gradient that can be configured with `sky-gradient-radius` and `sky-gradient`. */
    SkyTypeEnum["Gradient"] = "gradient";
    /** Renders the sky with a simulated atmospheric scattering algorithm, the sun direction can be attached to the light position or explicitly set through `sky-atmosphere-sun`. */
    SkyTypeEnum["Atmosphere"] = "atmosphere";
})(SkyTypeEnum || (SkyTypeEnum = {}));
var AnchorEnum;
(function (AnchorEnum) {
    /** The position of the light source is aligned to the rotation of the map. */
    AnchorEnum["Map"] = "map";
    /** The position of the light source is aligned to the rotation of the viewport. */
    AnchorEnum["Viewport"] = "viewport";
})(AnchorEnum || (AnchorEnum = {}));
export {};
