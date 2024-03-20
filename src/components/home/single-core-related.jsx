import React from "react";
import { makeStyles } from "@mui/styles";
import { NavLink, useParams } from "react-router-dom";
import { Box } from "../../atoms/box";
import { Typography } from "../../atoms/typography";
import { Button } from "../../atoms/button";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css";
import { Card, CardContent } from "../../atoms/card";
import { Hidden } from "@mui/material";

const useStyles = makeStyles((theme) => ({
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

const SingleCoreRelated = () => {
  const classes = useStyles();
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const relatedProducts = React.useMemo(() => {
    return products.CoreEssentials.filter((product) => product.id !== parseInt(id));
  }, [products.CoreEssentials, id]);

  return (
    <React.Fragment>
      <Box pt="2rem" textAlign="center">
        <Typography variant="h4">Related products</Typography>
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
          {relatedProducts?.map(({ id, image, hover, name, price }) => {
            return (
              <SwiperSlide key={id} className={classes.swiperSlide}>
                <NavLink
                  to={`/core-essentials/${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                      <Typography variant="h6" component="h6">
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
    </React.Fragment>
  );
};

export default SingleCoreRelated;