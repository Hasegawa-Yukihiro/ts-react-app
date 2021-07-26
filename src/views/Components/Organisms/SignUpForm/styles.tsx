import * as React from "react";
import styled from "styled-components";

//  theme
import {
  withStyles,
  Button,
  ButtonProps,
  createStyles,
  Typography,
  TypographyProps,
  Link,
  LinkProps
} from "@material-ui/core";

const Wrapper = styled.div(({ theme }) => {
  return {
    width: "50%"
  };
});

const StyledTypography = withStyles(theme =>
  createStyles({
    root: {
      textAlign: "center",
      marginBottom: theme.spacing(5)
    }
  })
)((props: TypographyProps) => <Typography {...props} variant={"h3"} />);

const InputWrapper = styled.div(({ theme }) => {
  return {
    display: "flex",
    margin: theme.spacing(2, 0)
  };
});

const ButtonWrapper = styled.div(({ theme }) => {
  return {
    marginTop: theme.spacing(4),
    textAlign: "center"
  };
});

const StyledButton = withStyles(theme =>
  createStyles({
    root: {
      height: "50px",
      borderRadius: "25px",
      padding: theme.spacing(0, 3)
    }
  })
)((props: ButtonProps) => <Button {...props} />);

const StyledLink = withStyles(theme =>
  createStyles({
    root: {
      color: theme.colorPicker("blue"),
      cursor: "pointer"
    }
  })
)((props: LinkProps) => <Link {...props} />);

export {
  Wrapper,
  StyledTypography,
  InputWrapper,
  ButtonWrapper,
  StyledButton,
  StyledLink
};
