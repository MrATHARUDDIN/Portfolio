import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
            <section className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
            {projectsData.map((project, index) => (
          <div key={index} className="card w-[33rem] bg-base-200 shadow-xl m-4">
            <div className="card-body">
                <img src={project.img1} alt="" />
              <div>
                <h2 className="card-title">{project.title}</h2>
              </div>
              <h2 className="card-title mt-5">
                <span className="text-blue-500">Technology</span>:{" "}
                {project.Technology}
              </h2>
              <div className="card-actions mr-14 justify-end">
              <Link to={`/Projects/${project.id}`}>
              <button className="btn bg-violet-400">View Details</button>
              </Link>
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