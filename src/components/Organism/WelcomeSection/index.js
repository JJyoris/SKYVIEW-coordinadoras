import React from "react";
import { Grid, makeStyles, Typography, Button } from "@material-ui/core";
import MapAgroSuper from "../../Atoms/MapAgroSuper"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const useStyles = makeStyles((theme) => ({
  root: {
    
    paddingTop: 10,
    height: "auto",
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tittle: {
    color: theme.palette.text.button,
  },

 wrapper:{

 }

}));

const WelcomeSection = () => {
  const classes = useStyles();
  return (
    <div id="home" className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
       
      >
        <Grid item xs={12}>

          <Typography align="center" variant="h3" className={classes.tittle} gutterBottom>
            
            EXPERIENCIA SKY VIEW

          </Typography>

          <Typography align="center" variant="h2" gutterBottom>

            subtitulo del sky view

          </Typography>
        </Grid>

        <Grid item xs={10}   >
        <TransformWrapper

        initialScale={4}
        initialPositionX={-1800}
        minScale={3}
        
      
        
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <React.Fragment>
            <div >
              <Button variant="contained" color="primary" size="small" onClick={() => zoomIn()}>Zoom in </Button>
              <Button variant="contained" color="primary" size="small" onClick={() => zoomOut()}>Zoom out</Button>
              <Button variant="contained" color="primary" size="small" onClick={() => resetTransform()}>Reset</Button>
            </div>
              <TransformComponent 
               contentStyle={{height:"600px"}}
                >
              

              <MapAgroSuper/> 
        
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
          
          
        </Grid>
      
      </Grid>
    </div>
  );
};

export default WelcomeSection;
