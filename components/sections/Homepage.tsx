import Header from "../layout/Header";
import Image from "next/image";

const Homepage = () => {
  return (
    <section className="homepage-container">
  <Image
    src="/heros/heros.jpg"
    alt="leo-hero"
    fill
    priority
    className="homepage-background"
  />

  <Header />

  <div className="homepage-content">
    <div className="homepage-text">
      <p className="subtitle">Experience Africa</p>

      <h1 className="homepage-title">
        Luxury Safaris
        <br />
        Tailored For You
      </h1>
    </div>

    <button className="safari-button">
      <a href="#plan-safari">
        Plan Your Safari
      </a>
    </button>
  </div>
</section>
  );
};

export default Homepage;