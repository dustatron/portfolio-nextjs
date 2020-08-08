import s from '../scss/components/_about.module.scss';
import BlockContent from '@sanity/block-content-to-react';
import client from '../client';

const About = ({ content }) => {
  const { title = '', body = [] } = content;

  return (
    <div className={s['about']} id='about'>
      <div className={s['about-bottom']}>
        <div className={s['about-bottom-title']}>{title}</div>
        <div className={s['about-profile-img']}>
          <img src='/media/blue-dusty.png' alt='my face' />
        </div>
        <div className={s['about-bottom-body']}>
          <div className={s['about-bottom-bullets']}>
            <BlockContent blocks={body} {...client.config()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
