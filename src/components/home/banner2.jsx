import React from "react";
import { Box } from "../../atoms/box";
import { Container } from "../../atoms/container";
import { Typography } from "../../atoms/typography";
import { Grid } from "../../atoms/grid";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Card, CardContent } from "../../atoms/card";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0, 0, 10),
    },
  },
  card: {
    position: "relative",
    boxShadow: "none !Important",
    padding: theme.spacing(1),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "0px !important",
    "&:hover": {
      filter: "brightness(90%)",
      transform: "scale(0.96) !important",
      transition: "all 0.60s ease",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(10, 0),
      "&:hover": {
        filter: "brightness(100%)",
        transform: "scale(1) !important",
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(0),
      },
    },
    "& h4": {
      fontFamily: "PoppinsBold",
      textTransform: "uppercase",
      fontWeight: "bolder",
    },
  },
  cardActions: {
    "& p": {
      textTransform: "uppercase",
      fontFamily: "PoppinsBold",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  const bannerDetails = useSelector((state) => state.banner);

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {bannerDetails.slice(3, 5).map(({ id, image, title, subTitle }) => {
          return (
            <Grid item md={6} xs={12} key={id}>
              <Card
                sx={{ backgroundImage: `url(${image})` }}
                className={classes.card}
              >
                <CardContent>
                  <Typography pb="0.50rem" variant="body1">
                    {subTitle}
                  </Typography>
                  <Typography pb="4rem" variant="h4">
                    {title}
                  </Typography>
                  <Box className={classes.cardActions}>
                    <Typography variant="body1" component="p">
                      Shop Now
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Banner;