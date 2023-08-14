import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

import Nav from "./Nav";

import headerStyles from "@/styles/Header.module.css";

const Header = () => {
  const headerRef = useRef(null); // Header ref
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position

  // Handle header visibility based on scroll
  const handleHeaderVisibility = useCallback(() => {
    // Header's position
    const headerPos =
      headerRef.current.offsetTop + headerRef.current.offsetHeight;

    // Current scroll position
    let currentScrollY = window.scrollY;

    // Show the header upon scrolling up, or if the header isn't fully passed
    if (lastScrollY > currentScrollY || currentScrollY < headerPos) {
      headerRef.current.style.top = "0";
    }
    // Hide the header upon scrolling down, or if the header is fully passed
    else {
      headerRef.current.style.top = `-${headerRef.current.offsetHeight}px`;
    }

    // Save the current scroll position for the next movement
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  // Show/hide header based on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderVisibility);

    // Cleanup
    return () => window.removeEventListener("scroll", handleHeaderVisibility);
  }, [handleHeaderVisibility]);

  return (
    <header ref={headerRef} className={headerStyles.container}>
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
