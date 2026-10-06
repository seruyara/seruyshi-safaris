import Footer from "../components/layout/Footer";
import Experiences from "../components/sections/Experiences";
import Destinations from "../components/sections/destinations/Destinations";
import Homepage from "../components/sections/Homepage";
import Plansafari from "../components/sections/Plansafari";
import AboutUs from "../components/sections/AboutUs";
import FAQ from "../components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Homepage/>
      <Destinations/>
      <AboutUs/>
      <Experiences/>
      <FAQ/>
      <Plansafari/>
      <Footer/>
    </main>
  );
}