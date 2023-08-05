import Link from "next/link";

import navStyles from "@/styles/Nav.module.css";

const Nav = () => (
  <nav className={navStyles.container}>
    <ul>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/products">Services</Link>
      </li>
      <li>
        <Link href="/products">Company</Link>
      </li>
      <li>
        <Link href="/products">Pricing</Link>
      </li>
    </ul>
  </nav>
);
export default Nav;
