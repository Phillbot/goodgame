import React, { useEffect, useState } from "react";
import { getAllStreamsFetch } from "../service";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { useStyles } from "../styles";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  MainCenteredLoader,
  SimpleCenteredLoader,
} from "../../../Shared/Loaders";
import { SimpleNoDataCentered } from "../../../Shared/NoData";

import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { MainCenteredError } from "../../../Shared/Errors";

export const Streams = React.memo((props: any) => {
  const classes = useStyles();

  const [res, getRes] = useState<any>({
    isLoaded: false,
    error: false,
    page_count: 0,
  });

  const [streamList, setStreamList] = useState<any>([]);
  const [newLoaded, setNewLoaded] = useState<any>([]);

  const [page, setPage] = useState<number>(1);

  const { isLoaded, error, page_count } = res;

  useEffect(() => {
    let isSubscribed = true;
    setNewLoaded(false);
    getAllStreamsFetch(page).then((res: any) => {
      const { result, error, page_count } = res;
      if (isSubscribed) {
        getRes({
          isLoaded: true,
          newLoaded: true,
          page_count,
          error,
        });

        setStreamList((prev: any) => [...prev, result]);
        setNewLoaded(true);
      }
    });

    return () => {
      isSubscribed = false;
    };
  }, [page]);

  const addPage = () => {
    setPage((page) => page + 1);
  };

  if (!isLoaded) {
    return <MainCenteredLoader />;
  } else {
    if (error) {
      return <MainCenteredError />
    } else {
      return (
        <>
          <Grid container spacing={2}>
            <Helmet>
              <title>GoodGame | Стримы</title>
            </Helmet>

            {streamList.length > 0 ? (
              streamList.flat().map((stream: any, i:number) => {
                const {
                  player_viewers,
                  key,
                  channel: { thumb, title, games },
                } = stream;

                const game = games[0].title;
                return (
                  <Grid item key={i} lg={4} sm={6} xs={12}>
                    <Link to={`/channel/${key}`} className={classes.link}>
                      <Box className={classes.userOnlineMainBox}>
                        <Box className={classes.userOnlineBox}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <PeopleAltIcon fontSize="small" />
                            </Grid>
                            <Grid item xs={6}>
                              {player_viewers}
                            </Grid>
                          </Grid>
                        </Box>

                        <img
                          src={thumb}
                          alt=""
                          className={classes.streamPrev}
                        />
                        <Typography noWrap={true} color="primary">
                          {key}
                        </Typography>
                        <Typography noWrap={true}>{title}</Typography>
                        <Typography variant="caption" paragraph noWrap={true}>
                          {game}
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                );
              })
            ) : (
              <SimpleNoDataCentered />
            )}
          </Grid>

          {!newLoaded && streamList.length > 0 && <SimpleCenteredLoader />}

          {page_count !== page && newLoaded && (
            <Button className={classes.showMoreButton} onClick={addPage}>
              Показать еще
            </Button>
          )}
        </>
      );
    }
  }
});
