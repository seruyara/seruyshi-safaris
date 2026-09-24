import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">

      <Image
        src="/footer/footer.jpg"
        alt="African sunset"
        fill
        className="footer-background"
      />

      <div className="footer-overlay"></div>

      <div className="footer-content">

        {/* Main Footer Content */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/logo/SERUYSHI Main.png"
              alt="Seruyshi Signature Safaris"
            />

            <p>
              Curating unforgettable bespoke journeys across Africa,
              where wild landscapes, culture and luxury meet.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                {/* <Icon icon={faInstagram} /> */}
              </a>

              <a href="#" aria-label="Facebook">
                {/* <Icon icon={faFacebookF} /> */}
              </a>

              <a href="#" aria-label="TikTok">
                {/* <Icon icon={faTiktok} /> */}
              </a>
            </div>
          </div>

          {/* About */}
          <div className="footer-column">
            <h3>About</h3>

            <a href="#about">Our Story</a>
            <a href="#experiences">Experiences</a>
            {/* <a href="#">Why Seruyshi</a> */}
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h3>Explore</h3>

            <a href="#destinations">Destinations</a>
            <a href="#plan-safari">Plan Your Safari</a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact</h3>

            <a href="tel:+254XXXXXXXXX">
              +254 XXX XXX XXX
            </a>

            <a href="mailto:hello@seruyshi.com">
              info@seruyshi.com
            </a>

            <p>
              Nairobi, Kenya
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © 2026 Seruyshi Signature Safaris
          </p>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;