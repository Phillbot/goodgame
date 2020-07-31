import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

import errorImg from "../../img/error.gif";

export const MainCenteredError = () => {
  const classes = useStyles();

  return (
    <Grid container alignContent="center" className={classes.mainLoader}>
      <Grid item xs={12}>
        <Typography variant="h5" color="secondary">
          Произошла ошибка
        </Typography>
        <img src={errorImg} alt="" />
      </Grid>
    </Grid>
  );
};
