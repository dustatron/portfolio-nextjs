import s from '../scss/components/_contact.module.scss';

const Contact = () => {
  return (
    <div className={s['contact']} id='contact'>
      <div className={s['contact-title']}>Lets Talk</div>
      <div className={s['contact-paragraph']}>
        Wanna get in touch or talk about a project? Feel Free to contact me via
        email at
        <a href='mailto:dustymccord@gmail.com'>
          <span className={s['contact-paragraph-name']}>
            {' '}
            dustymccord@gmail.com{' '}
          </span>
        </a>
        and view
        <a href='https://docs.google.com/document/d/1fIFS3Dhcqr3sVAJxUaqoQ-Ws92Yl9xRoHjzTJI_rTGE/edit'>
          <span className={s['contact-paragraph-name']}> my Resume here.</span>
        </a>
      </div>
      <div className={s['contact-buttons']}>
        <a href='mailto:dustymccord@gmail.com'>
          <button className={s['contact-buttons-email']}>
            <img src='/media/icons/mailbox.svg' alt='mailbox' /> email
          </button>
        </a>
        <a
          href='https://www.linkedin.com/in/dustymccord/'
          target='_blank'
          rel='noopener noreferrer'>
          <button className={s['contact-buttons-linkedin']}>
            <img src='/media/icons/linkedin.svg' alt='linkedin' />
            linkedin
          </button>
        </a>
        <a
          href='https://twitter.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <button className={s['contact-buttons-twitter']}>
            <img src='/media/icons/twitter.svg' alt='twitter' />
            twitter
          </button>
        </a>
        <a
          href='https://github.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <button className={s['contact-buttons-github']}>
            <img src='/media/icons/github-simple.svg' alt='github' />
            github
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
