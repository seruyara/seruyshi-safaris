import Image from "next/image";

const Plansafari = () => {
  return (
    <section id="plan-safari" className="plan-safari-section">
       <Image
        src="/images/plan-safari/plan-safari.jpg"
        alt="Luxury safari experience in Africa"
        fill
        className="plan-safari-background"
      />

      <div className="plan-safari-intro">
        <p className="plan-safari-label">Plan Your Safari</p>

        <h2>
          Your journey starts
          <br />
          with a conversation.
        </h2>

        <p className="plan-safari-description">
          Tell us where you'd love to go, what you'd love to experience,
          or simply what you're dreaming about. Whether it's one destination
          or several countries across Africa, we'll take care of the details
          and create a journey around you.
        </p>
      </div>


      <form className="plan-safari-form">

        <div className="plan-form-group">
          <label htmlFor="name">What should we call you?</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
          />
        </div>


        <div className="plan-form-group">
          <label htmlFor="contact">How can we reach you?</label>

          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Email or WhatsApp number"
          />
        </div>


        <div className="plan-form-group">
          <label htmlFor="journey">
            Tell us about your journey
          </label>

          <textarea
            id="journey"
            name="journey"
            placeholder="Where would you love to go? What would you love to experience? Tell us anything you'd like us to know..."
            rows={6}
          />
        </div>


        <button type="submit" className="plan-safari-button">
          Start the Conversation
          <span>→</span>
        </button>

      </form>

    </section>
  );
};

export default Plansafari;

