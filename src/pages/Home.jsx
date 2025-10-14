import React from "react";
import Navbar from "../layout/Navbar";
import Banner from "../layout/Banner";
import Footer from "../layout/Footer";
import Studybanner from "../layout/Studybanner";
import TopCourses from "../layout/Topcourses";
import Populartopic from "../layout/Populartopic";
import Planing from "../layout/Planing";
import Courses from "../layout/Courses";
import Number from "../layout/Number";
import Review from "../layout/Review";
function Home() {
  return (
    <>
  <Navbar />
  <Banner />
  <Studybanner />
  <TopCourses />
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
