import Link from "next/link";

import Nav from "./Nav";

import headerStyles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.container}>
      <Link href="/">
        <h1 className={headerStyles.title}>
          IoT <span id="span">Expo</span>
        </h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
