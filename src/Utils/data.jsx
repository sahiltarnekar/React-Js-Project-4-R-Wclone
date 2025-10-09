// Central data store for small UI pieces
import studyBannerLogo1 from "../assets/images/studybannerlogo1.png";
import studyBannerLogo2 from "../assets/images/studybannerlogo2.png";
import course1 from "../assets/images/1.jpg";
import course2 from "../assets/images/2.jpg";
import course3 from "../assets/images/3.jpg";
import course4 from "../assets/images/4.png";
import course5 from "../assets/images/5.jpg";
import course6 from "../assets/images/6.png";
import course7 from "../assets/images/7.png";
import course8 from "../assets/images/8.png";
import course9 from "../assets/images/9.jpg";
import course10 from "../assets/images/10.jpg";
import course11 from "../assets/images/11.jpg";
import course12 from "../assets/images/12.jpg";
import course13 from "../assets/images/13.png";
import course14 from "../assets/images/14.jpg";
import course15 from "../assets/images/15.png";
import course16 from "../assets/images/16.jpg";
import Planninglogo1 from "../assets/images/sl1.png";
import Planninglogo2 from "../assets/images/sl2.png";
import Planninglogo3 from "../assets/images/sl3.png";
import Planninglogo4 from "../assets/images/sl4.png";
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";


import { FaStar } from "react-icons/fa";
import { IoMdStarHalf } from "react-icons/io";
export const studyBannerData = [
  {
    id: 1,
    title: "Best Industry Leaders",
    img: studyBannerLogo1,
  },
  {
    id: 2,
    title: "Learn Courses Online",
    img: studyBannerLogo2,
  },
  {
    id: 3,
    title: "Book Library & Store",
    img: studyBannerLogo2,
  },
];

export const topCoursesData = [
  {
    id: 1,
    img: course1,
    title: "Full Stack Development",
    rating: 4.8,
    ratingicon: [
      <FaStar />,
      <FaStar />,
      <FaStar />,
      <FaStar />,
      <IoMdStarHalf />,
    ],
    students: 4832,
    price: "Rs. 3999",
  },
  {
    id: 2,
    img: course2,
    title: "Python",
    rating: 4.0,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 4077,
    price: "Rs. 3299",
  },
  {
    id: 3,
    img: course3,
    title: "UI/UX Design",
    rating: 5.0,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 5055,
    price: "Rs. 6599",
  },
  {
    id: 4,
    img: course4,
    title: "DSA - Data Structure & Algorithm with C++",
    rating: 4.7,
    ratingicon: [
      <FaStar />,
      <FaStar />,
      <FaStar />,
      <FaStar />,
      <IoMdStarHalf />,
    ],
    students: 4791,
    price: "Rs. 499",
  },
  {
    id: 5,
    img: course5,
    title: "Game Design",
    rating: 4.7,
    ratingicon: [
      <FaStar />,
      <FaStar />,
      <FaStar />,
      <FaStar />,
      <IoMdStarHalf />,
    ],
    students: 4732,
    price: "Rs. 4499",
  },
  {
    id: 6,
    img: course6,
    title: "Flutter Development",
    rating: 5.0,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 6711,
    price: "Rs. 5999",
  },
  {
    id: 7,
    img: course7,
    title: "Animation",
    rating: 3.2,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />],
    students: 3143,
    price: "Rs. 2399",
  },
  {
    id: 8,
    img: course8,
    title: "Graphic Design",
    rating: 4.4,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 3947,
    price: "Rs. 3599",
  },
];

export const PopulartopicData = [
  {
    id: 1,
    title: "Photoshop",
  },
  { id: 2, title: "Figma" },
  { id: 3, title: "React Js" },
  { id: 4, title: "JavaScript" },
  { id: 5, title: "Unity With 2D & 3D Games" },
  { id: 6, title: "C Language" },
  { id: 7, title: "Advance iOS" },
  { id: 8, title: "Django" },
  {
    id: 9,
    title: "Maya",
  },
  {
    id: 10,
    title: "Advance Flutter",
  },
];

export const PlaningData = [
  {
    id: 1,
    img: Planninglogo1,
    title:"Offline Mode",
    desc:"You Pick The Schedule",
  },
    {
    id: 2,
    img: Planninglogo2,
    title:"Flexible Classes",
    desc:"Download Classes",
  },
    {
    id: 3,
    img: Planninglogo3,
    title:"Flexible Classess",
    desc:"You Pick The Schedule",
  },
    {
    id: 4,
    img: Planninglogo4,
    title:"Educator Help",
    desc:"Always Get Answers",
  },

];

export const CoursesData = [
  {
    id: 1,
    img: course9,
    title: "iOS Development",
    rating: 5.0,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 5122,
    price: "Rs. 6999"
  },
  {
    id: 2,
    img: course10,
    title: "UI/UX Design",
    rating: 5.0,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 5055,
    price: "Rs. 6599"
  },
  {
    id: 3,
    img: course11,
    title: "AR-VR",
    rating: 4.0,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 4077,
    price: "Rs. 3299"
  },
  {
    id: 4,
    img: course12,
    title: "Game Design",
    rating: 4.7,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <IoMdStarHalf />],
    students: 4732,
    price: "Rs. 4499"
  },
  {
    id: 5,
    img: course13 ,
    title: "DSA - Data Structure & Algorithm with C++",
    rating: 4.7,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <IoMdStarHalf />],
    students: 4791,
    price: "Rs. 499"
  },
  {
    id: 6,
    img: course14, 
    title: "Game Development",
    rating: 4.9,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <IoMdStarHalf />],
    students: 4951,
    price: "Rs. 5299"
  },
  {
    id: 7,
    img: course15, 
    title: "Graphics Design",
    rating: 4.4,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 4561,
    price: "Rs. 3999"
  },
  {
    id: 8,
    img: course16, 
    title: "Android Development",
    rating: 5.0,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 6711,
    price: "Rs. 5999"
  }
]

export const NumberData = [
  {
    id: 1,
    count: "37500+",
    subtitle:"Learners & Students",
  },
   {
    id: 2,
    count: "50+",
    subtitle:"Total Courses",
  },
   {
    id: 1,
    count: "22+",
    subtitle:"Branch",
  },
    {
    id: 4,
    count: "100%",
    subtitle:"Success Students",
    }
]

export const ReviewData = [
  {
    id: 1,
    img: person1,
    name: "Meet Rakholiya",
    message:
      "The unique and internationally recognized course structure that helps students to keep updated with the latest trend and market requirements helps students be prepared for local and international job markets. This is the main reason I choose the institute's red and white group."
  },
  {
    id: 2,
    img: person2,
    name: "Krunal Trada",
    message:
      "As the tagline of the red and white institute suggests, \"one step in changing education chain\", they work hard to do so. Either by providing practical knowledge or full back support while getting a job. Due to these reasons, I joined a red and white institute group."
  },
  {
    id: 3,
    img: person3,
    name: "Prit Dobariya",
    message:
      "I feel glad that I have chosen to be part of red and white international because, along with knowledge of the extracurricular activities such as personality development, sports week, and technical events such as \"code light\", these all have helped me to grow myself on a different level."
  }
]
