import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Rwanda = () => {
  return (
    <section className="destination-section">
      <div className="destination-info">
        <h2>Rwanda </h2>
        <p>
          Luxury in the Land of a Thousand Hills.Journey through Rwanda's 
          beautiful highlands and ancient forests for an unforgettable encounter with mountain gorillas, 
          complemented by refined hospitality and extraordinary scenery.
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
        src="/images/destinations/Volcanoes NP.jpeg"
        alt="Volcanoes NP"
        width={800}
        height={600}
      />
      <p> Volcanoes NP</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Akagera.jpeg"
        alt="Akagera"
        width={800}
        height={600}
      />
      <p>Akagera</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Nyungwe.jpeg"
        alt="Nyungwe"
        width={800}
        height={600}
      />
      <p>Nyungwe</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Kigali2.jpeg"
        alt="Kigali"
        width={800}
        height={600}
      />
      <p> Kigali</p>
    </div>


  </div>

</div>
    </section>
  )
}

export default Rwanda
