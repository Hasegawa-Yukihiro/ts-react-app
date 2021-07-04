import styled from "styled-components";

export const Wrapper = styled.div(({ theme }) => {
  return {
    width: "70%"
  };
});
export const InputWrapper = styled.div(({ theme }) => {
  return {
    margin: theme.spacing(2, 0)
  };
});
