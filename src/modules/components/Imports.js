import React from 'react';
import ProductCategories from '../views/ProductCategories';
import ProductSmokingHero from '../views/ProductSmokingHero';
import ProductHero from '../views/ProductHero';
import ProductValues from '../views/ProductValues';
import ProductCTA from '../views/ProductCTA';
import Map from '../components/Map'
import AppFooter from '../views/AppFooter'


function Imports(){
    return(
        <div style={{display: "block"}}>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductCTA />
      <ProductSmokingHero />
      <Map/>
      <AppFooter/>
      </div>
    );
}
export default Imports;