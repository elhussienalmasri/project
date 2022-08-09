import React, { useState, useEffect, useRef } from 'react';
import "./skills.css";
import { useLocation } from 'react-router-dom';


const Skills = () => {
  const [active, setActive] = useState(false);
  const inputRef = useRef()
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

  let section = document.querySelector(".three");
  useEffect(() => {
    let x = window.onscroll = function () {
      const { offsetTop } = inputRef.current || '0px';
    

      if (window.scrollY > offsetTop) {
          setActive(true)
      }
    }
    x()


  }, [])




 
  return (
    <>
      <div className="section" id='skills' ref={inputRef} >
        {/* <div className="contain">
          <h1 >Skills </h1>
        </div> */}
        <div className="contain">
          {/* <h1 >About </h1> */}
          <span style={{"--i" : "1"}}>S</span>
          <span style={{"--i" : "2"}}>k</span>
          <span style={{"--i" : "3"}}>i</span>
          <span style={{"--i" : "4"}}>l</span>
          <span style={{"--i" : "5"}}>l</span>
          <span style={{"--i" : "6"}}>s</span>
        
          {/* <span style={{"--i" : "6"}}>n</span>
          <span style={{"--i" : "8"}} >g</span> */}
        </div>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fill-opacity="1" d="M0,32L30,74.7C60,117,120,203,180,197.3C240,192,300,96,360,80C420,64,480,128,540,170.7C600,213,660,235,720,213.3C780,192,840,128,900,133.3C960,139,1020,213,1080,224C1140,235,1200,181,1260,144C1320,107,1380,85,1410,74.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </div>

      <section className="three" >
        {/* <div id="headskill">Skills</div> */}
        <div className="skills">


          {/* <Progress id={active&&'html'}  done='50'/> */}
          {/* <div class="progress"> */}
          <div className='column'>
            <h3>HTML</h3>
            <div className='progress'>


              <span className={active ? 'eightyF' : null}  ></span>

            </div>
          </div>

          <div className='column'>
            <h3>CSS</h3>
            <div className='progress'>

              <span className={active ? 'eightyF' : null}  ></span>

            </div>
          </div>
          <div className='column'>
            <h3>JavaScript</h3>
            <div className='progress'>

              <span className={active ? 'eighty' : null}  ></span>

            </div>
          </div>
          <div className='column'>

            <h3>React</h3>

            <div className='progress'>

              <span className={active ? 'seventyF' : null}  ></span>

            </div>
          </div>
          <div className='column'>

            <h3>Node.js</h3>

            <div className='progress'>

              <span className={active ? 'seventyF' : null}  ></span>

            </div>
          </div>
          <div className='column'>

            <h3>Git</h3>

            <div className='progress'>


              <span className={active ? 'seventyF' : null}  ></span>

            </div>
          </div>
          <div className='column'>

            <h3> GitHub</h3>

            <div className='progress'>

              <span className={active ? 'seventyF' : null}  ></span>

            </div>
          </div>
          <div className='column'>

            <h3>REST </h3>

            <div className='progress'>

              <span className={active ? 'seventy' : null}  ></span>

            </div>
          </div>
          <div className='column'>

            <h3>MongoDB</h3>

            <div className='progress'>

              <span className={active ? 'seventy' : null}  ></span>

            </div>
          </div>

          <div className='column'>

            <h3>Mongoose</h3>

            <div className='progress'>

              <span className={active ? 'seventy' : null}  ></span>
            </div>

          </div>


        </div>
      </section>

    </>

  )
}

export default Skills