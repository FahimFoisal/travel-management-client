import React from 'react';
import Header from '../Header/Header';
import ServicesCard from '../ServicesCard/ServicesCard';
import ReviewsCard from '../Reviews/ReviewsCard/ReviewsCard';
import Footer from '../../Footer/Footer';
import BlogSection from '../../BlogSection/BlogSection';
import MiddleSection from '../../MiddleSection/MiddleSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MiddleSection></MiddleSection>
            <ServicesCard></ServicesCard>
            <ReviewsCard></ReviewsCard>
            <BlogSection></BlogSection>
            <Footer></Footer>
        </div>
    );
};



export default Home;