import React from 'react'
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import FaenadoImg from "../../../../assets/slide-2.png";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  root: {
  
    paddingTop: 50,
    height: "auto",
  },
  image: {
    width: "100%",
    height: "35vh",
  },
  title: {
    color: theme.palette.text.button,
  },
  subtitle: {
    fontSize: 28,
  },
  gridContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  video: {
    borderRadius: 20,
    overflow: "hidden",
  },
}));



const Faenado = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box width='80%' minWidth={200}>
          <Grid container direction='row' spacing={0}>
          <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
              <ReactPlayer url="https://www.youtube.com/watch?v=nyuMFyOzWZA"  width="700px" height="470px" className={classes.video} />
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item xs={12} md={5}>
              <Grid
                container
                direction='column'
                spacing={5}
                justifyContent='center'
                alignItems='center'
                className={classes.gridContainer}
              >
                <Grid item>
                 <img src={FaenadoImg} alt="faenado" className={classes.image} />
                 <Typography variant='h5' align='center'>
                    Área de Faenado
                  </Typography>
                  <Typography variant='h4' align='center' gutterBottom>
                    Explicación de nuestros procesos actuales
                  </Typography>
                </Grid>

                <Grid item>
                  
                </Grid>
              </Grid>
            </Grid>
          
            
          </Grid>
        </Box>
      </Box>
        </div>
    )
}

export default Faenado