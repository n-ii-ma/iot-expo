import { ImNewspaper } from "react-icons/im";

import newsletterStyles from "@/styles/Newsletter.module.css";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };

  return (
    <section className={newsletterStyles.container}>
      <div className={newsletterStyles.iconContainer}>
        <ImNewspaper size="10em" color="var(--primary-color)" />
      </div>
      <article>
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Get the latest updates, useful resources and pre-made solutions
          directly in your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className={newsletterStyles.inputContainer}
        >
          <input type="email" placeholder="Type your email..." required />
          <button type="submit">Subscribe</button>
        </form>
      </article>
    </section>
  );
};

export default Newsletter;
