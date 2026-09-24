import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Botsawna = () => {
  return (
    <section className="destination-section">
      <div className="destination-info">
        <h2>Botswana </h2>
        <p>
          Untamed. Exclusive. Extraordinary.Explore the Okavango Delta, Chobe,
          and the vast wilderness of Botswana through intimate safari experiences designed around exclusivity,
          conservation, and exceptional wildlife encounters.
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
        src="/images/destinations/Maun.jpeg"
        alt="Maun"
        width={800}
        height={600}
      />
      <p>Maun</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Okavango Delta2.jpeg"
        alt="Okavango Delta"
        width={800}
        height={600}
      />
      <p>Okavango Delta</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Moremi.jpeg"
        alt="Moremi"
        width={800}
        height={600}
      />
      <p>Moremi</p>
    </div>

  </div>

</div>
    </section>
  )
}

export default Botsawna
