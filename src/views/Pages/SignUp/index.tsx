import * as React from "react";

//  hooks
import { useSignUp } from "./hooks";

//  component
import { SignUpTemplate } from "~views/Components/Templates/SignUpTemplate";

const SignUp: React.FC = () => {
  // hooks
  const { state, handler } = useSignUp();

  return (
    <SignUpTemplate
      email={state.email}
      password={state.password}
      lastName={state.lastName}
      firstName={state.firstName}
      onEmailChange={handler.handleEmailChange}
      onPasswordChange={handler.handlePasswordChange}
      onLastNameChange={handler.handleLastNameChange}
      onFirstNameChange={handler.handleFirstNameChange}
      onSubmitButtonClick={handler.handleSubmitButtonClick}
    />
  );
};

export default SignUp;
