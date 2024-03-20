import React from "react";
import { Container } from "../../atoms/container";
import { Box } from "../../atoms/box";
import { Card, CardContent, CardActions } from "../../atoms/card";
import { Typography } from "../../atoms/typography";
import { Button } from "../../atoms/button";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css";
import { NavLink, useParams } from "react-router-dom";
import { Hidden } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 5),
  },
  coreEssentialsContainer: {
    textAlign: "center",
    "& h4": {
      fontFamily: "PoppinsBold",
      color: theme.palette.text.main,
      textTransform: "uppercase",
    },
  },
  swiperSlide: {
    padding: theme.spacing(6, 0),
    "& a": {
      color: theme.palette.text.main,
      textDecoration: "none",
    },
  },
  card: {
    padding: theme.spacing(23, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(15, 10),
    },
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: "none !important",
    "&:hover button": {
      display: "block",
    },
  },
  cardActions: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    "& button": {
      display: "none",
    },
  },
  cardBody: {
    "& h6": {
      color: theme.palette.text.main,
      fontFamily: "PoppinsMedium",
      fontSize: "1.10rem",
    },
    "& h5": {
      color: theme.palette.text.main,
      fontFamily: "PoppinsMedium",
      padding: theme.spacing(1, 0),
      fontSize: "1.10rem",
    },
  },
  imageContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

const CoreEssentials = () => {
  const classes = useStyles();
  const coreEssentialsProducts = useSelector(
    (state) => state.products.CoreEssentials
  );

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.coreEssentialsContainer}>
          <Typography variant="h4">Core Essentials</Typography>
          <Swiper
            className={classes.swiper}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 7000 }}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 2 },
              600: { slidesPerView: 3 },
              960: { slidesPerView: 4 },
            }}
          >
            {coreEssentialsProducts
              ?.slice(0, 8)
              .map(({ id, image, hover, name, price }) => {
                return (
                  <SwiperSlide key={id} className={classes.swiperSlide}>
                    <NavLink to={`/core-essentials/${id}`}>
                      <Card
                        className={classes.card}
                        sx={{
                          backgroundImage: `url(${image})`,
                          transition: "all 0.2s ease-in",
                          ":hover": {
                            backgroundImage: `url(${hover})`,
                          },
                        }}
                      >
                        <CardContent className={classes.cardActions}>
                          <Button variant="primary">View Product</Button>
                        </CardContent>
                      </Card>
                      <Box>
                        <Box pt="1.50rem" className={classes.cardBody}>
                          <Typography
                            variant="h6"
                            component="h6"
                            fontWeight="bolder"
                          >
                            {name}
                          </Typography>
                          <Typography variant="h6" component="h5">
                            ${price}.00
                          </Typography>
                          <Hidden mdUp smUp>
                            <Button variant="secondary">View Product</Button>
                          </Hidden>
                        </Box>
                      </Box>
                    </NavLink>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default CoreEssentials;