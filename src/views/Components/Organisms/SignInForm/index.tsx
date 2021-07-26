import * as React from "react";

//  hooks
import { useSignInForm } from "./hooks";

//  styles
import {
  StyledTypography,
  InputWrapper,
  Wrapper,
  ButtonWrapper,
  StyledButton,
  StyledLink
} from "./styles";

//  component
import { StyledOutlinedInput } from "~views/Components/Atoms/StyledOutlinedInput";

// types
import { SignInFormProps } from "./types";

export const SignInForm: React.FC<SignInFormProps> = props => {
  const {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmitButtonClick
  } = props;

  //  hooks
  const { handler } = useSignInForm();

  return (
    <Wrapper>
      <StyledTypography>Sign In</StyledTypography>
      <InputWrapper>
        <StyledOutlinedInput
          fullWidth
          placeholder={"メールアドレス"}
          name={"email"}
          value={email}
          changeValue={onEmailChange}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledOutlinedInput
          fullWidth
          placeholder={"パスワード"}
          name={"text"}
          value={password}
          changeValue={onPasswordChange}
        />
      </InputWrapper>
      <ButtonWrapper>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={onSubmitButtonClick}
        >
          サインイン
        </StyledButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledLink onClick={handler.handleSignUpChangeButtonClick}>
          アカウントの新規作成はこちら
        </StyledLink>
      </ButtonWrapper>
    </Wrapper>
  );
};
