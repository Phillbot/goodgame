import React from "react";
import { Typography, Grid } from "@material-ui/core";

import { useStyles } from "./styles";

export const SimpleNoDataCentered = () => {
  const classes = useStyles();

  return (
    <Grid container alignContent="center" className={classes.simpleNoData}>
      <Grid item xs={12}>
        <Typography align="center">
          NODATA
        </Typography>
      </Grid>
    </Grid>
  );
};
