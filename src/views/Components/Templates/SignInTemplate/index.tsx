import * as React from "react";

//  styles
import { Wrapper } from "./styles";

//  atomic component
import { SignInForm } from "~views/Components/Organisms/SignInForm";

// types
import { SignInTemplateProps } from "./types";

export const SignInTemplate: React.FC<SignInTemplateProps> = props => {
  return (
    <Wrapper>
      <SignInForm />
    </Wrapper>
  );
};
