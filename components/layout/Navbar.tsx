const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="#destinations">Destinations</a>
        </li>

        <li>
          <a href="#about">About Us</a>
        </li>

        <li>
          <a href="#experiences">Experiences</a>
        </li>

        <li>
          <a href="mailto:hello@seruyshi.com" className="contact-button">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;