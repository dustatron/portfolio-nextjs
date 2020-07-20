import Link from 'next/link';
import style from '../scss/components/_navbar.module.scss';

const NavBar = () => {
  const { navbar } = style;
  return (
    <div className={navbar}>
      <h3>NavBar</h3>
      <ul>
        <li>
          <Link href='/'>
            <a>Home </a>
          </Link>
        </li>
        <li>Pages</li>
        <li>Other</li>
      </ul>
    </div>
  );
};

export default NavBar;
