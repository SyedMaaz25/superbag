import React from "react";
import { Box } from "../atoms/box";
import { Typography } from "../atoms/typography";
import { Container } from "../atoms/container";
import { Grid } from "../atoms/grid";
import { Menu, MenuItem } from "../atoms/menu";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../atoms/accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import { Card, CardContent, CardActions } from "../atoms/card";
import { Button } from "../atoms/button";
import { Hidden } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
    "& a": {
      textDecoration: "none",
    },
  },
  breadCrumb: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.60rem",
  },
  productContainer: {
    padding: theme.spacing(6, 0, 0),
  },
  card: {
    padding: theme.spacing(18, 0),
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
    },
  },
  imageContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

const Shop = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.products.CoreEssentials);
  const [displayProducts, setDisplayProducts] = React.useState(
    products.slice(0, 7)
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortBy, setSortBy] = React.useState("");
  const [loadMore, setLoadMore] = React.useState("Load More");

  const showMoreProducts = () => {
    if (loadMore === "Load More") {
      const remainingProducts = products.slice(
        displayProducts.length,
        displayProducts.length + 4
      );
      setDisplayProducts((prevProducts) => [
        ...prevProducts,
        ...remainingProducts,
      ]);
    } else {
      setLoadMore(null);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (sortBy) => {
    if (sortBy === "default") {
      setSortBy("");
      setDisplayProducts(products.slice(0, 7));
      setLoadMore("Load More");
    } else {
      setSortBy(sortBy);
      let sortedProducts = [...products];
      if (sortBy === "lowToHigh") {
        sortedProducts.sort((a, b) => a.price - b.price);
        setLoadMore(null);
      } else if (sortBy === "highToLow") {
        sortedProducts.sort((a, b) => b.price - a.price);
        setLoadMore(null);
      }
      setDisplayProducts(sortedProducts.slice(0, 7));
    }
    setAnchorEl(null);
  };

  const handleColor = (color) => {
    const lowerCaseColor = color.toLowerCase();
    const matchedProducts = products.filter(
      (product) =>
        product.color && product.color.toLowerCase() === lowerCaseColor
    );

    if (sortBy === "lowToHigh") {
      matchedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      matchedProducts.sort((a, b) => b.price - a.price);
    }

    setLoadMore(null);
    setDisplayProducts(matchedProducts);
  };

  const getProductCount = (color) => {
    const lowerCaseColor = color.toLowerCase();
    const matchedProducts = products.filter(
      (product) =>
        product.color && product.color.toLowerCase() === lowerCaseColor
    );
    return matchedProducts.length;
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Box textAlign="center">
          <Typography variant="h4" pb="1rem">
            Shopi
          </Typography>
          <Box className={classes.breadCrumb}>
            <Typography variant="body2">Home </Typography>|
            <Typography variant="body2">Products</Typography>|
            <Typography variant="body2">Backpack</Typography>
          </Box>
        </Box>

        <Box className={classes.productContainer}>
          <Grid container spacing={4}>
            <Grid item md={2} xs={12}>
              <Typography variant="h5" pb="1rem">
                Filters
              </Typography>
              <Accordion sx={{ margin: "0 0 1.20rem" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  Colors
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    pb="0.50rem"
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleColor("black")}
                  >
                    Black ({getProductCount("black")})
                  </Typography>
                  <Typography
                    pb="0.50rem"
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleColor("brown")}
                  >
                    Brown ({getProductCount("brown")})
                  </Typography>

                  <Typography
                    pb="0.50rem"
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleColor("blue")}
                  >
                    Blue ({getProductCount("blue")})
                  </Typography>
                  <Typography
                    pb="0.50rem"
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleColor("gray")}
                  >
                    Gray ({getProductCount("gray")})
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ margin: "0 0 1.20rem" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  Categories
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Later</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ margin: "0 0 1.20rem" }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  Stock status
                </AccordionSummary>
                <AccordionDetails>
                  <Typography pb="0.50rem" sx={{ cursor: "pointer" }}>
                    In stock
                  </Typography>
                  <Typography pb="0.50rem" sx={{ cursor: "pointer" }}>
                    Out of stocks
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item md={10} xs={12}>
              <Box>
                <Grid container pb="1.50rem">
                  <Grid item md={10} xs={12}>
                    <Typography>
                      Showing {displayProducts.length} of {products.length}
                      results
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      fontWeight="bold"
                      onClick={handleMenuOpen}
                      style={{ cursor: "pointer" }}
                    >
                      {sortBy ? sortBy : "Default sorting"} ↓
                    </Typography>
                  </Grid>
                  <Menu
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={() => handleSort("default")}>
                      Default Sorting
                    </MenuItem>
                    <MenuItem onClick={() => handleSort("lowToHigh")}>
                      Price: low to high
                    </MenuItem>
                    <MenuItem onClick={() => handleSort("highToLow")}>
                      Price: high to low
                    </MenuItem>
                  </Menu>
                </Grid>
              </Box>
              <Grid container rowSpacing={6} columnSpacing={3} pt="1rem">
                {displayProducts.map(({ id, image, hover, name, price }) => {
                  return (
                    <Grid item key={id} md={3} xs={6}>
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
                              variant="body2"
                              component="h6"
                              pb="0.30rem"
                            >
                              {name}
                            </Typography>
                            <Typography variant="body1" component="h5">
                              ${price}.00
                            </Typography>
                          </Box>
                        </Box>
                      </NavLink>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          {displayProducts.length < products.length ? (
            <Typography
              textAlign="center"
              pt="3rem"
              variant="body1"
              fontWeight="bolder"
              onClick={showMoreProducts}
              style={{ cursor: "pointer" }}
            >
              {loadMore === "Load More"
                ? "Load More"
                : `Product length is (${displayProducts.length})`}
            </Typography>
          ) : (
            <Typography
              textAlign="center"
              pt="3rem"
              variant="body1"
              fontWeight="bolder"
            >
              You have ended the reached
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Shop;