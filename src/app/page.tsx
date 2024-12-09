import React from "react";
import Navbar from "./Component/navbar";
import Hero from "./Component/hero";
import Featured from "./Component/featured";
import Latest from "./Component/latest";
import Footer from "./Component/footer";
import Blog from "./Component/blog";

//
export default function Home() {
  return (
    <div>
    
     
      <Navbar/>
      <Hero/>
      <Featured/>
      <Latest/>
      <Blog/>
      <Footer/>
    </div>

    
  );
}