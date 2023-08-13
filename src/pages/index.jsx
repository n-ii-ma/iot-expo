import Meta from "../../components/Meta";
import Banner from "../../components/Banner";
import FirstService from "../../components/FirstService";
import SecondService from "../../components/SecondService";
import FreeTrial from "../../components/FreeTrial";
import Newsletter from "../../components/Newsletter";

export const Home = () => {
  return (
    <>
      <Meta
        title="Home"
        description="Homepage of the site highligthing our various services regarding doing IoT projects"
      />
      <Banner />
      <FirstService />
      <SecondService />
      <FreeTrial />
      <Newsletter />
    </>
  );
};

export default Home;
