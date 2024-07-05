import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../helper/Auth';
import SalesNotiBanner from "../components/SalesNotiBanner";
import Banner from "../components/Banner";
import HomeContent from '../components/HomeContent';
import HomeInfoSection from '../components/HomeInfoSection';
import Loader from '../components/Loader';

export default function HomePage() {

  const [user,setUser] = useState(null);
  let navigate = useNavigate();
  
  useEffect(()=>{
    let userData = localStorage.getItem("userData");
    if(userData){
      console.log("Checking logging..");
      userData = JSON.parse(userData);
      try {
        let email = userData.email;
        let password = userData.password;
        login(email,password).then((data)=>{
          if(data?.userData){
            console.log("User Logged In..");
            localStorage.setItem("userData",JSON.stringify(data.userData));
            setUser(JSON.parse(JSON.stringify(data?.userData)))
            navigate("/",{replace:true});
          }else{
            throw Error(data.statusMsg);
          }
        }).catch((err)=>{
          console.log("Error: ",err);
          alert(err);
          localStorage.removeItem("userData");
          navigate("/auth/signin",{replace:true});
        });
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Try again..")
        localStorage.removeItem("userData");
        navigate("/auth/signin",{replace:true});
      }
    }else{
      console.log("userData is not present");
      navigate("/auth/signin",{replace:true});
    }
  },[]);

  return (
    <>
        {
          (user==null) ? 
          <Loader/>
          :
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
