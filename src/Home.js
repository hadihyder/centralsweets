import withRoot from "./modules/withRoot";
import React from "react";
//import Footer from "./modules/components/AFooter";
import AppAppBar from "./modules/views/AppAppBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Imports from "./modules/components/Imports";
import "./modules/components/Footer.css";
import SyrupGallery from './SyrupGallery';
import LadduGallery from './LadduGallery';
import HalvaGallery from './HalvaGallery';
import BakedGallery from './BakedGallery';
import PedhaGallery from './PedhaGallery';
import MilkGallery from './MilkGallery';
import FarsanGallery from './FarsanGallery';
import DryFruitsGallery from './DryFruitsGallery';
import BarfiGallery from './BarfiGallery';
import Contact from './Contact'



function Index() {
  return (
    <Router>
    <React.Fragment>
      <AppAppBar />
      <Switch>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/HalvaGallery" component={HalvaGallery}/>
        <Route exact path="/BarfiGallery" component={BarfiGallery}/>
        <Route exact path="/DryFruitsGallery" component={DryFruitsGallery}/>
        <Route exact path="/FarsanGallery" component={FarsanGallery}/>
        <Route exact path="/MilkGallery" component={MilkGallery}/>
        <Route exact path="/PedhaGallery" component={PedhaGallery}/>
        <Route exact path="/BakedGallery" component={BakedGallery}/>
        <Route exact path="/LadduGallery" component={LadduGallery}/>
        <Route exact path="/SyrupGallery" component={SyrupGallery}/>
        <Route exact path="/" component={Imports}/>
      </Switch>
    </React.Fragment>
    </Router>
  );
}

export default withRoot(Index);
