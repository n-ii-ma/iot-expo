import Head from "next/head";

const Meta = ({ keywords, description, title }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <meta name="robots" content="all" />
    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
    meta
  </Head>
);

Meta.defaultProps = {
  title: "iOT Expo",
  keywords: "internet of things, iot",
  description: "Explore Everything About iOT",
};

export default Meta;
