import React from "react";
import { Container } from "../../atoms/container";
import { Box } from "../../atoms/box";
import { Typography } from "../../atoms/typography";
import { makeStyles } from "@mui/styles";
import { Grid } from "../../atoms/grid";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css";

const useStyles = makeStyles((theme) => ({
  swiper: {
    color: theme.palette.text.secondary,
    width: "100%",
    height: "100%",
  },
  swiperImage: {
    padding: theme.spacing(18, 0),
    backgroundRepeat: "no-repeat",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(12, 0),
    },
    backgroundSize: "cover",
    "& h6": {
      textTransform: "uppercase",
      fontFamily: "PoppinsBold",
    },
    "& h1": {
      textTransform: "uppercase",
      fontFamily: "PoppinsBold",
      padding: theme.spacing(2.5, 0),
      [theme.breakpoints.down("md")]: {
        fontSize: "3rem",
        padding: theme.spacing(2, 0),
      },
    },
    "& span": {
      fontFamily: "PoppinsMedium",
      padding: theme.spacing(0, 0, 5),
    },
    "& a": {
      color: theme.palette.text.secondary,
      textDecoration: "none",
      borderBottom: "1px solid",
      padding: theme.spacing(0, 0, 0.9),
      fontFamily: "PoppinsMedium",
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  const swiperDetails = useSelector((state) => state.hero);

  return (
    <Box>
      <Swiper
        pagination={{ clickable: true }}
        className={classes.swiper}
        autoplay={{ delay: 7000 }}
        modules={[Autoplay]}
      >
        {swiperDetails?.map(({ id, image, subTitle, titlle, description }) => {
          return (
            <SwiperSlide key={id} className={classes.swiper}>
              <Box
                sx={{ backgroundImage: `url(${image})` }}
                className={classes.swiperImage}
              >
                <Container>
                  <Grid container>
                    <Grid item md={5} xs={12} sm={6}>
                      <Typography variant="h6">{subTitle}</Typography>
                      <Typography variant="h1">{titlle}</Typography>
                      <Typography variant="body1" component="span">
                        {description}
                      </Typography>
                      <Typography variant="body1" pt="1.50rem">
                        <NavLink to="/shop">Shop Now</NavLink>
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Hero;