import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useStyles } from "../styles";
import { getAllGamesFetch } from "../service";
import { Link } from "react-router-dom";
import { Grid, Button, Typography, Grow } from "@material-ui/core";

import {
  MainCenteredLoader,
  SimpleCenteredLoader,
} from "../../../Shared/Loaders";
import { SimpleNoDataCentered } from "../../../Shared/NoData";
import { MainCenteredError } from "../../../Shared/Errors";

export const Games = React.memo((props: any) => {
  const classes = useStyles();

  const [res, getRes] = useState<any>({
    isLoaded: false,
    error: false,
    page_count: 0,
  });

  const [gameList, setGameList] = useState<any>([]);
  const [newLoaded, setNewLoaded] = useState<any>([]);

  const [page, setPage] = useState<number>(1);

  const { isLoaded, error, page_count } = res;

  useEffect(() => {
    let isSubscribed = true;
    setNewLoaded(false);
    getAllGamesFetch(page).then((res: any) => {
      const { result, error, page_count } = res;
      if (isSubscribed) {
        getRes({
          isLoaded: true,
          newLoaded: true,
          page_count,
          error,
        });

        setGameList((prev: any) => [...prev, result]);
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
      return <MainCenteredError />;
    } else {
      return (
        <>
          <Grid container spacing={2}>
            <Helmet>
              <title>GoodGame | Игры</title>
            </Helmet>

            {gameList.length > 0 ? (
              gameList.flat().map((game: any) => {
                const { id, poster, title, url } = game;

                return (
                  <Grow key={id} in={isLoaded} timeout={1200}>
                    <Grid item lg={2} sm={4} xs={6}>
                      <Link to={`/games/${url}`} className={classes.link}>
                        <div
                          className={classes.gamePrev}
                          style={{
                            background: `url(${poster})`,
                            backgroundSize: "100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <Typography align="center" noWrap={true}>
                          {title}
                        </Typography>
                      </Link>
                    </Grid>
                  </Grow>
                );
              })
            ) : (
              <SimpleNoDataCentered />
            )}
          </Grid>

          {!newLoaded && gameList.length > 0 && <SimpleCenteredLoader />}

          {page_count !== page && newLoaded && (
            <Button
              color="primary"
              variant="contained"
              className={classes.showMoreButton}
              onClick={addPage}
            >
              Показать еще
            </Button>
          )}
        </>
      );
    }
  }
});
