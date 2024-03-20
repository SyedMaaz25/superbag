import React from "react";
import { Box } from "../../atoms/box";
import { Typography } from "../../atoms/typography";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar } from "@mui/material";
import { Grid } from "../../atoms/grid";
import { Container } from "../../atoms/container";
import { NavLink } from "react-router-dom";
import { Hidden } from "@mui/material";
import { Menu, MenuItem } from "../../atoms/menu";
import { useSelector } from "react-redux";
import enUs from "../../assets/images/en-us.webp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Drawer } from "../../atoms/drawer";
import { TextField } from "../../atoms/text-field";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "../../assets/images/logo.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Cart from "../home/cart";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  contactInfoContainer: {
    borderBottom: "1px solid lightgray",
    padding: theme.spacing(2, 0),
  },
  contactInfoGrid1: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
    "& a": {
      textDecoration: "none",
      color: theme.palette.text.accent,
      fontFamily: "PoppinsMedium",
      "&:hover": {
        borderBottom: "1px solid",
      },
    },
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
  },
  languageContainer: {
    display: "flex",
    gap: theme.spacing(1.5),
    cursor: "pointer",
  },
  language: {
    display: "flex",
    alignItems: "center",
  },
  appBar: {
    boxShadow: "none !important",
    background: "none !important",
    padding: theme.spacing(1, 0),
  },
  toolBar: {
    padding: `${theme.spacing(0)} !important`,
    color: "#000 !Important",
  },
  navigation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBarContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    "& span": {
      fontFamily: "PoppinsMedium",
      textTransform: "uppercase",
      cursor: "pointer",
      color: theme.palette.text.accent,
    },
  },
  searchDrawerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  navLinkContainer: {
    "& a": {
      color: theme.palette.text.main,
      textDecoration: "none",
      fontFamily: "PoppinsBold",
      textTransform: "uppercase",
    },
  },
  cartContainer: {
    width: "35vw",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      overflowX: "hidden",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const headerDetails = useSelector((state) => state.contact);
  const languageDetails = useSelector((state) => state.language);
  const navigationPages = useSelector((state) => state.navigation.pages);
  const navigationOtherPages = useSelector((state) => state.navigation.others);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const [searchDrawer, setSearchDrawer] = React.useState(false);
  const [rightDrawer, setRightDrawer] = React.useState(false);
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRightDrawer = (event) => {
    setRightDrawer(event.currentTarget);
  };

  const handleRightClose = () => {
    setRightDrawer(false);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="1.80rem"
        py="2rem"
      >
        <CircularProgress />
        <img src={logo} alt={logo} />
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <Box className={classes.contactInfoContainer}>
          <Container>
            <Grid container>
              <Grid item md={11} xs={8} className={classes.contactInfoGrid1}>
                <Hidden mdDown>
                  {headerDetails?.map(({ id, Icon, name, to }) => {
                    return (
                      <Box key={id} className={classes.contactInfo}>
                        <Icon />
                        <Typography variant="body2">
                          <NavLink to={to}>{name}</NavLink>
                        </Typography>
                      </Box>
                    );
                  })}
                </Hidden>
                <Typography variant="body2" component="span">
                  Open Doors To A World Of Fashion
                </Typography>
                <Typography variant="body2">
                  <NavLink to="/">Discover More</NavLink>
                </Typography>
              </Grid>
              <Grid item md={1} xs={4}>
                <Hidden mdDown>
                  <Box
                    className={classes.languageContainer}
                    onClick={handleClick}
                  >
                    <img src={enUs} alt={enUs} width={25} />
                    <Box className={classes.language}>
                      <Typography variant="body2">English</Typography>
                      <KeyboardArrowDownIcon />
                    </Box>
                  </Box>
                </Hidden>
                <Menu open={anchorEl} anchorEl={anchorEl} onClose={handleClose}>
                  {languageDetails?.map(({ id, image, name }) => {
                    return (
                      <Box key={id}>
                        <MenuItem onClick={handleClose}>
                          <img src={image} alt={image} width={25} />
                          <Typography pl="1rem" variant="body2">
                            {name}
                          </Typography>
                        </MenuItem>
                      </Box>
                    );
                  })}
                </Menu>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Hidden>

      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Container>
            <Box className={classes.navigation}>
              <Box className={classes.searchBarContainer}>
                <Hidden mdUp>
                  <MenuOutlinedIcon />
                </Hidden>
                <Hidden smDown mdDown>
                  <SearchOutlinedIcon
                    onClick={() => setSearchDrawer(true)}
                    sx={{ fontSize: "1.70rem" }}
                  />
                  <Typography
                    variant="body2"
                    component="span"
                    onClick={() => setSearchDrawer(true)}
                  >
                    Search
                  </Typography>
                </Hidden>
                <Drawer
                  anchor="top"
                  open={searchDrawer}
                  close={() => setSearchDrawer(false)}
                >
                  <Container>
                    <Box className={classes.searchDrawerContainer}>
                      <Hidden smDown>
                        <Box gap="0.60rem" display="flex">
                          <CloseOutlinedIcon
                            onClick={() => setSearchDrawer(false)}
                          />
                          <NavLink to="/">
                            <img src={logo} alt={logo} />
                          </NavLink>
                        </Box>
                      </Hidden>
                      <Box>
                        <TextField
                          id="fullWidth"
                          label="Search"
                          variant="standard"
                          fullWidth
                          value="Black Bag"
                          InputLabelProps={{ style: { color: "#000" } }}
                          sx={{ width: "20rem" }}
                        />
                      </Box>
                    </Box>
                  </Container>
                </Drawer>
              </Box>
              <Box display="flex" gap="2.50rem">
                <Hidden smDown mdDown>
                  <Box
                    display="flex"
                    gap="1rem"
                    className={classes.navLinkContainer}
                  >
                    {navigationPages.map(({ id, page, to }) => {
                      return (
                        <Box key={id}>
                          <Typography variant="body1">
                            <NavLink to={to}>{page}</NavLink>
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Hidden>
                <Box>
                  <NavLink to="/">
                    <img src={logo} alt={logo} />
                  </NavLink>
                </Box>
                <Hidden smDown mdDown>
                  <Box
                    display="flex"
                    gap="1rem"
                    className={classes.navLinkContainer}
                  >
                    {navigationOtherPages?.map(({ id, page, to, icon }) => {
                      return (
                        <Box key={id}>
                          <Typography variant="body1">
                            <NavLink to={to}>{page}</NavLink>
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Hidden>
              </Box>
              <Box>
                <Hidden mdUp>
                  <Box display="flex" gap="0.70rem">
                    <SearchOutlinedIcon onClick={() => setSearchDrawer(true)} />
                  </Box>
                </Hidden>
                <Box display="flex" gap="1rem">
                  <Hidden smDown mdDown>
                    {isAuthenticated ? (
                      ""
                    ) : (
                      <Person2OutlinedIcon
                        onClick={() => loginWithRedirect()}
                        sx={{ fontSize: "1.70rem" }}
                      />
                    )}
                    {isAuthenticated && (
                      <Box display="flex" alignItems="center" gap="0.80rem">
                        <img
                          src={user.picture}
                          alt={user.name}
                          width={30}
                          style={{ borderRadius: "100%" }}
                          onClick={(event) =>
                            setAnchorElProfile(event.currentTarget)
                          }
                        />
                        <Menu
                          anchorEl={anchorElProfile}
                          open={Boolean(anchorElProfile)}
                          onClose={() => setAnchorElProfile(null)}
                        >
                          <MenuItem>Account</MenuItem>
                          <MenuItem>Orders</MenuItem>
                          <MenuItem
                            onClick={() =>
                              logout({
                                logoutParams: {
                                  returnTo: window.location.origin,
                                },
                              })
                            }
                          >
                            Logout
                          </MenuItem>
                        </Menu>
                      </Box>
                    )}
                    <StarBorderOutlinedIcon sx={{ fontSize: "1.70rem" }} />
                    <ShoppingCartOutlinedIcon
                      sx={{ fontSize: "1.70rem" }}
                      onClick={handleRightDrawer}
                    />
                    <Drawer
                      open={Boolean(rightDrawer)}
                      anchor="right"
                      close={handleRightClose}
                    >
                      <Box className={classes.cartContainer}>
                        <Cart />
                      </Box>
                    </Drawer>
                  </Hidden>
                </Box>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;