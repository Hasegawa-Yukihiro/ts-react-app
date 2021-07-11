import * as React from "react";

//  styles
import { StyledOutlined } from "./styles";

// theme lib
import { FormControl } from "@material-ui/core";

//  types
import { StyledOutlinedInputProps } from "./types";

/**
 * inputのコンポーネント（ベース）
 * @param {boolean} fullWidth - trueの場合,コンテナの全幅を占める
 * @param {string} placeholder - ユーザーが値を入力する前に表示される短いヒント
 * @param {string} value - 入力値
 * @param {string} name - input要素の名前属性
 * @function changeValue 値が変更された時のハンドラ
 */
const StyledOutlinedInput: React.FC<StyledOutlinedInputProps> = props => {
  const { fullWidth, placeholder, value, name, changeValue } = props;

  return (
    <FormControl variant={"outlined"} fullWidth={fullWidth}>
      <StyledOutlined
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={e => changeValue?.(e.target.value)}
      />
    </FormControl>
  );
};

export { StyledOutlinedInput };
