import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Tanzania = () => {
  return (
   <section className="destination-section">
      <div className="destination-info">
        <h2>Tanzania</h2>
        <p>
          Where the Wild Roams Free. Experience the vast Serengeti,
          the Ngorongoro Crater, Tarangire, and the beaches of Zanzibar.
          Tanzania is a destination for remarkable wildlife encounters, 
          dramatic landscapes, and timeless safari experiences.
        </p>
      </div>

      <div className="destination-stats">
        <div className="destination-stat">
          <Icon
               icon={faLocationDot}
               className="destination-stat-icon"
          />
          <h5>Places to Visit</h5>
          <p>4 Locations</p>
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
        src="/images/destinations/Serengeti.jpeg"
        alt="Serengeti"
        width={800}
        height={600}
      />
      <p>Serengeti</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Ngorongoro.jpeg"
        alt="Ngorongoro"
        width={800}
        height={600}
      />
      <p>Ngorongoro</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Tarangire2.jpeg"
        alt="Tarangire"
        width={800}
        height={600}
      />
      <p>Tarangire</p>
    </div>
    <div className="destination-card">
      <Image
        src="/images/destinations/Arusha.jpg"
        alt="Arusha"
        width={800}
        height={600}
      />
      <p>Arusha</p>
    </div>
  </div>

</div>
    </section>
  )
}

export default Tanzania
