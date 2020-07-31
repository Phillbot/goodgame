import React from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";

export const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.footer}>
      <Divider className={classes.divider} />

      <Grid
        container
        spacing={2}
        justify="space-around"
        className={classes.footerGrid}
      >
        <Grid item lg={4} xs={12}>
          <Typography variant="body1" align="justify">
            Это не основная версия приложения. Сайт создан благодаря доступному
            API и не претендует ни на какие права и не позиционирует себя как
            основной источник потребления контента{" "}
          </Typography>
        </Grid>

        <Grid item lg={8}></Grid>
        <Grid item lg={4} xs={12}>
          <Typography variant="body2">
            Источник и правообладатель{" "}
            <a
              href="https://goodgame.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkDecoration}
            >
              goodgame.ru
            </a>
          </Typography>
        </Grid>
        <Grid item lg={8}></Grid>
        <Grid item lg={8} xs={12}>
          <Typography variant="body2">
            {" "}
            Приложение создано с использованием{" "}
            <a
              href="http://api2.goodgame.ru/apigility/documentation/Goodgame-v2"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkDecoration}
            >
              Goodgame-v2 API
            </a>{" "}
          </Typography>
        </Grid>
        <Grid item lg={4} xs={12}>
          <a
            href="https://github.com/Phillbot/goodgame"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkIcon}
          >
            <GitHubIcon />
          </a>

          <a
            href="https://t.me/Phillb0t"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkIcon}
          >
            <TelegramIcon />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};
