import React from 'react';
import Brands from './brands';
import Category from './category';
import Offer1 from './offer1';
import Shipping from './shipping';
import Offer2 from './offer2';
import Offer3 from './offer3';
import NewsLetter from './newsletter';
import Topsell from './top-sell-product';
import NewProduct from './new-product';

const Homepage = () => {
  return (
    <div>
      <Offer1></Offer1>
      <Shipping></Shipping>
      <Category></Category>
      <NewProduct></NewProduct>
      <Offer2></Offer2>
      <Topsell></Topsell>
      <Offer3></Offer3>
      <Brands></Brands>
      <NewsLetter></NewsLetter>
    </div>
  );
};
export default Homepage;