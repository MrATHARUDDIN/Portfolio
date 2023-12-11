import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const Skill = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [fadeIn, setFadeIn] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        setSkillsData(data);
        setFadeIn({ opacity: 10 });
      });
  }, [setFadeIn]);

  return (
    <animated.div style={fadeIn}>
      <div>
        <h1 className="mt-32 font-bold text-3xl text-center mb-10">My Skills</h1>
        <section className="flex flex-wrap justify-center">
          {skillsData.map((skill, index) => (
            <div key={index} className="card w-72 bg-base-200 shadow-xl m-4">
              <figure>
                <img src={skill.img} className="w-20 mt-4 h-20" alt={skill.Skillname} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{skill.Skillname}</h2>
                <p>{skill.experience}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{skill.skilltype}</div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </animated.div>
  );
};

export default Skill;
