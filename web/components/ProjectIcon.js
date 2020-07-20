import PropTypes from 'prop-types';
import s from '../scss/components/_project-icon.module.scss';
import imageUrlBuilder from '@sanity/image-url';
import { useSpring, animated } from 'react-spring';
import client from '../client';
import Link from 'next/link';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1.05,
];

const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ProjectIcon = ({ project }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 8, tension: 550, friction: 60 },
  }));

  return (
    <Link href='/project/[slug]' as={`/project/${project.slug.current}`}>
      <a>
        <animated.div
          className={s[`project-icon`]}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}>
          <div className={s['project-icon-bar']}>
            <ul>
              <li className={`${s['project-icon-bar-circle']} ${s.red}`}></li>
              <li
                className={`${s['project-icon-bar-circle']} ${s.orange}`}></li>
              <li className={`${s['project-icon-bar-circle']} ${s.green}`}></li>
            </ul>
            <div className={s['project-icon-bar-title']}>{project.title}</div>
            <div></div>
          </div>
          <div className={s['project-icon-img']}>
            <img src={urlFor(project.mainImage)} alt='screenshot' />
          </div>
        </animated.div>
      </a>
    </Link>
  );
};

ProjectIcon.proTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectIcon;
