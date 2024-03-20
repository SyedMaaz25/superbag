import React from "react";
import { Box } from "../../../atoms/box";
import { Typography } from "../../../atoms/typography";
import { Grid } from "../../../atoms/grid";
import { makeStyles } from "@mui/styles";
import { TextField } from "../../../atoms/text-field";
import { Container } from "../../../atoms/container";
import { Button } from "../../../atoms/button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CameraOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addReview, updateReview } from "../../feautures/review_slice";
import { useParams } from "react-router";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles((theme) => ({
  ratings: {
    "& h6": {
      fontFamily: "PoppinsMedium",
    },
  },
  closeIconContainer: {
    border: "1px solid !important",
  },
}));

const Tab3 = (setOpenModal) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    review: "",
    ratings: 0,
    images: [],
  });
  const buttonValue = useSelector((state) => state.reviews.buttonValue);

  const handleCloseModal = () => {
    setOpenModal.closeModal(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({ ...formData, ratings: newValue });
  };

  const handleSubmit = (event) => {
    if (buttonValue === "Update Now") {
      dispatch(updateReview({reviewData:formData}));
    } else {
      dispatch(addReview({ productId: parseInt(id), review: formData }));
      setFormData({
        name: "",
        email: "",
        review: "",
        ratings: 0,
        images: [],
      });
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...newImages],
      }));
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  return (
    <Box className={classes.ratings}>
      <Box position="absolute" right="0" top="0" padding="1rem">
        <IconButton
          onClick={handleCloseModal}
          className={classes.closeIconContainer}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
      <Container>
        <Typography variant="h5">Write a review</Typography>
        <Box pt="2rem">
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Typography variant="body1" pb="0.70rem">
                Name *
              </Typography>
              <TextField
                label="Name"
                fullWidth
                required
                variant="outlined"
                value={formData.name}
                name="name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="body1" pb="0.70rem">
                Email *
              </Typography>
              <TextField
                label="Email"
                fullWidth
                required
                variant="outlined"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box pt="1.50rem">
            <Typography variant="body1" pb="0.70rem">
              Your review
            </Typography>
            <TextField
              label="Your review"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
              value={formData.review}
              name="review"
              onChange={handleChange}
            />
          </Box>
          <Box display="flex" alignItems="center" gap="0.40rem" py="1.80rem">
            <Typography variant="body1">Your ratings:</Typography>
            <Rating value={formData.ratings} onChange={handleRatingChange} />
          </Box>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Button variant="accent" onClick={handleButtonClick}>
                <CameraOutlinedIcon sx={{ margin: "0rem 0.60rem" }} /> Add
                Photos
              </Button>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
                multiple
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Button variant="secondary" onClick={(event) => handleSubmit(event)}>
                {buttonValue}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Tab3;
