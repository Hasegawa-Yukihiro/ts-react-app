import { useCallback, useMemo, useState } from "react";

//  hooks
import { useHistory } from "react-router-dom";

export const useSignIn = () => {
  //  hooks
  const history = useHistory();

  //  states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /** emailの入力ハンドラ */
  const handleEmailChange = useCallback((email: string) => {
    setEmail(email);
  }, []);

  /** passwordの入力ハンドラ */
  const handlePasswordChange = useCallback((password: string) => {
    setPassword(password);
  }, []);

  /** submitハンドラ */
  const handleSubmitButtonClick = useCallback(() => {
    history.push("/");
  }, []);

  const state = useMemo(() => ({ email, password }), [email, password]);

  const handler = useMemo(
    () => ({
      handleEmailChange,
      handlePasswordChange,
      handleSubmitButtonClick
    }),
    [handleEmailChange, handlePasswordChange, handleSubmitButtonClick]
  );

  return {
    state,
    handler
  };
};
