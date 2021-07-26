import { useCallback, useMemo } from "react";

//  hooks
import { useHistory } from "react-router-dom";

export const useSignUpForm = () => {
  //  hooks
  const history = useHistory();

  /** サインインへ画面遷移ハンドラ */
  const handleSignInChangeButtonClick = useCallback(() => {
    history.push("/signIn");
  }, []);

  const handler = useMemo(
    () => ({
      handleSignInChangeButtonClick
    }),
    [handleSignInChangeButtonClick]
  );

  return {
    handler
  };
};
