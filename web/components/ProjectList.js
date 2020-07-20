import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';
import projectIcon from './ProjectIcon';

import React, { useState } from 'react';

import s from '../scss/components/_project-list.module.scss';
import ProjectIcon from './ProjectIcon';

const ProjectList = (props) => {
  const { projects = [], categories = [] } = props;
  const urlFor = (source) => {
    return imageUrlBuilder(client).image(source);
  };

  const [selected, setSelected] = useState(0);

  const updateSelected = (index, value) => {
    // const newList = ProjectData.filter((project) => {
    //   const lowerCase = project.techList.map((tech) =>
    //     tech.toLocaleLowerCase()
    //   );
    //   return lowerCase.includes(value.toLowerCase());
    // });

    if (value === 'show all') {
      setProjectList(initialState);
    } else {
      setProjectList(newList);
    }
    return setSelected(index);
  };

  return (
    <div className={s['project-list']} id='projects'>
      <div className={s['project-list-title']}>My Recent Projects</div>
      <div className={s['project-list-tech']}>
        <div
          className={`${s[`project-list-tech-box`]} ${
            selected === 'show all' ? s['active-box'] : ''
          }`}
          onClick={() => {
            updateSelected(0, 'show all');
          }}>
          Show All
        </div>
        {categories.map((tech, index) => (
          <div
            key={index}
            className={`${s[`project-list-tech-box`]} ${
              selected === index ? s['active-box'] : ''
            }`}
            onClick={() => {
              updateSelected(index, tech);
            }}>
            {tech.title}
          </div>
        ))}
      </div>
      <div className={s['project-list-icons']}>
        {projects &&
          projects.map((proj) => <ProjectIcon key={proj._id} project={proj} />)}
      </div>
    </div>
  );
};

export default ProjectList;
