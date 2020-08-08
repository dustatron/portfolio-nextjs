import s from '../scss/components/_header.module.scss';
import EmailSVG from '../public/svg/email.svg';
import GithubSVG from '../public/svg/github.svg';
import LinkedinSVG from '../public/svg/linkedin.svg';
import TwitterSVG from '../public/svg/twitter.svg';
import TechStuffSVG from '../public/svg/tech-stuff.svg';

const Header = () => {
  return (
    <div className={s['header']} id='top'>
      {/* <img src='/media/header.png' alt='background' /> */}
      <div className={s['header-title']}>
        <p>Dusty McCord</p>
      </div>
      <div className={s['header-subtitle']}>
        <p>Front-end | Full Stack Developer</p>
      </div>

      <div className={s['header-links']}>
        <a
          href='https://www.linkedin.com/in/dustymccord/'
          target='_blank'
          rel='noopener noreferrer'>
          <LinkedinSVG className={s['header-links-icons']} />
          {/* <img src='/media/icons/linkedin.svg' alt='linkedin' /> */}
        </a>
        <a
          href='https://github.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <GithubSVG className={s['header-links-icons']} />
          {/* <img src='/media/icons/github-simple.svg' alt='github' /> */}
        </a>

        <a
          href='https://twitter.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <TwitterSVG className={s['header-links-icons']} />
          {/* <img src='/media/icons/twitter.svg' alt='twitter' /> */}
        </a>
        <a
          href='mailto:dustymccord@gmail.com'
          target='_blank'
          rel='noopener noreferrer'>
          <EmailSVG className={s['header-links-icons']} />
          {/* <img src='/media/icons/mailbox.svg' alt='linkedin' /> */}
        </a>
      </div>
      <div className={s['header-image']}>
        <TechStuffSVG />
        {/* <img
          src='/media/icons/tech-stuff-1.svg'
          alt='tech-stuff graphic'
          id='about'
        /> */}
      </div>
    </div>
  );
};

export default Header;
