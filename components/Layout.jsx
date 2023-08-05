import { Roboto_Flex } from "next/font/google";

import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

const roboto = Roboto_Flex({
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
        <Footer />
      </div>
    </>
  );
};

export default Layout;
