import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "../../atoms/box";
import { Typography } from "../../atoms/typography";
import { Button } from "../../atoms/button";
import { Container } from "../../atoms/container";
import { Grid } from "../../atoms/grid";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import { Divider } from "../../atoms/divider";
import productTrustBadge from "../../assets/images/product-trust-badge.webp";
import { Drawer } from "../../atoms/drawer";
import Cart from "./cart";
import { addToCart, increaseSingleQuantity } from "../feautures/cart_slice";
import SingleCoreRelated from "./single-core-related";
import ProductDetails from "./product-details"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
    color: theme.palette.text.main,
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 0),
    },
  },
  singleProductContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  relatedImagesContainer: {
    display: "flex",
    gap: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  relatedImage: {
    cursor: "pointer",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      order: 1,
      gap: "0.50rem",
    },
  },
  showImage: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  singleProductContent: {
    "& h5": {
      fontFamily: "PoppinsMedium",
      padding: theme.spacing(1.2, 0),
    },
    "& h4": {
      fontFamily: "PoppinsMedium",
      padding: theme.spacing(1.2, 0),
    },
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    padding: theme.spacing(1.2, 0),
    "& h6": {
      fontFamily: "PoppinsBold",
    },
  },
  quantityContainer: {
    padding: theme.spacing(1.2, 0),
    "& span": {
      fontFamily: "PoppinsBold",
    },
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(1.2, 0),
    background: "#f1f1f1",
    borderRadius: "8px",
  },
  bankCardsContainer: {
    background: "#f7f7f7",
    padding: theme.spacing(1),
    textAlign: "center",
  },
  cartContainer: {
    [theme.breakpoints.down("sm")]: {
      overflowX: "hidden",
    },
  },
}));

const SingleCoreEssentials = () => {
  const classes = useStyles();
  const { id } = useParams();
  const singleProductDetails = useSelector((state) =>
    state.products.CoreEssentials.find((product) => product.id === parseInt(id))
  );
  const { name, price, stock, viewing, relatedImages } = singleProductDetails;
  const quantity = useSelector((state) => state.cart.quantity);
  const [rightDrawer, setRightDrawer] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(); 
  const dispatch = useDispatch();

  if (!singleProductDetails) {
    return <h1>Product not found</h1>;
  }

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
  };

  const handleRightDrawer = (event) => {
    setRightDrawer(event.currentTarget);
  };

  const handleClose = () => {
    setRightDrawer(false);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(singleProductDetails));
  };

  const handleIncrement = () => {
    dispatch(increaseSingleQuantity());
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Box className={classes.relatedImagesContainer}>
              <Box className={classes.relatedImage}>
                {relatedImages?.map((image, index) => {
                  return (
                    <Box key={index}>
                      <img
                        src={image}
                        alt={image}
                        width="100%"
                        onClick={() => handleSelectedImage(image)}
                      />
                    </Box>
                  );
                })}
              </Box>
              <img
                src={selectedImage || relatedImages[0]}
                alt={selectedImage || relatedImages[0]}
                className={classes.showImage}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} className={classes.singleProductContent}>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h5" component="h4">
              ${price}.00
            </Typography>
            <Box className={classes.iconContainer}>
              <RemoveRedEyeOutlinedIcon />
              <Typography variant="body1" component="h6">
                {viewing}
              </Typography>
              <Typography variant="body2">
                people are viewing this right now
              </Typography>
            </Box>
            <Box className={classes.iconContainer}>
              <DoneAllOutlinedIcon />
              <Typography variant="body1" component="h6">
                {stock}
              </Typography>
              <Typography variant="body2">in stock</Typography>
            </Box>
            <Box className={classes.quantityContainer}>
              <Typography variant="body2" component="span">
                Quantity
              </Typography>
              <Grid container spacing={3} pt="1.20rem">
                <Grid item md={4} xs={12}>
                  <Box className={classes.quantity}>
                    <AddIcon onClick={handleIncrement} />
                    <Typography>{quantity}</Typography>
                    <RemoveIcon />
                  </Box>
                  <Typography
                    color="red"
                    variant="body2"
                    pt="1rem"
                    fontWeight="bolder"
                  ></Typography>
                </Grid>
                <Grid item md={8} xs={12}>
                  <Box>
                    <Button
                      variant="secondary"
                      onClick={(event) => {
                        handleRightDrawer(event);
                        handleAddToCart();
                      }}
                    >
                      Add to cart
                    </Button>
                    <Drawer
                      open={Boolean(rightDrawer)}
                      anchor="right"
                      close={handleClose}
                    >
                      <Box className={classes.cartContainer}>
                        <Cart />
                      </Box>
                    </Drawer>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Button variant="accent">Buy Now</Button>
            </Box>
            <Box pt="1.50rem">
              <Divider />
              <Box display="flex" gap="0.80rem" pt="1.50rem">
                <LocalShippingOutlinedIcon sx={{ color: "gray" }} />
                <Typography variant="body2" fontWeight="bold">
                  Estimated Delivery :
                </Typography>
                <Typography variant="body2">Feb 27 - 05 Mar, 2024</Typography>
              </Box>
              <Box display="flex" gap="0.80rem" py="1rem">
                <CheckBoxOutlineBlankOutlinedIcon sx={{ color: "gray" }} />
                <Typography variant="body2" fontWeight="bold">
                  Free Shipping & Returns :
                </Typography>
                <Typography variant="body2">
                  On all orders over $200.00
                </Typography>
              </Box>
              <Box>
                <Box className={classes.bankCardsContainer} pt="1rem">
                  <img src={productTrustBadge} alt={productTrustBadge} />
                  <Typography variant="body2" pt="0.80rem">
                    Guaranteed safe & secure checkout
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <ProductDetails/>
        <SingleCoreRelated />
      </Container>
    </Box>
  );
};

export default SingleCoreEssentials;