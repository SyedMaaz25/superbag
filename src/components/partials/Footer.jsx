import React from "react";
import { Box } from "../../atoms/box";
import { Typography } from "../../atoms/typography";
import { makeStyles } from "@mui/styles";
import { Grid } from "../../atoms/grid";
import { Container } from "../../atoms/container";
import logo from "../../assets/images/dark-logo.webp";
import { List, ListItem, ListItemText } from "../../atoms/list";
import { AppBar, Toolbar } from "@mui/material";
import { Divider } from "../../atoms/divider";
import ProductTrustBadge from "../../assets/images/product-trust-badge.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 3),
    background: "#e5e5e5",
  },
  appBar: {
    background: "#e5e5e5 !important",
    boxShadow: "none !important",
    color: `${theme.palette.text.main} !Important`,
  },
  gridCol2: {
    "& h1": {
      fontFamily: "PoppinsBold",
    },
  },
  list: {
    margin: `${theme.spacing(1.3, 0, 0)} !important`,
    "& li": {
      padding: theme.spacing(0.1, 0),
    },
    "& span": {
      fontFamily: "PoppinsMedium",
      color: theme.palette.text.accent,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={8}>
              <Grid item md={3} xs={12}>
                <img src={logo} alt={logo} width={180} />
                <List className={classes.list}>
                  <ListItem>
                    <ListItemText>
                      184 Main Rd E, St Albans VIC 3021, Australia
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>+391 (0)35 2568</ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={2.2} xs={6} className={classes.gridCol2}>
                <Typography variant="body1" component="h1">
                  COMPANY
                </Typography>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemText>About Us</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Contact</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Shipping & Return</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>FAQ</ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={2.2} xs={6} className={classes.gridCol2}>
                <Typography variant="body1" component="h1">
                  INFORMATION
                </Typography>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemText>My Account</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Login</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>My Cart</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Wishlist</ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={2.2}  xs={6} className={classes.gridCol2}>
                <Typography variant="body1" component="h1">
                  CONTACT
                </Typography>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemText>Customer Service</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Store Locator</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Wholesale</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Career</ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={2.2} xs={6} className={classes.gridCol2}>
                <Typography variant="body1" component="h1">
                  FOLLOW
                </Typography>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemText>Facebook</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Pinterest</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Instagram</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Twitter</ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Box pt="3rem">
          <Divider />
          <Grid container pt="2rem">
            <Grid item md={8} xs={12}>
              <Typography variant="body1">© MINIMOG 2024</Typography>
            </Grid>
            <Grid item md={4} xs={12}>
              <img src={ProductTrustBadge} alt={ProductTrustBadge} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;