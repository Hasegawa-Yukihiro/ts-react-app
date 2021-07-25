import * as React from "react";

//  styles
import {
  StyledTypography,
  InputWrapper,
  Wrapper,
  ButtonWrapper,
  StyledButton
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

  return (
    <Wrapper>
      <StyledTypography>テスト</StyledTypography>
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
    </Wrapper>
  );
};
