export interface SignInFormProps {
  email?: string;
  password?: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmitButtonClick: () => void;
}
