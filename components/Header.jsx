import Nav from "./Nav";

import headerStyles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        iOT <span>Expo</span>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
