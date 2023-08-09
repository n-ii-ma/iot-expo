import Image from "next/image";

import aboutUsStyles from "@/styles/AboutUs.module.css";

const AboutUs = () => (
  <section className={aboutUsStyles.container}>
    <Image src="/about_us.jpg" fill alt="Smart devices network web" />
    <article>
      <h1>
        We strive to turn your dreams into <span>reality</span>
      </h1>
      <p>
        Here at <span>IoT</span> Expo, we deliver a top-notch quality in
        completing your projects both in personal and enterpise environments.
        <br />
        <p style={{ marginTop: "1em" }}>
          Our team consists of experienced experts in the field of IoT who will
          accomplish any of your complex project requirements.
        </p>
        <br />
        With more than 5 years of experience, your projects will be in our safe
        hands.
      </p>
    </article>
  </section>
);

export default AboutUs;
