import Image from "next/image";

import Meta from "../../../components/Meta";
import api from "../../../config/axios.config";

import pricingStyles from "@/styles/Pricing.module.css";

const Pricing = ({ prices }) => (
  <>
    <Meta title="Pricing" description="Pricing plans for doing Iot projects" />
    <section className={pricingStyles.container}>
      <Image src="/images/pricing.jpg" fill alt="Smart city at night" />
      <section className={pricingStyles.priceBox}>
        {prices?.length &&
          prices.map((plan) => (
            <article key={plan.id}>
              <div>
                <div
                  className={
                    plan.title === "Pro"
                      ? pricingStyles.header
                      : `${pricingStyles.header} ${pricingStyles.commonHeader}`
                  }
                >
                  <h3>{plan.title}</h3>
                  <h4>{plan.price}</h4>
                  <p>per month</p>
                </div>
                <div className={pricingStyles.body}>
                  <h5>{plan.purpose}</h5>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={pricingStyles.footer}>
                <button>Choose Plan</button>
              </div>
            </article>
          ))}
      </section>
    </section>
  </>
);

export const getStaticProps = async () => {
  try {
    const response = await api.get("/prices");

    return {
      props: {
        prices: response.data,
      },
    };
  } catch (error) {
    // Return 404 page
    return {
      notFound: true,
    };
  }
};

export default Pricing;
