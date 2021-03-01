import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  const currentUser = "gabriel";
  const articleType = "diary";

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href={`/articles`}>My Articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
