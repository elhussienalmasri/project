import "./intro.css";
import intro from "../../img/svg/intro.svg"
import React,{useState ,useEffect} from "react";
import { Link } from "react-router-dom";


const Intro = () => {
  const [mobile, setMobile] = useState(false);
  const[size,setSize]= useState(window.innerWidth);


  useEffect(() => {

    window.addEventListener('resize',updateWidth);
    
      setMobile(()=>(size<600?true:false));

      return()=>window.removeEventListener('resize',updateWidth)
   
  }, [size]);

const updateWidth=()=>{
  setSize(window.innerWidth)
}
  return (
    <div className="i">
    

        <div className="i-left-wrapper">
          <div>
          <h2 className="i-intro">
          <span className="containI">
         
          <span style={{"--i" : "1"}}>H</span>
          <span style={{"--i" : "2"}}>e</span>
          <span style={{"--i" : "3"}}>l</span>
          <span style={{"--i" : "4"}}>l</span>
          <span style={{"--i" : "5"}}>o</span>
          
        </span>
            
           
          , I'm Hussein</h2>
          </div>
         
          <div className="t_padding">
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI Designer</div>
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">Freelancer</div>
            </div>
          </div>
          </div>
          <p className="i-desc">
          
            I design and develope websites in cheapest prices 
          </p>
          <div className="button">
          <Link to='/#projects' className="main-btn">  my work</Link>
          <Link to='/#contact' className="main-btn" style={{marginLeft:"10px"}}>Hire me </Link>
          </div>
        </div>

        <div className="right">
          
        <img className={mobile?'mImg':'img'} src={intro}   alt=""/>
        
      </div>
      
     
    </div>
  );
};

export default Intro;
