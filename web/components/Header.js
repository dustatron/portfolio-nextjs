import s from '../scss/components/_header.module.scss';

const Header = () => {
  return (
    <div className={s['header']} id='top'>
      <img src='/media/header.png' alt='background' />
      <div className={s['header-title']}>
        <p>Hi,</p>
        <p>I'm Dusty</p>
        <p>A Front-end Developer</p>
      </div>
      <div className={s['header-links']}>
        <a
          href='https://www.linkedin.com/in/dustymccord/'
          target='_blank'
          rel='noopener noreferrer'>
          <img src='/media/icons/linkedin.svg' alt='linkedin' />
        </a>
        <a
          href='https://github.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <img src='/media/icons/github-simple.svg' alt='github' />
        </a>

        <a
          href='https://twitter.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <img src='/media/icons/twitter.svg' alt='twitter' />
        </a>
        <a
          href='mailto:dustymccord@gmail.com'
          target='_blank'
          rel='noopener noreferrer'>
          <img src='/media/icons/mailbox.svg' alt='linkedin' />
        </a>
      </div>
    </div>
  );
};

export default Header;
