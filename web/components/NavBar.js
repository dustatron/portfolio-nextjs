import Link from 'next/link';
import s from '../scss/components/_navbar.module.scss';

const NavBar = () => {
  return (
    <div className={s['navbar']}>
      <div className={s['navbar-logo']}>
        <img src='/media/icons/captain.png' alt='logo' />
      </div>

      <ul className={s['navbar-list']}>
        <li>
          <Link href='/#top'>
            <a className={s[`navbar-list-item`]}>
              <div className={s['navbar-list-item-img']}>
                <img src='/media/icons/home.png' alt='home' />
              </div>
              <div className={s['navbar-list-item-copy']}>home</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/#about'>
            <a className={s[`navbar-list-item`]}>
              <div className={s['navbar-list-item-img']}>
                <img src='/media/icons/rocket.png' alt='About' />
              </div>
              <div className={s['navbar-list-item-copy']}>About</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/#projects'>
            <a className={s[`navbar-list-item`]}>
              <div className={s['navbar-list-item-img']}>
                <img src='/media/icons/projects.png' alt='Projects' />
              </div>
              <div className={s['navbar-list-item-copy']}>Projects</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/#contact'>
            <a className={s[`navbar-list-item`]}>
              <div className={s['navbar-list-item-img']}>
                <img src='/media/icons/mail.png' alt='contact' />
              </div>
              <div className={s['navbar-list-item-copy']}>Contact</div>
            </a>
          </Link>
        </li>
        <li>
          <a
            className={s['navbar-list-item']}
            href='https://docs.google.com/document/d/1fIFS3Dhcqr3sVAJxUaqoQ-Ws92Yl9xRoHjzTJI_rTGE/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'>
            <div className={s['navbar-list-item-img']}>
              <img src='/media/icons/clipboard.png' alt='resume' />
            </div>
            <div className={s['navbar-list-item-copy']}>Resume</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
