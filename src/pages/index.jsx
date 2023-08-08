import Banner from "../../components/Banner";
import FirstService from "../../components/FirstService";
import SecondService from "../../components/SecondService";
import FreeTrial from "../../components/FreeTrial";
import Newsletter from "../../components/Newsletter";

export const Home = () => {
  return (
    <div>
      <Banner />
      <FirstService />
      <SecondService />
      <FreeTrial />
      <Newsletter />
    </div>
  );
};

export default Home;
