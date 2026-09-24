import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const SouthAfrica = () => {
  return (
    <section className="destination-section">
      <div className="destination-info">
        <h2>South Africa </h2>
        <p>
          A World Within One Country.Combine exceptional wildlife with cosmopolitan cities,
          wine country, dramatic coastlines, and world-class hospitality. 
          From a private safari in the Greater Kruger to Cape Town and the Cape Winelands, 
          South Africa is made for extraordinary journeys.
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

        {/* <div className="destination-stat">
          <h5>Included In</h5>
          <p>Classic Kenyan Safari</p>
        </div> */}

      </div>

      <div className="destination-locations">

  <div className="destination-cards">

    <div className="destination-card">
      <Image
        src="/images/destinations/Capetown.jpeg"
        alt="Capetown"
        width={800}
        height={600}
      />
      <p>Capetown</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Kruger:Sabi Sand.jpeg"
        alt="Kruger/Sabi Sand"
        width={800}
        height={600}
      />
      <p>Kruger/Sabi Sand</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Winelands.jpeg"
        alt="Winelands"
        width={800}
        height={600}
      />
      <p>Winelands</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Garden Route2.jpeg"
        alt="Garden Route"
        width={800}
        height={600}
      />
      <p>Garden Route</p>
    </div>

  </div>

</div>
    </section>
  )
}

export default SouthAfrica
