import React from "react";
import { Box } from "../../atoms/box";
import { Typography } from "../../atoms/typography";
import { Container } from "../../atoms/container";
import { Grid } from "../../atoms/grid";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { TextField } from "../../atoms/text-field";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "../../atoms/divider";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../../atoms/accordion";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "../../atoms/button";
import { selectPayment } from "../feautures/accordion_slice";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0, 0),
    color: theme.palette.text.main,
  },
  breadCrumb: {
    textAlign: "center",
    "& a": {
      color: theme.palette.text.main,
      textDecoration: "none",
    },
  },
  billingContainer: {
    padding: theme.spacing(10, 0, 6),
    "& h6": {
      fontFamily: "PoppinsMedium",
    },
  },
  checkoutContainer: {
    padding: theme.spacing(2, 0),
  },
  accordion: {
    boxShadow: "none !Important",
    border: "1px solid gray",
    margin: theme.spacing(0, 0, 1.5),
    fontSize: "0.95rem",
  },
}));

const Checkout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartProducts = useSelector((state) => state.cart.products);
  const selectedProductIds = useSelector((state) => state.cart.selectedProduct);
  const selectedProducts = cartProducts.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const options = useSelector((state) => state.accordion.options);

  const selectedPaymentId = useSelector(
    (state) => state.accordion.selectedPayment
  );

  const handleCheckbox = (option) => {
    dispatch(selectPayment(option));
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.breadCrumb}>
          <Typography variant="h4">Checkout</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="0.30rem"
            pt="1rem"
          >
            <NavLink variant="body2" to="/">
              <Typography>Home</Typography>
            </NavLink>
            <KeyboardArrowRightIcon />
            <Typography variant="body2">Checkout</Typography>
          </Box>
        </Box>

        <Box className={classes.billingContainer}>
          <Grid container spacing={8}>
            <Grid item md={6} xs={12}>
              <Typography variant="h6">Billing details</Typography>
              <Box pt="1.50rem">
                <Box display="flex" alignItems="center" gap="1rem">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    value="First Name"
                    style={{ padding: "0rem 0rem 1.50rem" }}
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    value="Last Name"
                    style={{ padding: "0rem 0rem 1.50rem" }}
                    fullWidth
                  />
                </Box>
                <TextField
                  style={{ padding: "0rem 0rem 1.50rem" }}
                  id="outlined-basic"
                  label="Company name"
                  variant="outlined"
                  value="Company name"
                  fullWidth
                />
                <TextField
                  style={{ padding: "0rem 0rem 1.50rem" }}
                  id="outlined-basic"
                  label="Street address"
                  variant="outlined"
                  value="Street address"
                  required
                  fullWidth
                />
                <TextField
                  style={{ padding: "0rem 0rem 1.50rem" }}
                  id="outlined-basic"
                  label="Town / City"
                  variant="outlined"
                  value="Town / City"
                  required
                  fullWidth
                />
                <TextField
                  style={{ padding: "0rem 0rem 1.50rem" }}
                  id="outlined-basic"
                  label="ZIP Code"
                  variant="outlined"
                  value="ZIP Code"
                  fullWidth
                />
                <Box display="flex" alignItems="center" gap="1rem">
                  <TextField
                    style={{ padding: "0rem 0rem 1.50rem" }}
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    value="Phone"
                    required
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    value="Email address"
                    style={{ padding: "0rem 0rem 1.50rem" }}
                    required
                    fullWidth
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Typography variant="h6">Order summary</Typography>
              <Box className={classes.checkoutContainer}>
                <Divider />
                {selectedProducts.length > 0 ? (
                  selectedProducts.map(
                    ({ id, image, name, quantity, price }) => (
                      <Box key={id} my="1rem">
                        <NavLink
                          to={`/core-essentials/${id}`}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <Box
                              display="flex"
                              alignItems="center"
                              gap="0.80rem"
                            >
                              <img src={image} alt={image} width={70} />
                              <Typography fontWeight="bold" variant="body1">
                                {name}
                              </Typography>
                              <Box
                                display="flex"
                                alignItems="center"
                                gap="0.15rem"
                              >
                                <CloseOutlinedIcon sx={{ fontSize: "1rem" }} />
                                <Typography variant="body1">
                                  {quantity}
                                </Typography>
                              </Box>
                            </Box>
                            <Typography variant="body1">${price}.00</Typography>
                          </Box>
                        </NavLink>
                      </Box>
                    )
                  )
                ) : (
                  <Box className={classes.emptyCartMessage}>
                    <Typography variant="h5" fontWeight="bolder" py="1rem">
                      No selected products
                    </Typography>
                  </Box>
                )}
                <Divider />
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  py="1.50rem"
                >
                  <Typography>Total</Typography>
                  <Typography variant="body1">${totalPrice}.00</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">Payment information</Typography>
                  <Box py="1.20rem">
                    {options?.map(({ id, title, description }) => {
                      return (
                        <Accordion
                          key={id}
                          className={classes.accordion}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                            <Checkbox
                              onChange={() => handleCheckbox(id)}
                              {...label}
                              sx={{ color: "black", padding: "0px 0.50rem" }}
                              checked={id === selectedPaymentId}
                            />
                            {title}
                          </AccordionSummary>
                          <AccordionDetails sx={{ fontSize: "0.85rem" }}>
                            {description}
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </Box>
                  <Divider />
                  <Box py="1rem">
                    <Typography variant="body2" pb="1.30rem">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </Typography>
                    <Button variant="secondary">Place Order</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Checkout;
