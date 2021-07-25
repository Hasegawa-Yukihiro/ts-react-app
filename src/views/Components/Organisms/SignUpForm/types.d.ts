export interface SignUpFormProps {
  email?: string;
  password?: string;
  lastName?: string;
  firstName?: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onLastNameChange: (lastName: string) => void;
  onFirstNameChange: (firstName: string) => void;
  onSubmitButtonClick: () => void;
}
