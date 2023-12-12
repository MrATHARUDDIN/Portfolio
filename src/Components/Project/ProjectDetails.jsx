import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import github from "../../assets/github-logo.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  // Filter the data based on the current page's ID
  const filteredData = data.filter((project) => project.id === parseInt(id));

  if (filteredData.length === 0) {
    return <p>Project details not found for ID: {id}</p>;
  }

  // Assuming that filteredData always has one item, you can use filteredData[0]
  const projectDetails = filteredData[0];

  return (
    <div>
      <h1 className="mt-10 text-center font-bold text-4xl">
        {projectDetails.title}
      </h1>
      <img src={projectDetails.img1} className="px-20 py-10" alt="" />
      <div className="flex gap-4">
        <h1 className="text-lg font-semibold">Server Side Repo :- </h1>
        <a href={projectDetails.ServerRepo} target="_blank" rel="noreferrer">
          <img src={github} className="w-8 h-8" alt="" />
        </a>
      </div>
      <div className="flex gap-4 mt-4">
        <h1 className="text-lg font-semibold">Client Side Repo :- </h1>
        <a href={projectDetails.ClientRepo} target="_blank" rel="noreferrer">
          <img src={github} className="w-8 ml-1 h-8" alt="" />
        </a>
      </div>
      {/* Phots */}
      <h1 className="text-4xl font-bold text-center mt-24 mb-10">Some Photo</h1>
      <div className="grid grid-cols-5">
        <PhotoProvider>
          <PhotoView src={projectDetails.img1}>
            <img src={projectDetails.img1} alt="" />
          </PhotoView>
          <PhotoView src={projectDetails.img2}>
            <img src={projectDetails.img2} alt="" />
          </PhotoView>
          <PhotoView src={projectDetails.img3}>
            <img src={projectDetails.img3} alt="" />
          </PhotoView>
          <PhotoView src={projectDetails.img4}>
            <img src={projectDetails.img4} alt="" />
          </PhotoView>
          <PhotoView src={projectDetails.img5}>
            <img src={projectDetails.img5} alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default ProjectDetails;
