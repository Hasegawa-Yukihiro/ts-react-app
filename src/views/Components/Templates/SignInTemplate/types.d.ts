export interface SignInTemplateProps {
  email?: string;
  password?: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmitButtonClick: () => void;
}
