import { Roboto } from "next/font/google";

import Meta from "./Meta";
import Header from "./Header";

const roboto = Roboto({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={roboto.className}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
