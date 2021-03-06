import React from "react";
import {
  CardActionArea,
  Box,
  CardMedia,
  CardContent,
 
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root:{
    borderRadius: 30,
    
  },
  img: {
    borderRadius: 30,
    height:150,
    width: "100%",
  },
  text:{
    fontWeight:700
  }
}));

const NavCard = ({ image, tittle, subtittle, link }) => {
  const classes = useStyles();
  return (
    <>
    
      
      <CardActionArea
        style={{ with: "100%" }}
        component={RouterLink}
        to={link}
        elevation={0}
        className={classes.root}
      >
        <Box display='flex' justifyContent='center' alignItems='center'>
          <CardMedia image={image} className={classes.img} />
        </Box>
      </CardActionArea>

      <CardContent>
        <Box textAlign='center' mt={2}>
          <Typography variant="h1" className={classes.text}>{tittle}</Typography>
          <Typography variant="h1" className={classes.text}> {subtittle}</Typography>
        </Box>
      </CardContent>
      

    </>
  );
};

export default NavCard;
