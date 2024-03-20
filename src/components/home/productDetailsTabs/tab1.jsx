import React from "react";
import { Box } from "../../../atoms/box";
import { Typography } from "../../../atoms/typography";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Grid } from "../../../atoms/grid";
import { List, ListItem, ListItemText } from "../../../atoms/list";
import { makeStyles } from "@mui/styles";

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
}));

const Tab1 = () => {
  const classes = useStyles();
  const { id } = useParams();
  const product = useSelector((state) => state.products.CoreEssentials);
  const matchedProducts = product.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <Box>
      {matchedProducts.productDetails.map(
        (
          {
            name,
            description,
            images,
            features,
            dimensions,
            weight,
            washingInstructions,
          },
          index
        ) => {
          return (
            <Box key={index}>
              <Typography variant="h6">{name}</Typography>
              <Typography variant="body2" pt="0.60rem">
                {description}
              </Typography>
              <Grid container spacing={2} pt="2rem">
                {images.map((img, index) => {
                  return (
                    <Grid key={index} item md={4} xs={6}>
                      <img src={img} alt={img} width="100%" />
                    </Grid>
                  );
                })}
              </Grid>
              <Box pt="2rem" className={classes.features}>
                <Grid container spacing={{ md: 10, xs: 2 }}>
                  <Grid item md={6} xs={12}>
                    <Typography variant="body1" pb="0.40rem" component="h1">
                      Features
                    </Typography>
                    {features.map((data, index) => {
                      return (
                        <List key={index}>
                          <ListItem>
                            <ListItemText>
                              {index + 1}. {data}
                            </ListItemText>
                          </ListItem>
                        </List>
                      );
                    })}
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <Typography variant="body1" pb="0.40rem" component="h1">
                      Dimensions
                    </Typography>
                    {dimensions.map((data, index) => {
                      return (
                        <List key={index}>
                          <ListItem>
                            <ListItemText>
                              {index + 1}. {data}
                            </ListItemText>
                          </ListItem>
                        </List>
                      );
                    })}
                    <Typography
                      variant="body1"
                      pb="0.40rem"
                      component="h1"
                      mt="1rem"
                    >
                      Weight
                    </Typography>
                    <List key={index}>
                      <ListItem>
                        <ListItemText>1. {weight}</ListItemText>
                      </ListItem>
                    </List>
                  </Grid>

                  <Grid item md={3} xs={12}>
                    <Typography variant="body1" pb="0.40rem" component="h1">
                      Washing Instructions
                    </Typography>
                    {washingInstructions.map(
                      ({ image, description }, index) => {
                        return (
                          <List key={index}>
                            <ListItem>
                              <img src={image} alt={image} />
                            </ListItem>
                            <Typography variant="body2" component="p" pt="1rem">
                              {description}
                            </Typography>
                          </List>
                        );
                      }
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          );
        }
      )}
    </Box>
  );
};

export default Tab1;