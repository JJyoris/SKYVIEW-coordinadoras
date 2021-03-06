import Header from "./components/Organism/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, createTheme } from "@material-ui/core/";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Screens/Home";
import { lightTheme } from "./config/ThemeConfig";
import Historia from "./components/Screens/Historia";
import ProcessHeader from "./components/Organism/ProcessHeader";
import OficinaCentral from "./components/Screens/OficinaCentral";
import Granja from "./components/Screens/Granja";
import IntegracionVertical from "./components/Screens/IntegracionVertical";
import Protocolos from './components/Organism/Planta/Protocolos';
import Faenado from './components/Organism/Planta/Faenado';
import Cerdo from './components/Organism/Planta/Cerdo';
import Pavo from './components/Organism/Planta/Pavo';
import Pollo from './components/Organism/Planta/Pollo';
import Salmon from './components/Organism/Planta/Salmon';
import Areas from './components/Organism/Planta/Areas';
import Beneficios from './components/Organism/Planta/Beneficios';
import Certificaciones from './components/Organism/Planta/Certificaciones';
import Sigas from './components/Organism/Planta/Sigas';
import Produccion from "./components/Organism/ProduccionResponsable/Tratamiento";
import Timeline from "./components/Screens/Timeline";
import Libertades from "./components/Screens/Libertades";
import BioRiles from './components/Organism/ProduccionResponsable/BioRiles';
import HuellaCarbono from './components/Organism/ProduccionResponsable/HuellaCarbono';
import Agua1 from "./components/Organism/ProduccionResponsable/Agua-1";
import Agua2 from "./components/Organism/ProduccionResponsable/Agua-2";
import Olores from "./components/Organism/ProduccionResponsable/Olores";
import Suelos from "./components/Organism/ProduccionResponsable/Suelos";
import Eficiencia from "./components/Organism/ProduccionResponsable/Eficiencia";
import Comunidades from "./components/Organism/Comunidad/Comunidades";
import Emprendimiento from "./components/Organism/Comunidad/Emprendimiento";
import Educacion from "./components/Organism/Comunidad/Educacion";
import VidaEquilibrada from "./components/Organism/Comunidad/VidaEquilibrada";
import Voluntario from "./components/Organism/Comunidad/Voluntario";
import Proposito from "./components/Organism/Comunidad/Proposito";

function App() {
  return (
    <ThemeProvider theme={createTheme(lightTheme)}>
      <BrowserRouter>
        <CssBaseline>
          <Header />
          <ProcessHeader/>

          {/* <div className={classes.content}> */}
            <Switch>
              {/*
              public routes
            */}
              <Route path="/" exact component={Home} />

              <Route path="/historia" exact component={Historia} />
              <Route path="/historia/timeline" exact component={Timeline} />

              <Route path="/oficina" exact component={OficinaCentral} />

              <Route path="/granja" exact component={Granja} />
              <Route path="/granja/integracionvertical" exact component={IntegracionVertical} />
              <Route path="/granja/libertades" exact component={Libertades} />

              <Route path="/planta" exact component={Protocolos} />
              <Route path="/planta/faenado" exact component={Faenado} />
              <Route path="/planta/cerdo" exact component={Cerdo} />
              <Route path="/planta/pavo" exact component={Pavo} />
              <Route path="/planta/pollo" exact component={Pollo} />
              <Route path="/planta/salmon" exact component={Salmon} />
              <Route path="/planta/areas" exact component={Areas} />
              <Route path="/planta/beneficios" exact component={Beneficios} />
              <Route path="/planta/certificaciones" exact component={Certificaciones} />
              <Route path="/planta/sigas" exact component={Sigas} />

              <Route path="/comunidad/emprendimiento" exact component={Emprendimiento}/>
              <Route path="/comunidad" exact component={Comunidades}/>
              <Route path="/comunidad/educacion" exact component={Educacion}/>
              <Route path="/comunidad/vida" exact component={VidaEquilibrada}/>
              <Route path="/comunidad/voluntario" exact component={Voluntario}/>
              <Route path="/comunidad/proposito" exact component={Proposito}/>


              <Route path="/produccion" exact component={Produccion} />
              <Route path="/produccion/bioriles" exact component={BioRiles} />
              <Route path="/produccion/carbono" exact component={HuellaCarbono} />
              <Route path="/produccion/agua-1" exact component={Agua1} />
              <Route path="/produccion/agua-2" exact component={Agua2} />
              <Route path="/produccion/suelos" exact component={Suelos} />
              <Route path="/produccion/olores" exact component={Olores} />
              <Route path="/produccion/eficiencia" exact component={Eficiencia} />

              

            </Switch>
          {/* </div> */}

          {/* <div className={classes.footer}>
            {/*
              Here add footer component
          

            <Footer />
          </div> */}
        </CssBaseline>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
