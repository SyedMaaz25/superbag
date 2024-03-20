import React from "react";
import { Box } from "../../../atoms/box";
import { Typography } from "../../../atoms/typography";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({}));

const Tab2 = () => {
  const { id } = useParams();
  const classes = useStyles();
  const product = useSelector((state) => state.products.CoreEssentials);
  const matchedProducts = product.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <Box>
      {matchedProducts.shipping.map((details, index) => (
        <Typography key={index} variant="body2" pt="0.80rem">
          {details}
        </Typography>
      ))}
    </Box>
  );
};

export default Tab2;