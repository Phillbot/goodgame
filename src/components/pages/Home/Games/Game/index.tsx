import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getGameDataFetch } from "../../service";
import { MainCenteredLoader } from "../../../../Shared/Loaders";
import { MainCenteredError } from "../../../../Shared/Errors";
import { Helmet } from "react-helmet";
import { Grid, Typography, Grow } from "@material-ui/core";
import { useStyles } from "../../styles";

export const Game = (props: any) => {
  const classes = useStyles();

  const routerParams = useParams<any>();

  const [res, getRes] = useState<any>({
    isLoaded: false,
    error: false,
    gameData: {
      poster: "",
      title: "",
    },
  });

  const {
    isLoaded,
    error,
    gameData: { poster, title },
  } = res;

  useEffect(() => {
    let isSubscribed = true;

    getGameDataFetch(routerParams.game).then((res: any) => {
      const { error, result } = res;
      if (isSubscribed) {
        getRes({
          isLoaded: true,
          error,
          gameData: result,
        });
      }
    });

    return () => {
      isSubscribed = false;
    };
  }, [routerParams.game]);

  if (!isLoaded) {
    return <MainCenteredLoader />;
  } else {
    if (error) {
      return <MainCenteredError />;
    } else {
      return (
        <>
          <Grid container>
            <Helmet>
              <title>GoodGame | Игра {title}</title>
            </Helmet>
            <Grow in={isLoaded} timeout={1200}>
              <Grid
                container
                alignContent="center"
                justify="center"
                alignItems="center"
                className={classes.noFullHeight}
              >
                <Grid item md={4} xs={1}></Grid>
                <Grid item md={4} xs={10}>
                  <Typography
                    variant="h5"
                    className={classes.streamDesriptionContainer}
                    align="center"
                  >
                    {title}
                  </Typography>
                  <div
                    className={classes.gamePosterImgContainer}
                    style={{
                      background: `url(${poster})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </Grid>
                <Grid item md={4} xs={1}></Grid>
              </Grid>
            </Grow>
          </Grid>
        </>
      );
    }
  }
};
