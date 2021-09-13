import {useState} from "react";
import mapa from "../../../assets/fondo.png";
import nubes from "../../../assets/nubes.png";
import { IconButton} from "@material-ui/core";


import RadioButtonCheckedOutlinedIcon from '@material-ui/icons/RadioButtonCheckedOutlined';

import "./index.css";
import CardMap from "../../Atoms/CardMap";

const MapAgroSuper = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div container >
    {/* <div id="mapa"> */}
      <img src={nubes} alt="nubes" id="nube" width="100%"/>
      <IconButton  color="primary"  size="large"  className="icon-button"  onClick={handleOpen} >
        <RadioButtonCheckedOutlinedIcon  style={{fontSize:30}}  className="btn-map"/>
      </IconButton>

       <CardMap open={open} handleClose={handleClose}/>


      <img src={mapa} style={{height: "70vh"}} alt="Mapa agrosuper"  />

  


    {/* </div> */}
    </div>
  );
};

export default MapAgroSuper;
