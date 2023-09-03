import React, { useState } from 'react';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import groq from 'groq';
import { useTransition, animated } from 'react-spring';

import Link from 'next/link';

import s from '../../scss/pages/_project.module.scss';

// get image link
const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
};

const project = ({ current, all }) => {
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

  const transition = useTransition(
    current,
    (project) => project.id,
    direction
  ); // returns array, (item, item key, styling)

  const currentIndex = all.findIndex(
    (item) => item._id === current._id
  );

  const prevLinkId = currentIndex - 1;
  const nextLinkId = currentIndex + 1;
  const lastProject = all.length;

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
  } = current;

  const handleNavLink = (direct, index) => {
    setDirection(direct);
  };

  return (
    <div className={s['project']}>
      <div className={s['project-header']}>
        <div className={s['project-header-nav']}>
          {currentIndex !== 0 ? (
            <Link
              href='/project/[slug]'
              as={`/project/${all[prevLinkId].slug.current}`}>
              <a
                onClick={() => {
                  handleNavLink(slideLeft, prevLinkId);
                }}>
                <div className={s['project-header-nav-prev']}>
                  <div className={s['chevron']}>
                    <img src='/media/icons/arrowleft.svg' alt='' />
                  </div>
                  Previous
                </div>
              </a>
            </Link>
          ) : (
            'First Project'
          )}
          {nextLinkId !== lastProject ? (
            <Link
              href='/project/[slug]'
              as={`/project/${all[nextLinkId].slug.current}`}>
              <a
                onClick={() => {
                  handleNavLink(slideRight, nextLinkId);
                }}>
                <div className={s['project-header-nav-back']}>
                  Next
                  <div className={s['chevron']}>
                    <img src='/media/icons/arrowright.svg' alt='' />
                  </div>
                </div>
              </a>
            </Link>
          ) : (
            ' Last Project'
          )}
        </div>
        <div className={s['project-header-title']}>{title}</div>
        <div className={s['project-header-img']}>
          {transition.map(({ _, key, props }) => (
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
            // className={s['project-details-right-detail']}
            blocks={details}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />
          {hurdles && !!hurdles.length && (
            <>
              <div className={s['project-details-right-title']}> Hurdles </div>
              <BlockContent
                // className={s['project-details-right-detail']}
                blocks={hurdles}
                imageOptions={{ w: 320, h: 240, fit: 'max' }}
                {...client.config()}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const queryCurrent = groq`
    *[_type == "project" && slug.current == $slug][0]{
      _id,
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

const queryAll = groq`
    *[_type == 'project']|order(publishedAt desc)
  `;

project.getInitialProps = async (context) => {
  const { slug = ' ' } = context.query;
  return {
    current: await client.fetch(queryCurrent, { slug }),
    all: await client.fetch(queryAll),
  };
};

export default project;
