import * as React from "react";

import {
  createStyles,
  withStyles,
  OutlinedInput,
  OutlinedInputProps
} from "@material-ui/core";

export const StyledOutlined = withStyles(theme =>
  createStyles({
    root: {
      display: "inline-block",
      backgroundColor: theme.colorPicker("white")
    }
  })
)((props: OutlinedInputProps) => <OutlinedInput {...props} />);
