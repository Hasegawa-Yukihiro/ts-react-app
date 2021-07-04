import * as React from "react";
import styled from "styled-components";

//  theme
import {
  withStyles,
  Button,
  ButtonProps,
  createStyles
} from "@material-ui/core";

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

export const ButtonWrapper = styled.div(({ theme }) => {
  return {
    marginTop: theme.spacing(4),
    textAlign: "center"
  };
});

export const StyledButton = withStyles(theme =>
  createStyles({
    root: {
      height: "50px",
      borderRadius: "25px",
      padding: theme.spacing(0, 3)
    }
  })
)((props: ButtonProps) => <Button {...props} />);
