import s from '../scss/components/_contact.module.scss';
import PropTypes from 'react';
import BlockContent from '@sanity/block-content-to-react';
import client from '../client';

const Contact = ({ content }) => {
  const { title, body } = content;
  return (
    <div className={s['contact']} id='contact'>
      <div className={s['contact-title']}>{title ? title : ''}</div>
      <div className={s['contact-paragraph']}>
        <BlockContent
          className={s['project-details-right-detail']}
          blocks={body}
          {...client.config()}
        />
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

Contact.propTypes = {
  content: PropTypes.object,
};

export default Contact;
