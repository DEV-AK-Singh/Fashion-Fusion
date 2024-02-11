import React from 'react'
import SalesNotiBanner from "../components/SalesNotiBanner";
import Banner from "../components/Banner";
import HomeContent from '../components/HomeContent';
import HomeInfoSection from '../components/HomeInfoSection';

export default function HomePage() {
  return (
    <>
        <SalesNotiBanner/>
        <Banner/>
        <HomeContent/>
        <HomeInfoSection/>
    </>
  )
}
