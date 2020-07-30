import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

export const MainCenteredLoader = () => {
  const classes = useStyles();

  return (
    <Grid container alignContent="center" className={classes.mainLoader}>
      <Grid item xs={12}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export const SimpleCenteredLoader = () => {
  const classes = useStyles();

  return (
    <Grid container alignContent="center" className={classes.simpleLoader}>
      <Grid item xs={12}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};
