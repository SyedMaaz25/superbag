import React from "react";
import { Box } from "../../atoms/box";
import { Typography } from "../../atoms/typography";
import { Button } from "../../atoms/button";
import { Container } from "../../atoms/container";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Slider } from "@mui/material";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  incrementQuantity,
  deleteProduct,
  decrementQuantity,
  selectedCartProduct,
} from "../feautures/cart_slice";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  emptyCartMessage: {
    textAlign: "center",
  },
  checkOut: {
    background: "#f1f1f1",
    padding: theme.spacing(3, 0),
  },
}));

const Cart = () => {
  const classes = useStyles();
  const cartProducts = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const selectedProduct = useSelector((state) => state.cart.selectedProduct);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  const handleSelectedProduct = (id) => {
    dispatch(selectedCartProduct({ id }));
  };

  return (
    <Box>
      <Container className={classes.root}>
        <Typography variant="h6" fontWeight="bolder">
          Shopping Cart ({cartProducts.length})
        </Typography>
        <Typography variant="body1" py="1rem">
          Congrats! You are eligible for FREE Shipping
        </Typography>
        <Slider
          disabled
          defaultValue={100}
          aria-label="slider"
          style={{ color: "maroon" }}
        />
        {cartProducts.length > 0 ? (
          cartProducts?.map(({ id, image, name, price, quantity }) => (
            <Box
              pt="1.20rem"
              display="flex"
              alignItems="center"
              gap="1rem"
              key={id}
            >
              <Box>
                <Box>
                  <DeleteOutlineOutlinedIcon
                    sx={{ fontSize: "1.70rem", padding: 0 }}
                    onClick={() => handleDelete(id)}
                  />
                </Box>
                <Box>
                  <Checkbox
                    {...label}
                    sx={{ color: "black", padding: 0 }}
                    onClick={() => handleSelectedProduct(id)}
                    checked={selectedProduct.includes(id)}
                  />
                </Box>
              </Box>
              <img src={image} alt={image} width={130} />
              <Box>
                <Typography>{name}</Typography>
                <Typography>${price}.00</Typography>
                <NavLink
                  to={`/core-essentials/${id}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Typography
                    variant="body2"
                    fontWeight="bolder"
                    onClick={() => dispatch(reset())}
                  >
                    View Product
                  </Typography>
                </NavLink>
                <Box
                  display="flex"
                  alignItems="center"
                  gap="1rem"
                  py="0.50rem"
                  mt="0.50rem"
                  justifyContent="center"
                  backgroundColor="#f1f1f1"
                  borderRadius="8px"
                >
                  <RemoveIcon onClick={() => handleDecrement(id)} />
                  <Typography>{quantity}</Typography>
                  <AddIcon onClick={() => handleIncrement(id)} />
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Box className={classes.emptyCartMessage}>
            <Typography variant="h6" fontWeight="bolder">
              Cart is empty
            </Typography>
          </Box>
        )}
      </Container>
      <Box className={classes.checkOut}>
        <Container>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            textAlign="center"
          >
            <Box>
              <EditNoteOutlinedIcon sx={{ fontSize: "1.70rem" }} />
              <Typography variant="body2">Note</Typography>
            </Box>
            <Box>
              <LocalShippingOutlinedIcon sx={{ fontSize: "1.70rem" }} />
              <Typography variant="body2">Shipping</Typography>
            </Box>
            <Box>
              <LocalActivityOutlinedIcon sx={{ fontSize: "1.70rem" }} />
              <Typography variant="body2">Coupon</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            py="1rem"
          ></Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1">Total</Typography>
            <Typography variant="body1" fontWeight="bolder">
              ${totalPrice}.00
            </Typography>
          </Box>
          <Box pt="1.30rem">
            <NavLink to="/checkout">
            <Button variant="secondary">Checkout</Button>
            </NavLink>
            <NavLink to="/cart">
            <Button variant="accent" sx={{marginTop:"1rem"}}>View Cart</Button>
            </NavLink>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Cart;