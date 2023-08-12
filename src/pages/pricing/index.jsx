import Image from "next/image";

import pricingStyles from "@/styles/Pricing.module.css";

const DATA = [
  {
    id: 1,
    title: "Starter",
    price: "$99",
    purpose: "For developers or personal projects",
    features: [
      "10 Monthly Projects",
      "Community Support",
      "Advanced Analytics",
      "Extended Support",
      "250GB Storage",
    ],
  },
  {
    id: 2,
    title: "Pro",
    price: "$149",
    purpose: "For startups or small projects",
    features: [
      "100 Monthly Projects",
      "Community Support",
      "Advanced Analytics",
      "Extended Support",
      "Extended Features",
      "500GB Storage",
    ],
  },
  {
    id: 3,
    title: "Ultimate",
    price: "$199",
    purpose: "For large or enterprise projects",
    features: [
      "150 Monthly Projects",
      "Community Support",
      "Advanced Analytics",
      "Extended Support",
      "Extended Features",
      "Daily Backups",
      "Unlimited Storage",
    ],
  },
];

const Pricing = () => {
  return (
    <section className={pricingStyles.container}>
      <Image src="/pricing.jpg" fill alt="Smart city at night" />
      <section className={pricingStyles.priceBox}>
        {DATA.map((plan) => (
          <article
            key={plan.id}
            style={{ height: plan.title === "Pro" && "100%" }}
          >
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
            <div className={pricingStyles.footer}>
              <button>Choose Plan</button>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Pricing;
