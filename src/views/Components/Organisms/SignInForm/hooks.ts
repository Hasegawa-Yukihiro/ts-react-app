import { useCallback, useMemo } from "react";

//  hooks
import { useHistory } from "react-router-dom";

export const useSignInForm = () => {
  //  hooks
  const history = useHistory();

  /** サインアップへ画面遷移ハンドラ */
  const handleSignUpChangeButtonClick = useCallback(() => {
    history.push("/signUp");
  }, []);

  const handler = useMemo(
    () => ({
      handleSignUpChangeButtonClick
    }),
    [handleSignUpChangeButtonClick]
  );

  return {
    handler
  };
};
