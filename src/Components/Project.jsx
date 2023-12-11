import { useEffect, useState } from "react";

const Project = () => {
  const [projectsData, setprojectsData] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((res) => res.json())
      .then((data) => {
        setprojectsData(data);
      });
  }, []);

  return (
    <div>
      <h1 className="mt-32 mb-20 font-bold text-4xl text-center">
        My Projects
      </h1>
      <section className="flex flex-wrap mt-10 mb-10 gap-20 justify-center">
        {projectsData.map((project, index) => (
          <div key={index} className="card w-full bg-base-200 shadow-xl m-4">
            <div className="card-body">
              <div>
                <h2 className="card-title text-5xl mt-2 mb-5">{project.title}</h2>
              </div>
            <img src={project.img1} alt="" />
              <h2 className="card-title mt-5">
                <span className="text-blue-500">Technology</span>:{" "}
                {project.Technology}
              </h2>
              <div className="card-actions mr-14 justify-end">
                <a href={project.Livelink} target="_blank" rel="noreferrer">
                  <button className="btn btn-primary">View Project</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
