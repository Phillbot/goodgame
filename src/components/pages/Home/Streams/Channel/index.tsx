import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getChannelDataFetch } from "../../service";
import { MainCenteredLoader } from "../../../../Shared/Loaders";
import { MainCenteredError } from "../../../../Shared/Errors";
import { Helmet } from "react-helmet";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "../../styles";

import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

export const Channel = (props: any) => {
  const classes = useStyles();

  const routerParams = useParams<any>();

  const [res, getRes] = useState<any>({
    isLoaded: false,
    error: false,
    streamData: {
      channel: {
        embed: "",
        description: "",
        title: "",
        games: [],
        img: "",
      },
    },
  });

  const {
    isLoaded,
    error,
    streamData: {
      channel: { embed, description, title, games, img },
    },
  } = res;

  useEffect(() => {
    let isSubscribed = true;

    getChannelDataFetch(routerParams.channelKey).then((res: any) => {
      const { error, result } = res;
      if (isSubscribed) {
        getRes({
          isLoaded: true,
          error,
          streamData: result,
        });
      }
    });

    return () => {
      isSubscribed = false;
    };
  }, [routerParams.channelKey]);

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
              <title>GoodGame | Стрим {routerParams.channelKey}</title>
            </Helmet>
            <Grid container>
              <Grid item xs={1}>
                <div
                  className={classes.channelHeaderImgContainer}
                  style={{
                    background: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </Grid>
              <Grid item xs={11}>
                <Grid
                  item
                  xs={12}
                  className={classes.streamDesriptionContainer}
                >
                  <Typography variant="h5">{title}</Typography>
                  <Typography variant="subtitle2">
                    <Link
                      to={`/channel/${routerParams.channelKey}`}
                      target="_blank"
                    >
                      {routerParams.channelKey}
                    </Link>{" "}
                    играет в{" "}
                    <Link to={`/games/${games[0].url}`} target="_blank">
                      {games[0].title}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.streamPlayerContainer}>
              {ReactHtmlParser(embed)}
            </Grid>

            <Grid item xs={12} className={classes.streamDesriptionContainer}>
              {ReactHtmlParser(description)}
            </Grid>
          </Grid>
        </>
      );
    }
  }
};
