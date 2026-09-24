import Image from "next/image";

const Experiences = () => {
  return (
    <section id="experiences" className="experience-section">

  <div className="experience-intro">

    <div className="experience-label">
      <span>EXPERIENCES</span>
    </div>

    <div className="experience-heading">
      <h2>
        Africa is not just<br />
        a destination.
      </h2>

      <p className="experience-lead">
        It's a story waiting to become yours.
      </p>
    </div>

  </div>


  <div className="experience-main">

    <div className="experience-image-large">
  <Image
    src="/images/experience/experience.jpg"
    alt="Safari experience in Africa"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>


    <div className="experience-story">

      <h3>
        Travel, thoughtfully designed.
      </h3>

      <p>
        At Seruyshi Signature Safaris, we believe that
        the best journeys are personal.
      </p>

      <p>
        From the landscapes you dream of waking up to,
        to the experiences you want to remember long
        after you've returned home, we take the time to
        understand what makes a journey meaningful to you.
      </p>

      <p>
        Whether it's your first safari, a celebration,
        a family adventure, or simply time to reconnect,
        we create experiences around you.
      </p>

    </div>
    

  </div>
 <div className="experience-process-header">
  <p className="section-label">OUR PROCESS</p>

  <h3>
    From your vision
    <br />
    to your journey.
  </h3>

  <p className="experience-process-intro">
  Every journey is bespoke, thoughtfully tailored around you and designed
  to make travelling Africa feel effortless.
</p>
</div>

<div className="experience-process">

  <div className="process">
    <span className="process-number">01</span>

    <h4>Tell Us Your Vision</h4>

    <p>
      Tell us what you're dreaming of, where you'd like to go,
      and what matters most to you.
    </p>
  </div>

  <div className="process">
    <span className="process-number">02</span>

    <h4>We Design Your Journey</h4>

    <p>
      We create a personalised itinerary around your interests,
      pace and preferences, taking care of the details along the way.
    </p>
  </div>

  <div className="process">
    <span className="process-number">03</span>

    <h4>You Experience Africa</h4>

    <p>
      Travel, explore and enjoy Africa in comfort while we
      take care of the rest.
    </p>
  </div>

</div>
  <div className="experience-bottom">

    <div className="experience-quote">
      <p>
        One continent.<br />
        Endless possibilities.<br />
        Your story. Our signature.
      </p>
    </div>

  <div className="experience-image-small">
  <Image
    src="/images/experience/landscape.jpg"
    alt="African landscape"
    width={900}
    height={200}
  />
</div>

  </div>
</section>
  )
}

export default Experiences
