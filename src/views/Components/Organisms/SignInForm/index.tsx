import * as React from "react";

//  hooks
import { useSignInForm } from "./hooks";

//  styles
import { InputWrapper, Wrapper, ButtonWrapper, StyledButton } from "./styles";

//  atomic component
import { StyledOutlinedInput } from "~views/Components/Atoms/StyledOutlinedInput";

// types
import { SignInFormProps } from "./types";

export const SignInForm: React.FC<SignInFormProps> = props => {
  //  hooks
  const { handler } = useSignInForm();

  return (
    <Wrapper>
      <InputWrapper>
        <StyledOutlinedInput
          fullWidth
          placeholder={"メールアドレス"}
          name={"email"}
          value={props.emailValue}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledOutlinedInput
          fullWidth
          placeholder={"パスワード"}
          name={"text"}
          value={props.passwordValue}
        />
      </InputWrapper>
      <ButtonWrapper>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handler.handleSubmitButtonClick}
        >
          サインイン
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
