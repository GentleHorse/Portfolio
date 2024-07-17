function convertEnum(lut, input, defaultValue) {
    if (input == null) {
        return defaultValue;
    }
    const resolvedValue = lut[input];
    if (resolvedValue == null) {
        throw new Error(`unexpected value ${input}, expected ${Object.keys(lut).join(", ")}`);
    }
    return resolvedValue;
}
function convertPoint(input, defaultValue) {
    return input ?? defaultValue;
}
const POSITION_TYPE_LUT = {
    "static": 0,
    "relative": 1,
    "absolute": 2
};
const ALIGN_LUT = {
    "auto": 0,
    "flex-start": 1,
    "center": 2,
    "flex-end": 3,
    "stretch": 4,
    "baseline": 5,
    "space-between": 6,
    "space-around": 7,
    "space-evenly": 8
};
const FLEX_DIRECTION_LUT = {
    "column": 0,
    "column-reverse": 1,
    "row": 2,
    "row-reverse": 3
};
const WRAP_LUT = {
    "no-wrap": 0,
    "wrap": 1,
    "wrap-reverse": 2
};
const JUSTIFY_LUT = {
    "flex-start": 0,
    "center": 1,
    "flex-end": 2,
    "space-between": 3,
    "space-around": 4,
    "space-evenly": 5
};
const OVERFLOW_LUT = {
    "visible": 0,
    "hidden": 1,
    "scroll": 2
};
const DISPLAY_LUT = {
    "flex": 0,
    "none": 1
};
export const setter = { positionType: (node, input) => node.setPositionType(convertEnum(POSITION_TYPE_LUT, input, 1)),
    positionTop: (node, input) => node.setPosition(1, input ?? NaN),
    positionLeft: (node, input) => node.setPosition(0, input ?? NaN),
    positionRight: (node, input) => node.setPosition(2, input ?? NaN),
    positionBottom: (node, input) => node.setPosition(3, input ?? NaN),
    alignContent: (node, input) => node.setAlignContent(convertEnum(ALIGN_LUT, input, 4)),
    alignItems: (node, input) => node.setAlignItems(convertEnum(ALIGN_LUT, input, 4)),
    alignSelf: (node, input) => node.setAlignSelf(convertEnum(ALIGN_LUT, input, 0)),
    flexDirection: (node, input) => node.setFlexDirection(convertEnum(FLEX_DIRECTION_LUT, input, 2)),
    flexWrap: (node, input) => node.setFlexWrap(convertEnum(WRAP_LUT, input, 0)),
    justifyContent: (node, input) => node.setJustifyContent(convertEnum(JUSTIFY_LUT, input, 0)),
    marginTop: (node, input) => node.setMargin(1, input ?? NaN),
    marginLeft: (node, input) => node.setMargin(0, input ?? NaN),
    marginRight: (node, input) => node.setMargin(2, input ?? NaN),
    marginBottom: (node, input) => node.setMargin(3, input ?? NaN),
    flexBasis: (node, input) => node.setFlexBasis(input ?? NaN),
    flexGrow: (node, input) => node.setFlexGrow(input ?? 0),
    flexShrink: (node, input) => node.setFlexShrink(input ?? 1),
    width: (node, input) => node.setWidth(input ?? NaN),
    height: (node, input) => node.setHeight(input ?? NaN),
    minWidth: (node, input) => node.setMinWidth(input ?? NaN),
    minHeight: (node, input) => node.setMinHeight(input ?? NaN),
    maxWidth: (node, input) => node.setMaxWidth(input ?? NaN),
    maxHeight: (node, input) => node.setMaxHeight(input ?? NaN),
    aspectRatio: (node, input) => node.setAspectRatio(input ?? NaN),
    borderTopWidth: (node, input) => node.setBorder(1, input ?? NaN),
    borderLeftWidth: (node, input) => node.setBorder(0, input ?? NaN),
    borderRightWidth: (node, input) => node.setBorder(2, input ?? NaN),
    borderBottomWidth: (node, input) => node.setBorder(3, input ?? NaN),
    overflow: (node, input) => node.setOverflow(convertEnum(OVERFLOW_LUT, input, 0)),
    display: (node, input) => node.setDisplay(convertEnum(DISPLAY_LUT, input, 0)),
    paddingTop: (node, input) => node.setPadding(1, input ?? NaN),
    paddingLeft: (node, input) => node.setPadding(0, input ?? NaN),
    paddingRight: (node, input) => node.setPadding(2, input ?? NaN),
    paddingBottom: (node, input) => node.setPadding(3, input ?? NaN),
    gapRow: (node, input) => node.setGap(1, input ?? NaN),
    gapColumn: (node, input) => node.setGap(0, input ?? NaN) };
