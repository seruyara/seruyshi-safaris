import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Kenya = () => {
  return (
    <section className="destination-section">
      <div className="destination-info">
        <h2>Kenya </h2>
        <p>
          The heart of the safari. Discover vast landscapes,
          incredible wildlife and unforgettable experiences.
          From the legendary Maasai Mara and the foothills of Mount Kenya to Amboseli,
           Laikipia, Samburu, and the Indian Ocean coast,
           Kenya offers an extraordinary combination of wildlife, landscapes, culture, and luxury.

        </p>
      </div>

      <div className="destination-stats">
        <div className="destination-stat">
          <Icon
               icon={faLocationDot}
               className="destination-stat-icon"
          />
          <h5>Places to Visit</h5>
          <p>6 Locations</p>
        </div>

        <div className="destination-stat">
           <Icon
               icon={faPersonHiking}
               className="destination-stat-icon"
            />
          <h5>Experiences</h5>
          <p>Safari, City Tours & More</p>
        </div>
      </div>
      
     <div className="destination-locations">
  <div className="destination-cards">
    <div className="destination-card">
      <Image
        src="/images/destinations/lion.jpg"
        alt="Maasai Mara"
        width={800}
        height={600}
      />
      <p>Maasai Mara</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Amboseli.jpeg"
        alt="Amboseli"
        width={800}
        height={600}
      />
      <p>Amboseli</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/samburu.jpeg"
        alt="Samburu"
        width={800}
        height={600}
      />
      <p>Samburu</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Laikipia2.jpeg"
        alt="Laikipia"
        width={800}
        height={600}
      />
      <p>Laikipia</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/kenyan-coast.jpg"
        alt="Diani and the Kenyan Coast"
        width={800}
        height={600}
      />
      <p>Diani & the Kenyan Coast</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Nairobi.jpeg"
        alt="Nairobi"
        width={800}
        height={600}
      />
      <p>Nairobi</p>
    </div>

  </div>

</div>
    </section>
  );
};

export default Kenya;