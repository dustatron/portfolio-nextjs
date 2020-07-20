import s from '../scss/components/_about.module.scss';

const About = () => {
  return (
    <div className={s['about']}>
      <div className={s['about-top']} id='about'>
        <img src='/media/icons/tech-stuff-1.svg' alt='tech-stuff graphic' />
      </div>
      <div className={s['about-bottom']}>
        <div className={s['about-bottom-title']}>Hello, Nice to meet you.</div>
        <div className={s['about-bottom-bullets']}>
          <ul>
            <li>
              <div className={s['about-bottom-bullets-img']}>
                <img src='/media/icons/robot.svg' alt='video camera' />
              </div>
              <div className={s['about-bottom-bullets-copy']}>
                I am a web developer who also spent a decade in video production
                as an editor and animator. My hobby's have always included
                learning new skills and building things. Over the last few years
                I have been making and maintaining websites for friends and
                organizations that help build community and push my
                understanding of software development. At the end of 2019 I
                decided to pursue web development full time.
              </div>
            </li>
            <li>
              <div className={s['about-bottom-bullets-img']}>
                <img src='/media/icons/react-cloud.png' alt='cloud' />
              </div>
              <div className={s['about-bottom-bullets-copy']}>
                I am endlessly curious about full-stack development because I
                enjoy knowing how the sauce is made. The Front-End interests me
                as well because I love design, storytelling, and making
                interactive user interfaces that function and look pretty.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
