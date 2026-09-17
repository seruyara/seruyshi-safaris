import Header from "../layout/Header";

const Homepage = () => {
  return (
    <section className="homepage-container">
      <Header/>
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
            <a href="#plan-safari" >
            Plan Your Safari
          </a>
      </button>
       
      </div>
    </section>
  );
};

export default Homepage;