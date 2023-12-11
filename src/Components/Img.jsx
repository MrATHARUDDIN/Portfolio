import React from "react"; // Make sure to import React if it's not imported

import Photo from "../assets/cropped_image.png";
import linkdin from "../assets/linkedin.png";
import github from "../assets/github-logo.png";
import { Link } from "react-router-dom";

const Img = () => {
  // const handleDownloadCv = () => {
  //   // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
  //   const cvFilePath = 'path/to/your/cv.pdf';
  //   const link = document.createElement('a');
  //   link.href = cvFilePath;
  //   link.download = 'Your_CV.pdf'; // You can customize the downloaded file name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <div className="flex gap-20 justify-center mt-32 mr-10">
      <img src={Photo} alt="" />
      <div className="mt-5 ml-5">
        <h1 className="ml-12 mb-1 font-medium text-lg">Hello I'm</h1>
        <h1 className="font-bold text-2xl">Md Athar Uddin</h1>
        <h1 className="font-semibold text-lg text-gray-700">Web Developer</h1>
        <div className="mt-3 mb-5 flex gap-2">
          <button className="btn bg-gray-300 font-semibold">DownLoad Cv</button>
          <Link to="/contact">
            <button className="btn bg-gray-300 font-semibold">Contact Me</button>
          </Link>
        </div>
        <div className="flex gap-4 ml-12">
          <a href="https://www.linkedin.com/in/athar-uddin-892061292/" target="_blank" rel="noopener noreferrer">
            <img src={linkdin} className="w-9 h-9" alt="linkedin" />
          </a>
          <a href="https://github.com/MrATHARUDDIN" target="_blank" rel="noopener noreferrer">
            <img src={github} className="w-9 h-9" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Img;
