import { FontSize, Key } from "./types";

export default class CreateFontSize {
  values: FontSize = {
    xs: 10.5,
    sm: 13,
    basic: 16,
    md: 20,
    lg: 24,
    xl: 32,
    xxl: 40,
    icon: 30
  };

  unit = "px";

  keys: Key[] = ["xs", "sm", "md", "lg", "xl", "icon"];

  fontSize(key?: Key) {
    if (key) {
      return typeof this.values[key] === "number"
        ? `${this.values[key]}${this.unit}`
        : this.values[key];
    }
    return typeof this.values.basic === "number"
      ? `${this.values.basic}${this.unit}`
      : this.values.basic;
  }
}
