import "./about.css";
import pic from '../../img/pic.jpg'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';



const About = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])
  return (
    <>
      <div className="section" id="about">
        <div className="contain">
          {/* <h1 >About </h1> */}
          <span style={{"--i" : "1"}}>A</span>
          <span style={{"--i" : "2"}}>b</span>
          <span style={{"--i" : "3"}}>o</span>
          <span style={{"--i" : "4"}}>u</span>
          <span style={{"--i" : "5"}}>t</span>
          {/* <span style={{"--i" : "6"}}>n</span>
          <span style={{"--i" : "8"}} >g</span> */}
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fill-opacity="1" d="M0,32L30,74.7C60,117,120,203,180,197.3C240,192,300,96,360,80C420,64,480,128,540,170.7C600,213,660,235,720,213.3C780,192,840,128,900,133.3C960,139,1020,213,1080,224C1140,235,1200,181,1260,144C1320,107,1380,85,1410,74.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>
      <div className="a" >

        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src={pic}
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">

          
          <p className="a-desc">
            my name is Hussein from Egypt I looking forward to a
            challenge career with organization that provide opportunity
            to develop my skills and abilities I am a full stack developer
            with two year of experience
            I am looking for an internship in my field as a
            junior Full Stack Developer
            and I always develop myself continuously and want to work
            in a team  and learn anew things in programming ,in addition
            to my skills I can learn a new technology fast according to
            the needs of work
          </p>
          
        </div>
      </div>

    </>


  );
};

export default About;
