import * as React from "react";

//  styles
import { Wrapper } from "./styles";

//  component
import { SignUpForm } from "~views/Components/Organisms/SignUpForm";

// types
import { SignUpTemplateProps } from "./types";

export const SignUpTemplate: React.FC<SignUpTemplateProps> = props => {
  return (
    <Wrapper>
      <SignUpForm {...props} />
    </Wrapper>
  );
};
