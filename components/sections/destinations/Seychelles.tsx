import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Seychelles = () => {
  return (
   <section className="destination-section">
      <div className="destination-info">
        <h2>Seychelles </h2>
        <p>
          Barefoot Luxury in Paradise.Escape to a world of white-sand beaches, turquoise waters,
          private island retreats, and secluded luxury.
          Seychelles is the perfect finale to an African adventure or an unforgettable destination in its own right.
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
        src="/images/destinations/Victoria.jpeg"
        alt="Victoria"
        width={800}
        height={600}
      />
      <p>Victoria</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Mahé.jpeg"
        alt="Mahé"
        width={800}
        height={600}
      />
      <p>Mahé</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Praslin3.jpeg"
        alt="Praslin"
        width={800}
        height={600}
      />
      <p>Praslin</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/La Digue.jpeg"
        alt="La Digue"
        width={800}
        height={600}
      />
      <p>La Digue</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Aldabra.jpeg"
        alt="Aldabra"
        width={800}
        height={600}
      />
      <p>Aldabra</p>
    </div>

  </div>

</div>
    </section>
  )
}

export default Seychelles
