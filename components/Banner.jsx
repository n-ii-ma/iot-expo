import Image from "next/image";

import bannerStyles from "@/styles/Banner.module.css";

const Banner = () => (
  <div className={bannerStyles.container}>
    <Image src="/banner.jpg" fill alt="Abstract Internet of Things Picture" />
    <div className={bannerStyles.titleContainer}>
      <h1>
        Put Your <span>IoT Projects</span> into Our Hands.
      </h1>
      <h3>
        From personal to enterprise...
        <br />
        We complete them in no time.
      </h3>
    </div>
  </div>
);
export default Banner;
