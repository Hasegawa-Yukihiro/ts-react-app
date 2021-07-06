import { useCallback, useMemo } from "react";

//  hooks
import { useHistory } from "react-router-dom";

export const useSignInForm = () => {
  //  hooks
  const history = useHistory();

  /** submitハンドラ */
  const handleSubmitButtonClick = useCallback(() => {
    history.push("/");
  }, []);

  const handler = useMemo(
    () => ({
      handleSubmitButtonClick
    }),
    [handleSubmitButtonClick]
  );

  return {
    handler
  };
};
