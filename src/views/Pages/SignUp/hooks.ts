import { useCallback, useMemo, useState } from "react";

//  hooks
import { useHistory } from "react-router-dom";

export const useSignUp = () => {
  //  hooks
  const history = useHistory();

  //  states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  /** emailの入力ハンドラ */
  const handleEmailChange = useCallback((email: string) => {
    setEmail(email);
  }, []);

  /** passwordの入力ハンドラ */
  const handlePasswordChange = useCallback((password: string) => {
    setPassword(password);
  }, []);

  /** lastNameの入力ハンドラ */
  const handleLastNameChange = useCallback((lastName: string) => {
    setLastName(lastName);
  }, []);

  /** firstNameの入力ハンドラ */
  const handleFirstNameChange = useCallback((firstName: string) => {
    setFirstName(firstName);
  }, []);

  /** submitハンドラ */
  const handleSubmitButtonClick = useCallback(() => {
    history.push("/");
  }, []);

  const state = useMemo(
    () => ({ email, password, lastName, firstName }),
    [email, password, lastName, firstName]
  );

  const handler = useMemo(
    () => ({
      handleEmailChange,
      handlePasswordChange,
      handleLastNameChange,
      handleFirstNameChange,
      handleSubmitButtonClick
    }),
    [
      handleEmailChange,
      handlePasswordChange,
      handleLastNameChange,
      handleFirstNameChange,
      handleSubmitButtonClick
    ]
  );

  return {
    state,
    handler
  };
};
