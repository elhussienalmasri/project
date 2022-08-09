import { useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/skills";
import Clock from "./components/Clock/App.component";
import Bg from "./img/nature.png";
import Bge from "./img/intro.png";
import {axiosInstance} from "../../config";


const Port = () => {


  const [done, setDone] = useState(false);

  useEffect(() => {
    const fetchBack = async () => {
      try {
        let x = await axiosInstance.get("/background")
        console.log(x.data[0].background)



        if (x.data[0].background >= 1) {
          setDone(true)
        }


      } catch (err) {
        console.log(err)
      }
      // finally{
      //   console.log(x.data.background)
      // }
    }
    fetchBack()

  }, [done])


  useEffect(() => {
    console.log(`done${done}`)
  }, [done])



  return (
    <div>


      <div style={{
        backgroundImage: `url(${done ? Bge : Bg}) `, backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} >
        <Clock />
        <Intro />
      </ div>
      <About />
      <ProductList />
      <Skills />
      <Contact />
    </div>
  );
};

export default Port;
