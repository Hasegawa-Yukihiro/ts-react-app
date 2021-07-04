import * as React from "react";

import { StyledOutlined } from "./styles";

import { FormControl } from "@material-ui/core";
import { StyledOutlinedInputProps } from "./types";

/**
 * inputのコンポーネント
 * @param {boolean} fullWidth - trueの場合,コンテナの全幅を占める
 * @param {string} placeholder - ユーザーが値を入力する前に表示される短いヒント
 * @param {string} value - 入力値
 * @param {string} name - input要素の名前属性
 * @function changeValue 値が変更された時のハンドラ
 */
const StyledOutlinedInput: React.FC<StyledOutlinedInputProps> = props => {
  return (
    <FormControl variant={"outlined"} fullWidth={props.fullWidth}>
      <StyledOutlined
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={e => props.changeValue?.(e.target.value)}
      />
    </FormControl>
  );
};

export { StyledOutlinedInput };
