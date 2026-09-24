import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Egypt = () => {
  return (
    <section className="destination-section">
      <div className="destination-info">
        <h2>Egypt </h2>
        <p>
          Where History Comes Alive.From the pyramids of Giza and the temples of Luxor to the Nile and the Red Sea,
          Egypt offers a journey through thousands of years of history, culture,
          architecture, and discovery — elevated with carefully curated luxury experiences.
        </p>
      </div>

      <div className="destination-stats">
        <div className="destination-stat">
          <Icon
               icon={faLocationDot}
               className="destination-stat-icon"
          />
          <h5>Places to Visit</h5>
          <p>5 Locations</p>
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
        src="/images/destinations/Cairo2.jpeg"
        alt="Cairo"
        width={800}
        height={600}
      />
      <p>Cairo</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Giza.jpeg"
        alt="Giza"
        width={800}
        height={600}
      />
      <p>Giza</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Luxor.jpeg"
        alt="Luxor"
        width={800}
        height={600}
      />
      <p>Luxor</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Nile.jpeg"
        alt="Nile"
        width={800}
        height={600}
      />
      <p>Nile</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Western Desert2.jpeg"
        alt="Western Desert"
        width={800}
        height={600}
      />
      <p>Western Desert</p>
    </div>

  </div>

</div>
    </section>
  )
}

export default Egypt
