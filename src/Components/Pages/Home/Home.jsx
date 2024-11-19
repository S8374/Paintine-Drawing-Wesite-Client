import React from 'react';
import Slider from '../Slider/Slider';
import WellcomeSection from '../Section/WellComeSection/WellcomeSection';
import SubCategory from '../Section/SubCategory/SubCategory';
import Section3 from '../Section/Section3/Section3';
import Dynamictime from '../Section/DinamicTime/Dynamictime';
import HomeCard from '../HomeCard/HomeCard';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const allCardData = useLoaderData()
    return (
        <div>
           
              <Slider></Slider>
              <WellcomeSection></WellcomeSection>
              <HomeCard allCardData= {allCardData}></HomeCard>
              <SubCategory></SubCategory>
              <Section3></Section3>
              <Dynamictime></Dynamictime>
      
             
        </div>
    );
};

export default Home;