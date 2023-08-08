import Image from "next/image";

import firstServiceStyles from "@/styles/FirstService.module.css";

const FirstService = () => {
  return (
    <section id="services" className={firstServiceStyles.container}>
      <figure>
        <Image
          src="/firstService.svg"
          fill
          alt="Isometric household appliances with connectivity"
        />
      </figure>
      <article>
        <section>
          <h3>
            Bring your <span>IoT Projects</span> into life with our experienced
            team
          </h3>
          <h5>
            Our team will handle your projects on any platform to bring complete
            connectivity to your devices.
          </h5>
        </section>
        <ul>
          <li className={firstServiceStyles.listItems}>
            <p>
              Personal:{" "}
              <span>
                Showcase your personal projects with proud and facilitate the
                world of IoT.
              </span>
            </p>
          </li>
          <li
            className={firstServiceStyles.listItems}
            style={{ margin: "2em 0" }}
          >
            <p>
              Enterprise:{" "}
              <span>
                Start profiting in your company by bringing your cutting-edge
                projects into perspective.
              </span>
            </p>
          </li>
          <li className={firstServiceStyles.listItems}>
            <p>
              Global:{" "}
              <span>
                No matter where you are, your projects will be done and
                delivered to you in no time.
              </span>
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default FirstService;
