import { useCallback, useMemo, useState } from "react";

//  hooks
import { useHistory } from "react-router-dom";

// domain
import { UserDomainService } from "~domain/User";

export const useSignUp = () => {
  //  domain
  const userDomainService = new UserDomainService();

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
  const handleSubmitButtonClick = useCallback(async () => {
    try {
      await userDomainService.signUp({
        email,
        password,
        lastName,
        firstName
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
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
