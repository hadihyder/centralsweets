import withRoot from './modules/withRoot';
import React from 'react';
//import Footer from "./modules/components/AFooter";
import AppAppBar from './modules/views/AppAppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  Imports  from "./modules/components/Imports"; 
import "./modules/components/Footer.css";
import SyrupGallery from './SyrupGallery';
import LadduGallery from './LadduGallery';
import HalvaGallery from './HalvaGallery';
import FriedGallery from './FriedGallery';
import PedhaGallery from './PedhaGallery';
import MilkGallery from './MilkGallery';
import FarsanGallery from './FarsanGallery';
import DryFruitsGallery from './DryFruitsGallery';
import BarfiGallery from './BarfiGallery';



function Index() {
  return (
    <Router>
    <React.Fragment>
      <AppAppBar />
      <Switch>
        <Route exact path="/HalvaGallery" componet={HalvaGallery}/>
        <Route exact path="/BarfiGallery" componet={BarfiGallery}/>
        <Route exact path="/DryruitsGallery" componet={DryFruitsGallery}/>
        <Route exact path="/FarsanGallery" componet={FarsanGallery}/>
        <Route exact path="/MilkGallery" componet={MilkGallery}/>
        <Route exact path="/PedhaGallery" componet={PedhaGallery}/>
        <Route exact path="/FriedGallery" componet={FriedGallery}/>
        <Route exact path="/LadduGallery" componet={LadduGallery}/>
        <Route exact path="/SyrupGallery" component={SyrupGallery}/>
        <Route exact path="/" component={Imports}/>
      </Switch>
    </React.Fragment>
    </Router>
  );
}

export default withRoot(Index);