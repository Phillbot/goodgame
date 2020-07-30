import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";

export const MainCenteredError = () => {
  const classes = useStyles();

  return (
    <Grid container alignContent="center" className={classes.mainLoader}>
      <Grid item xs={12}>
        ERROR
      </Grid>
    </Grid>
  );
};
