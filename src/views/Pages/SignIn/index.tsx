import * as React from "react";

//  styles
import { Wrapper } from "./styles";

//  atomic component
import { StyledOutlinedInput } from "~views/Components/Atoms/StyledOutlinedInput";

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <StyledOutlinedInput placeholder={"メールアドレス"} />
    </Wrapper>
  );
};

export default SignIn;
