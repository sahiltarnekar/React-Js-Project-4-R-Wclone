import React from "react";
import Navbar from "../layout/Navbar";
import Baner from "../layout/Baner";
import Footer from "../layout/Footer";
import Studybanner from "../layout/Studybanner";
import Topcourses from "../layout/Topcourses";
import Populartopic from "../layout/Populartopic";
import Planing from "../layout/Planing";
import Courses from "../layout/Courses";
import Number from "../layout/Number";
import Review from "../layout/Review";
function Home() {
  return (
    <>
  <Navbar />
  <Baner />
  <Studybanner />
  <Topcourses />
  <Populartopic />
  <Planing />
  <Courses />
  <Number />
  <Review />
  <Footer />
    </>
  );
}

export default Home;
