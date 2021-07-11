import * as React from "react";

//  styles
import { Wrapper } from "./styles";

//  atomic component

// types
import { HomeTemplateProps } from "./types";

export const HomeTemplate: React.FC<HomeTemplateProps> = props => {
  return (
    <Wrapper>
      <p>Home</p>
    </Wrapper>
  );
};
