import React, { useState } from "react";

import s from "../scss/components/_project-list.module.scss";
import ProjectIcon from "./ProjectIcon";

const ProjectList = (props) => {
  const { projects = [], categories = [] } = props;
  const firstSix = projects.sort((a, b) => a.orderBy - b.orderBy).slice(0, 6);

  const [selected, setSelected] = useState(0);
  const [projectList, setProjectList] = useState(firstSix);

  const updateSelected = (index, value, id) => {
    setSelected(index);

    const newList = [];
    for (let index = 0; index < projects.length; index++) {
      for (let j = 0; j < projects[index].categories.length; j++) {
        if (projects[index].categories[j]._ref === id) {
          newList.push(projects[index]);
        }
      }
    }

    if (value === "Show All") {
      setProjectList(firstSix);
    } else {
      setProjectList(newList);
    }
    return setSelected(index);
  };

  return (
    <div className={s["project-list"]}>
      <div className={s["project-list-title"]} id="projects">
        My Recent Projects
      </div>
      <div className={s["project-list-tech"]}>
        {categories.map((tech, index) => (
          <div key={tech._id}>
            {tech.important ? (
              <div
                key={tech._id}
                id={tech._id}
                className={`${s[`project-list-tech-box`]} ${
                  selected === index ? s["active-box"] : ""
                }`}
                onClick={() => {
                  updateSelected(index, tech.title, tech._id);
                }}
              >
                {tech.title}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className={s["project-list-icons"]}>
        {projectList &&
          projectList
            .slice(0, 6)
            .map((proj) => <ProjectIcon key={proj._id} project={proj} />)}
      </div>
      {/* <div className={s['project-list-btn']}>
        <Link href='/all_projects'>
          <a>
            <button>All Projects</button>
          </a>
        </Link>
      </div> */}
    </div>
  );
};

export default ProjectList;
