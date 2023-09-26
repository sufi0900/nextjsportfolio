import React from "react";

import About from "@/app/about/page";
import Skill from "@/app/skills/page";
import Project from "@/app/Project/page";
import Post from "@/app/post/page";
import Contact from "@/app/Contact/page";
import Footer from "@/app/footer/page";
const HomeComponents = () => {
  return (
    <div>
      <About />
      <Skill />
      <Project />
      <Post />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeComponents;
