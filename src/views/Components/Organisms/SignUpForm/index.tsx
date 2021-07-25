import * as React from "react";

//  hooks
import { useSignUpForm } from "./hooks";

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
import { SignUpFormProps } from "./types";

export const SignUpForm: React.FC<SignUpFormProps> = props => {
  const {
    email,
    password,
    lastName,
    firstName,
    onEmailChange,
    onPasswordChange,
    onLastNameChange,
    onFirstNameChange,
    onSubmitButtonClick
  } = props;

  const { handler } = useSignUpForm();

  return (
    <Wrapper>
      <StyledTypography>Sign Up</StyledTypography>
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
          name={"password"}
          value={password}
          changeValue={onPasswordChange}
        />
      </InputWrapper>
      <InputWrapper>
        <StyledOutlinedInput
          fullWidth
          placeholder={"姓"}
          name={"lastName"}
          value={lastName}
          changeValue={onLastNameChange}
        />
        <StyledOutlinedInput
          fullWidth
          placeholder={"名"}
          name={"firstName"}
          value={firstName}
          changeValue={onFirstNameChange}
        />
      </InputWrapper>
      <ButtonWrapper>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={onSubmitButtonClick}
        >
          アカウント作成
        </StyledButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <StyledLink onClick={handler.handleSignInChangeButtonClick}>
          サインインはこちら
        </StyledLink>
      </ButtonWrapper>
    </Wrapper>
  );
};
