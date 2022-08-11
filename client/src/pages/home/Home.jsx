import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./home.css";
import { axiosInstance } from "../../config";
import { useLocation } from 'react-router-dom';
import LoadingSpinner from "../port/components/spinner/spinner";
import MessageBox from "../port/components/message/MessageBox";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [empty, setEmpty] =useState(false);


  useEffect(() => {
    const fetchPosts = async () => {

      try{

        setLoading(true);
        const res = await axiosInstance.get("/posts" + search);
        setPosts(res.data);
        setLoading(false);

         if (res.data.length < 1){
           setEmpty(true);}

           console.log(res.data)

      }
      catch (err) {
        setError(err.message);
        setLoading(false);
      }
      // finally{
      //   if (posts.length < 1){
      //     setEmpty(true);

      //     console.log(posts);
      //   }

     // }
    
    };
    fetchPosts();
  }, [search]);


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
    <div id='blog'>
      {loading?
     ( <LoadingSpinner></LoadingSpinner>): error?(
    <div style={{height:'50vh',display:'flex',alignItems:'center',justifyContent:"center"}} > 
    <MessageBox variant="danger">{error}</MessageBox>
    </div>
     ):empty ?
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
         Sorry , There is no blog yet </div> :(
     <>

      <Header />
      <div className="home">
        <Posts posts={posts} />
       
      </div>
      </>


     )}

      
    </div>
  );
}
