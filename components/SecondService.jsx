import Image from "next/image";

import secondServiceStyles from "@/styles/SecondService.module.css";

const SecondService = () => {
  return (
    <section id="services" className={secondServiceStyles.container}>
      <article>
        <section>
          <h3>
            Combine your <span>IoT Projects</span> with the power of AI and 5G
          </h3>
          <h5>
            We bring together two of the prominent pillars of technology so your
            projects can shine.
          </h5>
        </section>
        <ul>
          <li className={secondServiceStyles.listItems}>
            <p>
              AI:{" "}
              <span>
                Use the power of AI in your projects to outgrow any competetion
                in your field.
              </span>
            </p>
          </li>
          <li
            className={secondServiceStyles.listItems}
            style={{ margin: "1.5em 0" }}
          >
            <p>
              5G:{" "}
              <span>
                Implement the most scalable IoT technology to enjoy connectivity
                like never before.
              </span>
            </p>
          </li>
          <li className={secondServiceStyles.listItems}>
            <p>
              Cloud:{" "}
              <span>
                Keep your projects in our secure cloud storage and access them
                from anywhere.
              </span>
            </p>
          </li>
        </ul>
      </article>
      <figure>
        <Image
          src="/secondService.svg"
          fill
          alt="Isometric flowchart with artificial intelligence technologies"
        />
      </figure>
    </section>
  );
};

export default SecondService;
