import Link from "next/link";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

import footerStyles from "@/styles/Footer.module.css";

const Footer = () => (
  <footer className={footerStyles.container}>
    <section>
      <h3 className={footerStyles.title}>
        IoT <span>Expo</span>
      </h3>
      <p>
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </section>
    <section className={footerStyles.navContainer}>
      <h3>About Us</h3>
      <section>
        <Link href="/about-us">Company</Link>
        <Link href="/download/android">Android App</Link>
        <Link href="/download/ios">iOS App</Link>
      </section>
    </section>
    <section className={footerStyles.navContainer}>
      <h3>Help?</h3>
      <section>
        <Link href="/faq">FAQ</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms & conditions</Link>
      </section>
    </section>
    <section className={footerStyles.navContainer}>
      <h3>Follow Us</h3>
      <div className={footerStyles.socialContainer}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram size="1.5em" color="var(--primary-color)" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <BsTwitter size="1.5em" color="var(--primary-color)" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin size="1.5em" color="var(--primary-color)" />
        </a>
      </div>
    </section>
  </footer>
);

export default Footer;
