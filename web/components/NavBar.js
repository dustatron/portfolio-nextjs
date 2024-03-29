// import Link from 'next/Link';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import s from "../scss/components/_navbar.module.scss";
import LinkSmoothScroll from "../utils/LinkSmoothScroll";

const NavBar = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, []);

  const handleClick = (val) => {
    setCurrentPath(val);
  };

  return (
    <div className={s["navbar"]}>
      <div className={s["navbar-logo"]}>
        <img src="/media/icons/captain.png" alt="logo" />
      </div>

      <ul className={s["navbar-list"]}>
        <li
          onClick={() => {
            handleClick("/#top");
          }}
        >
          <LinkSmoothScroll href="/#top">
            <a className={`${s[`navbar-list-item`]} ${currentPath === "/#top" ? s.selected : ""}`}>
              <div className={`${s["navbar-list-item-img"]} `}>
                <img src="/media/icons/home.png" alt="home" />
              </div>
              <div className={s["navbar-list-item-copy"]}>home</div>
            </a>
          </LinkSmoothScroll>
        </li>
        <li
          onClick={() => {
            handleClick("/#about");
          }}
        >
          <LinkSmoothScroll href="/#about">
            <a className={`${s[`navbar-list-item`]} ${currentPath === "/#about" ? s.selected : ""}`}>
              <div className={s["navbar-list-item-img"]}>
                <img src="/media/icons/rocket.png" alt="About" />
              </div>
              <div className={s["navbar-list-item-copy"]}>About</div>
            </a>
          </LinkSmoothScroll>
        </li>
        <li
          onClick={() => {
            handleClick("/#projects");
          }}
        >
          <LinkSmoothScroll href="/#projects">
            <a className={`${s[`navbar-list-item`]} ${currentPath === "/#projects" ? s.selected : ""}`}>
              <div className={s["navbar-list-item-img"]}>
                <img src="/media/icons/projects.png" alt="Projects" />
              </div>
              <div className={s["navbar-list-item-copy"]}>Projects</div>
            </a>
          </LinkSmoothScroll>
        </li>
        <li
          onClick={() => {
            handleClick("/#contact");
          }}
        >
          <LinkSmoothScroll href="/#contact">
            <a className={`${s[`navbar-list-item`]} ${currentPath === "/#contact" ? s.selected : ""}`}>
              <div className={s["navbar-list-item-img"]}>
                <img src="/media/icons/mail.png" alt="contact" />
              </div>
              <div className={s["navbar-list-item-copy"]}>Contact</div>
            </a>
          </LinkSmoothScroll>
        </li>
        <li>
          <a className={s["navbar-list-item"]} href="https://docs.google.com/document/d/1NYtq-kCRNeJzIqrekXTjx8Uys6ZjkFEckYpWSvwc7zc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className={s["navbar-list-item-img"]}>
              <img src="/media/icons/clipboard.png" alt="resume" />
            </div>
            <div className={s["navbar-list-item-copy"]}>Resume</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
