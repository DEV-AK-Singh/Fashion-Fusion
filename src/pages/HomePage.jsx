import React, { useEffect, useState } from 'react'
import SalesNotiBanner from "../components/SalesNotiBanner";
import Banner from "../components/Banner";
import HomeContent from '../components/HomeContent';
import HomeInfoSection from '../components/HomeInfoSection';
import { Navigate, useNavigate } from 'react-router-dom';

export default function HomePage() {

  const [user,setUser] = useState(null);
  let navigate = useNavigate();
  
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("userData")));
    setTimeout(()=>{
      if(JSON.parse(localStorage.getItem("userData"))==null){
        navigate('/signin');
      }
    },2000);
  },[]);

  return (
    <>
        {
          // (user==null) ? <Navigate to={'/signin'} replace={true}/> :
          (user==null) ? <h1>Fetching user data...</h1> :
            <>
              <SalesNotiBanner/>
              <Banner/>
              <HomeContent/>
              <HomeInfoSection/>
            </>
        }
    </>
  )
}
