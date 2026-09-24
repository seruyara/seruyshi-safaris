import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Namibia = () => {
  return (
    <section className="destination-section">
      <div className="destination-info">
        <h2>Namibia </h2>
        <p>
          Where the Desert Meets the Wild.From the towering dunes of Sossusvlei
          to the rugged Skeleton Coast and wildlife-rich Etosha, Namibia offers extraordinary landscapes,
          dramatic contrasts, and a sense of solitude that is increasingly rare.
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
        src="/images/destinations/Windhoek2.jpeg"
        alt="Windhoek "
        width={800}
        height={600}
      />
      <p>Windhoek </p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Sossusvlei.jpeg"
        alt="Sossusvlei"
        width={800}
        height={600}
      />
      <p>Sossusvlei</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Etosha.jpeg"
        alt="Etosha"
        width={800}
        height={600}
      />
      <p>Etosha</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Damaraland.jpeg"
        alt="Damaraland"
        width={800}
        height={600}
      />
      <p>Damaraland</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Skeleton Coast3.jpeg"
        alt="Skeleton Coast"
        width={800}
        height={600}
      />
      <p>Skeleton Coast</p>
    </div>

  </div>

</div>
    </section>
  )
}

export default Namibia
