import s from '../scss/components/_about.module.scss';
import BlockContent from '@sanity/block-content-to-react';
import client from '../client';

const About = ({ content }) => {
  const { title = '', body = [] } = content;
  return (
    <div className={s['about']}>
      <div className={s['about-top']} id='about'>
        <img src='/media/icons/tech-stuff-1.svg' alt='tech-stuff graphic' />
      </div>
      <div className={s['about-bottom']}>
        <div className={s['about-bottom-title']}>{title}</div>
        <div className={s['about-bottom-bullets']}>
          <BlockContent
            blocks={body}
            className={s['about-bottom-bullets']}
            // imageOptions={{ w: 320, h: 240, fit: 'max', margin: 'auto' }}
            {...client.config()}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
