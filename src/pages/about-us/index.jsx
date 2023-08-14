import Image from "next/image";

import Meta from "../../../components/Meta";

import aboutUsStyles from "@/styles/AboutUs.module.css";

const AboutUs = () => (
  <>
    <Meta title="About Us" description="About our company and services" />
    <section className={aboutUsStyles.container}>
      <Image src="/images/about_us.jpg" fill alt="Smart devices network web" />
      <article>
        <h1>
          We strive to turn your dreams into <span>reality</span>
        </h1>
        <p>
          Here at IoT Expo, we deliver a top-notch quality in completing your
          projects both in personal and enterpise environments.
        </p>
        <p style={{ margin: "1em 0" }}>
          Our team consists of experienced experts in the field of IoT who will
          accomplish any of your complex project requirements.
        </p>
        <p>
          With more than 5 years of experience, your projects will be in our
          safe hands.
        </p>
      </article>
    </section>
  </>
);

export default AboutUs;
