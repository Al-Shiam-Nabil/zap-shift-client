import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import BrandSlider from '../BrandSlider/BrandSlider';
import Reviews from '../Reviews/Reviews';

const reviewPromise=fetch('/reviews.json').then(res=>res.json())

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          <HowItWorks></HowItWorks>
          <OurServices></OurServices>
          <BrandSlider></BrandSlider>
          <Reviews reviewPromise={reviewPromise}></Reviews>
        </div>
    );
};

export default HomePage;