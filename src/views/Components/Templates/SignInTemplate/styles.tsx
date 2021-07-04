import styled from "styled-components";

export const Wrapper = styled.div(({ theme }) => {
  return {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#EAECEF"
  };
});
