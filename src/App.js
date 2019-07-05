import React from 'react';
import './App.css';
import {Layout} from 'antd';
import Banner from './components/section-1/banner';
import HowItWorks from './components/section-2/how-it-works';
import AboutUs from './components/section-3/about-us';
import Brands from './components/section-4/brands';
import Testimonials from './components/section-5/testimonials'
import Subscribe from './components/section-6/subscribe'
import SeenOn from './components/section-7/seenon'
import SignUp from './components/section-8/signup'
import Header from './Header'
import Footer from './Footer'
import PickCountry from './components/section-9/pickcountry'
function App() {
  return (
    <div className="App">
      <Layout>
          <Header className="header"/>
            <Banner/>
            <HowItWorks/>
            <AboutUs/>
            <Brands/>
            <Testimonials/>
            <Subscribe/>
            <SeenOn/>
            {/*<SignUp/>*/}
            <PickCountry/>
          <Footer/>
      </Layout>
    </div>
  );
}

export default App;
