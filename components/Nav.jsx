import Link from "next/link";

import navStyles from "@/styles/Nav.module.css";

const Nav = () => (
  <nav className={navStyles.container}>
    <ul>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/about-us">Company</Link>
      </li>
      <li>
        <Link href="/pricing">Pricing</Link>
      </li>
    </ul>
  </nav>
);
export default Nav;
