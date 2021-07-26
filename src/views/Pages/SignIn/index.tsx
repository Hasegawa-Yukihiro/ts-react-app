import * as React from "react";

//  hooks
import { useSignIn } from "./hooks";

//  component
import { SignInTemplate } from "~views/Components/Templates/SignInTemplate";

const SignIn: React.FC = () => {
  // hooks
  const { state, handler } = useSignIn();

  return (
    <SignInTemplate
      email={state.email}
      password={state.password}
      onEmailChange={handler.handleEmailChange}
      onPasswordChange={handler.handlePasswordChange}
      onSubmitButtonClick={handler.handleSubmitButtonClick}
    />
  );
};

export default SignIn;
