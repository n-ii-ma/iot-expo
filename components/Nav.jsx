import Link from "next/link";
import { useRouter } from "next/router";

import navStyles from "@/styles/Nav.module.css";

const Nav = () => {
  const { asPath } = useRouter();

  return (
    <nav className={navStyles.container}>
      <ul>
        <li
          className={
            asPath === "/#services"
              ? navStyles.activeLink
              : navStyles.inactiveLink
          }
        >
          <Link href="/#services">Services</Link>
        </li>
        <li
          className={
            asPath === "/about-us"
              ? navStyles.activeLink
              : navStyles.inactiveLink
          }
        >
          <Link href="/about-us">Company</Link>
        </li>
        <li
          className={
            asPath === "/pricing"
              ? navStyles.activeLink
              : navStyles.inactiveLink
          }
        >
          <Link href="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
