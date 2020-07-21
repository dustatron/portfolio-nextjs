import React, { useState } from 'react';

import s from '../scss/components/_project-list.module.scss';
import ProjectIcon from './ProjectIcon';

const ProjectList = (props) => {
  const { projects = [], categories = [] } = props;

  const [selected, setSelected] = useState(0);
  const [projectList, setProjectList] = useState(projects);

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

    if (value === 'Show All') {
      setProjectList(projects);
    } else {
      setProjectList(newList);
    }
    return setSelected(index);
  };

  return (
    <div className={s['project-list']} id='projects'>
      <div className={s['project-list-title']}>My Recent Projects</div>
      <div className={s['project-list-tech']}>
        {categories.map((tech, index) => (
          <div
            key={tech._id}
            id={tech._id}
            className={`${s[`project-list-tech-box`]} ${
              selected === index ? s['active-box'] : ''
            }`}
            onClick={() => {
              updateSelected(index, tech.title, tech._id);
            }}>
            {tech.title}
          </div>
        ))}
      </div>
      <div className={s['project-list-icons']}>
        {projectList &&
          projectList.map((proj) => (
            <ProjectIcon key={proj._id} project={proj} />
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
