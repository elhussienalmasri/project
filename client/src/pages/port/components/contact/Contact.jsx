import "./contact.css";

import {useEffect, useRef, useState } from "react";

import {axiosInstance} from "../../../../config";
import Pop from "../popup/Pop";
import MessageBox from "../message/MessageBox";
import { useLocation } from 'react-router-dom';
import * as Icons from "react-icons/fa";
import * as Icon from "react-icons/md";

const Contact = () => {
  const formRef = useRef();
  const[name,setName]=useState("");
  const[subject,setSubject]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const [done,setDone] =useState(false);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState([]);

  const location = useLocation()

  


useEffect(()=> {
  if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
      }
  } else {
  window.scrollTo({top:0,left:0, behavior: "smooth"})
  }
}, [location,])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      name, 
      subject,
      email,
      message
    };
   
    try {
      await axiosInstance.post("/contact", newMessage);
      setDone(true)
    
    }  catch (err) {
      setError(err.message);
      
    }
  };

 

const func =(e)=>{
  e.preventDefault();
  setDone(false)

}

useEffect(()=>{
 if(done===true){
  formRef.current?.reset();
 }


},[done])


useEffect(()=>{
  const fetchInfo = async () => {
  try{
   const infor =   await axiosInstance.get("/address");
   setInfo(infor.data[0])
  }catch(err){
    console.log(err)
  }
}
fetchInfo()
 
 },[])

 const {address,tel,place} = info || {};

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's
          <span className="textC">
           Work
           </span>
           
            together</h1>
          <div className="c-info">
            <div className="c-info-item">
              
              <Icons.FaPhone style={{marginRight:'10px'}} />
              
             {tel || '...........'}
            </div>
            <div className="c-info-item" >
             
              <Icon.MdEmail style={{marginRight:'10px'}} />
              
              {address || '...........'}
            </div>
            <div className="c-info-item">
              
              <Icons.FaMapMarkerAlt style={{marginRight:'10px'}}/>
             
              {place || 'Giza , Egypt'}
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your idea ?</b> Always available for
            freelancing if the project is good for me
          </p>
          <form className="c-column"  ref={formRef} onSubmit={handleSubmit} > 
            <input  type="text" placeholder="Name" name="user_name"  onChange={e=>setName(e.target.value)}/>
            <input  type="text" placeholder="Subject" name="user_subject" onChange={e=>setSubject(e.target.value)} />
            <input  required='true'   type="email" placeholder="Email" name="user_email"  onChange={e=>setEmail(e.target.value)} />
            <div className="area">
            <textarea required='true'  rows="5" placeholder="Message" name="message" onChange={e=>setMessage(e.target.value)} />
            <button type="submit">Submit</button>
            {done&&<Pop func={func}/>}
            {error&&(
             <MessageBox variant="danger">{error}</MessageBox>
            )
         }

            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
