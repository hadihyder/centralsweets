import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
//import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Index() {
  return (
    <Router>
    <React.Fragment>
      <AppAppBar />
      <Switch>
        <Route exact path="/contact" component={/*component name*/}/>
      </Switch>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      {/* <ProductHowItWorks /> */}
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
    </Router>
  );
}

export default withRoot(Index);