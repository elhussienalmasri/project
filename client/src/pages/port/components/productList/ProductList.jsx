
import React from 'react';
import { products } from "../../data";
import Product from "../product/Product"
import "./productList.css";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const ProductList = () => {

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

  return (
    <div className="projects"  id='projects'>
        {/* <h2 className="title ">Projects</h2> */}
        <div className="contain">
          {/* <h1 >About </h1> */}
          <span style={{"--i" : "1"}}>P</span>
          <span style={{"--i" : "2"}}>r</span>
          <span style={{"--i" : "3"}}>o</span>
          <span style={{"--i" : "4"}}>j</span>
          <span style={{"--i" : "5"}}>e</span>
          <span style={{"--i" : "6"}}>c</span>
          <span style={{"--i" : "7"}}>t</span>
          <span style={{"--i" : "8"}}>s</span>

          {/* <span style={{"--i" : "6"}}>n</span>
          <span style={{"--i" : "8"}} >g</span> */}
        </div>
        <div className="content">
         {products.map((item) => (
           <Product style={{flex:'25%'}} key={item.id} img={item.image} title={item.title} 
            category={item.category} anch={item.anch} href={item.href} target={item.target} />
         ))}
       </div>
      
      </div>)
};

export default ProductList;



