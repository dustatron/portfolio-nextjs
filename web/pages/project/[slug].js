import React, { useState } from 'react';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import groq from 'groq';
import { useTransition, animated } from 'react-spring';

import s from '../../scss/pages/_project.module.scss';

// get image link
const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

const project = (props) => {
  const slideRight = {
    from: { opacity: 0, marginLeft: -200, marginRight: 200 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    leave: { opacity: 0, marginLeft: 200, marginRight: -200 },
  };
  const slideLeft = {
    from: { opacity: 0, marginLeft: 200, marginRight: -200 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    leave: { opacity: 0, marginLeft: -200, marginRight: 200 },
  };

  const [direction, setDirection] = useState(slideRight);
  const transition = useTransition(project, (project) => project.id, direction); // returns array, (item, item key, styling)

  // deconstruct props
  const {
    title = 'Missing title',
    subtitle = 'Missing SubTitle',
    categories,
    imageMain,
    imageSub,
    details = [],
    hurdles = [],
    activeLink = '',
    githubLink = '',
  } = props;

  return (
    <div className={s['project']}>
      <div className={s['project-header']}>
        <div className='project-header-nav'>
          {/* {prevLinkId !== 0 ? (
            <Link
              // to={`/proj/${prevLinkId}`}
              onClick={() => {
                setDirection(slideLeft);
                updateView(2, prevLinkId);
              }}>
              <div className='project-header-nav-prev'>
                <div className='chevron'>
                  <img src={`${prevArrow}`} alt='' />
                </div>
                Previous
              </div>
            </Link>
          ) : (
            'First Project'
          )}
          {nextLinkId !== lastProject ? (
            <Link
              // to={`/proj/${nextLinkId}`}
              onClick={() => {
                setDirection(slideRight);
                updateView(2, nextLinkId);
              }}>
              <div className='project-header-nav-back'>
                Next
                <div className='chevron'>
                  <img src={`${nextArrow}`} alt='' />
                </div>
              </div>
            </Link>
          ) : (
            ' Last Project'
          )} */}
        </div>
        <div className={s['project-header-title']}>{title}</div>
        <div className={s['project-header-img']}>
          {transition.map(({ item, key, props }) => (
            <animated.div key={key} style={props}>
              <div className={s['project-header-img-body']}>
                <div className={s['project-icon-bar']}>
                  <ul>
                    <li
                      className={`${s['project-icon-bar-circle']} ${s.red}`}></li>
                    <li
                      className={`${s['project-icon-bar-circle']} ${s.orange}`}></li>
                    <li
                      className={`${s['project-icon-bar-circle']} ${s.green}`}></li>
                  </ul>
                  <div className={s['project-icon-bar-title']}>{title}</div>
                </div>
                {imageMain && (
                  <a
                    href={activeLink}
                    target='_blank'
                    without
                    rel='noopener noreferrer'>
                    <img
                      src={urlFor(imageMain)}
                      alt='screen shot'
                      className={s['project-header-img-body-image']}
                    />
                  </a>
                )}
              </div>
            </animated.div>
          ))}
        </div>

        {/* End Project header*/}
      </div>

      <div className={s['project-tech']}>
        <div className={s['project-tech-top']}>
          <div className={s['project-tech-top-title']}>Technologies</div>
          <div className={s['project-tech-top-links']}>
            <a
              href={`${activeLink}`}
              target='_blank'
              without
              rel='noopener noreferrer'>
              Active Page
            </a>
            <a
              href={`${githubLink}`}
              target='_blank'
              without
              rel='noopener noreferrer'>
              GitHub
            </a>
          </div>
        </div>
        <div className={s['project-tech-bottom']}>
          {categories
            ? categories.map((item) => (
                <div key={item._id} className={s['project-tech-bottom-item']}>
                  {item}
                </div>
              ))
            : ''}
        </div>
      </div>

      <div className={s['project-details']}>
        <div className={s['project-details-left']}>
          {imageSub && <img src={urlFor(imageSub)} alt='screen shot' />}
        </div>
        <div className={s['project-details-right']}>
          <div className={s['project-details-right-title']}>{subtitle}</div>
          <BlockContent
            className={s['project-details-right-detail']}
            blocks={details}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
          <div className={s['project-details-right-title']}> Hurdles </div>
          <BlockContent
            className={s['project-details-right-detail']}
            blocks={hurdles}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
        </div>
      </div>
    </div>
  );
};

const query = groq`
    *[_type == "project" && slug.current == $slug][0]{
      title,
      subtitle,
      "categories": categories[]->title,
      "imageMain": mainImage,
      "imageSub": subImage,
      details,
      hurdles,
      activeLink,
      githubLink
    }
`;

project.getInitialProps = async function (context) {
  const { slug = ' ' } = context.query;
  return await client.fetch(query, { slug });
};

export default project;
