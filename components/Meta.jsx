import Head from "next/head";

const Meta = ({ keywords, description, title }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta name="robots" content="all" />
    <meta charSet="utf-8" />
    <link rel="icon" href="/images/favicon.ico" />
    <title>{`IoT Expo | ${title}`}</title>
    meta
  </Head>
);

Meta.defaultProps = {
  title: "IoT Expo",
  keywords: "internet of things, iot, ai, 5g, tech, technology, smart, robots",
  description:
    "A website dedicated to completing personal and/or enterprise IoT projects",
};

export default Meta;
