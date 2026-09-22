import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">

      {/* Intro */}
      <div className="about-intro">
        <p className="section-label">ABOUT SERUYSHI</p>

        <h2>
          Travel Africa,
          <br />
          your way.
        </h2>

        <p className="about-intro-text">
          Seruyshi Signature Safaris is a Kenyan-based bespoke tours and travel
          company created to share the beauty of Africa through thoughtfully
          designed luxury journeys.
        </p>
      </div>


      {/* Founder */}
      <div className="about-founder">

       <div className="about-founder-image">
        <Image
           src="/images/about-us/about-us.jpg"
           alt="Founder of Seruyshi Signature Safaris"
            width={800}
          height={1000}
         />
</div>
        <div className="about-founder-content">

          <p className="section-label">THE FOUNDER</p>

          <h3>
            Founded in Kenya.
            <br />
            Built around people.
          </h3>

          <p>
            Seruyshi Signature Safaris was founded in Kenya by a tours and travel
            professional with over 21 years of experience working closely
            with clients and creating experiences tailored to their
            individual needs.
          </p>

          <p>
            That experience shaped the way we believe travel should feel:
            personal, comfortable and thoughtfully taken care of.
          </p>

          <div className="founder-experience">
            <span>21+</span>
            <p>Years of experience creating experiences around people.</p>
          </div>

        </div>

      </div>


      {/* Who We Are */}
      <div className="about-who-we-are">

        <div className="about-who-heading">
          <p className="section-label">WHO WE ARE</p>

          <h3>
            Africa deserves
            <br />
            to be experienced.
          </h3>
        </div>

        <div className="about-who-content">

          <p>
            We created Seruyshi to show the world the Africa we know and
            love, from its incredible wildlife and landscapes to its diverse
            cultures and coastlines.
          </p>

          <p>
            Whether you're planning your first safari, a family holiday, a
            celebration or simply an escape, we create your journey around
            you.
          </p>

        </div>

      </div>


      {/* Our Values */}
      <div className="about-values">

        <div className="about-value">
          <h4>Personal</h4>
          <p>Your itinerary is designed around you.</p>
        </div>

        <div className="about-value">
          <h4>Comfort</h4>
          <p>Travel beautifully and at your own pace.</p>
        </div>

        <div className="about-value">
          <h4>Care</h4>
          <p>You enjoy the journey. We take care of the details.</p>
        </div>

        <div className="about-value">
          <h4>Africa</h4>
          <p>Discover the continent beyond the ordinary.</p>
        </div>

      </div>

       <div className="about-closing">
  <p>Your journey. Your pace. Our signature.</p>

  <a href="#plan-safari" className="about-button">
    Start Your Journey
  </a>
</div>

    </section>
  );
};

export default AboutUs;