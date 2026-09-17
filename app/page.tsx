import Footer from "../components/layout/Footer";
import AboutUs from "../components/sections/Aboutus";
import Destinations from "../components/sections/destinations/Destinations";
import Homepage from "../components/sections/Homepage";
import Plansafari from "../components/sections/Plansafari";

export default function Home() {
  return (
    <main>
      <Homepage/>
      <Destinations/>
      <AboutUs/>
      <Plansafari/>
      <Footer/>
    </main>
  );
}