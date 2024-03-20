import React from "react";
import { Box } from "../../atoms/box";
import { Typography } from "../../atoms/typography";
import { CircularProgress, Rating, Tab, Tabs } from "@mui/material";
import { Grid } from "../../atoms/grid";
import { Button } from "../../atoms/button";
import { makeStyles } from "@mui/styles";
import { Modal } from "../../atoms/modal";
import Tab1 from "./productDetailsTabs/tab1";
import Tab2 from "./productDetailsTabs/tab2";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../assets/images/profile.jpeg";
import { useParams } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addReview,
  deleteReview,
  removeAllReview,
  updateReview,
} from "../feautures/review_slice";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BookmarkRemoveOutlinedIcon from "@mui/icons-material/BookmarkRemoveOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { createSelector } from "reselect";

const TabPanel = ({ children, value, index }) => {
  return (
    <Box hidden={value !== index}>
      {value === index && <Box pt="2rem">{children}</Box>}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  features: {
    "& li": {
      padding: `${theme.spacing(0)}`,
    },
    "& span": {
      fontSize: "0.90rem !important",
      color: theme.palette.text.accent,
    },
    "& h1": {
      fontFamily: "PoppinsMedium",
    },
    "& p": {
      color: theme.palette.text.accent,
    },
  },
  ratings: {
    "& h6": {
      fontFamily: "PoppinsMedium",
    },
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: theme.palette.text.secondary,
    padding: theme.spacing(6, 0),
    borderRadius: "5px",
    "& h5": {
      textAlign: "center",
      fontFamily: "PoppinsMedium",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  img: {
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform 0.3s ease-in-out",
      cursor: "pointer",
    },
  },
}));

const ProductDetails = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = React.useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { id } = useParams();
  const LazyLoadedTab3 = React.lazy(() => import("./productDetailsTabs/tab3"));
  const selectReviewsById = createSelector(
    (state) => state.reviews.review,
    (_, id) => parseInt(id),
    (reviews, id) => reviews[id] || []
  );
  const reviews = useSelector((state) => selectReviewsById(state, id));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleReviewDelete = (index) => {
    dispatch(deleteReview({ productId: parseInt(id), id: index }));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllReview({ productId: parseInt(id) }));
  };

  const handleUpdate = (index) => {
      dispatch(updateReview({reviewId:index}))
      setOpenModal(true)
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
      </Box>
    );
  }

  return (
    <Box pt="6rem">
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Product details" sx={{ color: "black" }} />
        <Tab label="Shipping and Returns" sx={{ color: "black" }} />
        <Tab label="Reviews" sx={{ color: "black" }} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Tab1 />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Tab2 />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Box className={classes.ratings}>
          <Typography variant="h6">Rating & Reviews</Typography>
          <Grid container pt="2rem">
            <Grid item md={9} xs={12}>
              <Typography component="legend" pb="0.50rem">
                Total Reviews: {reviews.length}
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Button variant="accent" onClick={handleOpenModal}>
                Write a review
              </Button>
              <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box className={classes.modal}>
                  <React.Suspense fallback={<CircularProgress />}>
                    <LazyLoadedTab3 closeModal={setOpenModal} />
                  </React.Suspense>
                </Box>
              </Modal>
            </Grid>
          </Grid>
          <Box>
            {reviews.length === 0 ? (
              <Typography variant="body1">No reviews yet.</Typography>
            ) : (
              reviews.map((review, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  gap="1rem"
                  mt="1.50rem"
                >
                  <Grid container spacing={10} pt="1.50rem" alignItems="center">
                    <Grid item md={10}>
                      <Box>
                        {isAuthenticated ? (
                          ""
                        ) : (
                          <img
                            src={profile}
                            alt={profile}
                            width={60}
                            style={{ borderRadius: "100%" }}
                          />
                        )}
                        {isAuthenticated && (
                          <img
                            src={user.picture}
                            alt={user.name}
                            width={60}
                            style={{ borderRadius: "100%" }}
                            onClick={(event) =>
                              setAnchorElProfile(event.currentTarget)
                            }
                          />
                        )}
                      </Box>
                      <Box pt="1rem">
                        <Typography variant="body1" pb="0.35rem">
                          {user?.name}
                        </Typography>
                        <Typography variant="body1">{review.title}</Typography>
                        <Typography variant="body2" pb="0.50rem">
                          {review.review}
                        </Typography>
                        <Box
                          display="flex"
                          alignItems="center"
                          gap="0.60rem"
                          pt="0.20rem"
                        >
                          <Rating
                            name="read-only"
                            value={review.ratings}
                            readOnly
                          />
                          <Typography>5 out of / {review.ratings}</Typography>
                        </Box>
                      </Box>
                      <Grid container columnSpacing={2}>
                        {review.images?.map((image, index) => (
                          <Grid item md={2} xs={6} key={index}>
                            <img
                              src={image}
                              alt={`image-${index}`}
                              width="100%"
                              className={classes.img}
                              style={{ marginTop: "2rem", borderRadius: "8px" }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    <Grid item md={2}>
                      <DeleteOutlinedIcon
                        variant="body1"
                        pb="0.30rem"
                        onClick={() => handleReviewDelete(index)}
                        sx={{ fontSize: "1.80rem" }}
                      />
                      <BookmarkRemoveOutlinedIcon
                        variant="body1"
                        onClick={() => handleRemoveAll(index)}
                        sx={{ fontSize: "1.80rem" }}
                      />
                      <UpdateOutlinedIcon
                        variant="body1"
                        onClick={() => handleUpdate(index)}
                        sx={{ fontSize: "1.80rem" }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default ProductDetails;
