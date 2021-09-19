import React from "react";
import BorderWrapper from "../../../Atoms/BorderWrapper";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import icn1 from "../../../../assets/icn_1.png";
import icn2 from  "../../../../assets/icn_2.png";
import icn3 from  "../../../../assets/icn_3.png";

const useStyles = makeStyles((theme) => ({
  grid: {
    height: "100%",
  },
  tittle: {
    color: "#28396f",
    textAlign: "center",
    fontSize: 35,
  },
  subtittle: {
    color: "#d98a08",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 20,
  },
  icontext: {
    
    fontSize: 13,
    marginLeft: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
  gridIcons: {
    marginBottom: 40,
  },
}));

const Proposito = () => {
  const classes = useStyles();
  return (
    <BorderWrapper borderColor="#459fc7">
      <Box height="90%">
        <Grid container className={classes.grid}>
          <Grid item xs={5} container direction="column">
            <Typography variant="h5" component="h1" className={classes.tittle}>
              Alimentar
            </Typography>

            <Typography variant="h5" component="h1" className={classes.tittle}>
              lo bueno de la vida
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              className={classes.subtittle}
            >
              todos los días
            </Typography>
            <Grid container item className={classes.gridIcons}>
              <Grid item container alignItems="center" xs={4}>
                <img src={icn1} className={classes.icon} />
                <Typography className={classes.icontext} style={{color: "#007ec7",}} variant="h3">
                  Hacer las cosas <br />
                  siempre mejor
                </Typography>
              </Grid>
              <Grid item container alignItems="center" xs={4}>
                <img src={icn2} className={classes.icon} />
                <Typography className={classes.icontext} style={{color:"#62bd14"}} variant="h3">
                  Hacer las cosas <br />
                  siempre mejor
                </Typography>
              </Grid>
              <Grid item container alignItems="center" xs={4}>
                <img src={icn3} className={classes.icon} />
                <Typography className={classes.icontext} style={{color:"#da4f00"}} variant="h3">
                  Hacer las cosas <br />
                  siempre mejor
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="h1" >
              <Box lineHeight={2} textAlign="center" fontSize={17} >
                Porque alimentar es mucho más que nutrirse, es hacer que las
                cosas pasen, es llenarse de buenas emociones y experiencias, es
                ver la vida de forma positiva y alegre. Y queremos que tú seas
                parte de esta filosofía donde disfrutar y aprender de cada
                detalle, es fundamental para seguir cumpliendo con nuestro
                propósito día a día.
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={7}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=nyuMFyOzWZA"
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { controls: 2 },
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </BorderWrapper>
  );
};

export default Proposito;