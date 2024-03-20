import React from "react";
import { Box } from "../../atoms/box";
import { Container } from "../../atoms/container";
import { Typography } from "../../atoms/typography";
import { Grid } from "../../atoms/grid";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Card, CardActions, CardContent } from "../../atoms/card";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0, 10),
    [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 0, 10),
    }
  },
  card: {
    position: "relative",
    boxShadow: "none !Important",
    padding: theme.spacing(22, 0),
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
    borderRadius: "0px !important",
    "&:hover": {
      transform: "scale(1.1) !important",
      filter: "brightness(80%)",
      transition: "all 0.60s ease",
      cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(18, 0),
      "&:hover": {
        filter: "brightness(100%)",
        transform: "scale(1) !important",
      },
    },
    "& h4": {
      color: theme.palette.text.secondary,
      fontFamily: "PoppinsBold",
      textTransform: "uppercase",
      fontWeight:"bolder",
    },
  },
  cardActions: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    "& p": {
      color: theme.palette.text.secondary,
      textAlign: "center",
      padding: theme.spacing(4, 0),
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
        {bannerDetails.slice(0,3).map(({ id, image, title }) => {
          return (
            <Grid item md={4} xs={12} key={id}>
              <Card
                sx={{ backgroundImage: `url(${image})` }}
                className={classes.card}
              >
                <CardContent>
                  <Typography variant="h4">{title}</Typography>
                </CardContent>
                <Box className={classes.cardActions}>
                  <Typography variant="body1" component="p">
                    Shop Now
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Banner;