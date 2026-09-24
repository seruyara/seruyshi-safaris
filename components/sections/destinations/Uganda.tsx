import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Uganda = () => {
  return (
    <section className="destination-section">
      <div className="destination-info">
        <h2>Uganda</h2>
        <p>
          The Pearl of Africa. Discover lush forests, 
          spectacular landscapes, mountain gorillas, chimpanzees, 
          and intimate wildlife experiences. Uganda offers a more adventurous 
          extraordinary combination of wildlife, landscapes, culture, and luxury.
           and deeply immersive side of Africa 
       
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
        src="/images/destinations/Entebe.jpeg"
        alt="Entebe"
        width={800}
        height={600}
      />
      <p>Entebe</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Bwindi.jpeg"
        alt="Bwindi"
        width={800}
        height={600}
      />
      <p>Bwindi</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Queen Elizabeth2.jpeg"
        alt="Queen Elizabeth"
        width={800}
        height={600}
      />
      <p>Queen Elizabeth</p>
    </div>


    <div className="destination-card">
      <Image
        src="/images/destinations/Murchison Falls.jpeg"
        alt="Murchison Falls"
        width={800}
        height={600}
      />
      <p>Murchison Falls</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Kibale.jpeg"
        alt="Kibale"
        width={800}
        height={600}
      />
      <p>Kibale</p>
    </div>

  </div>

</div>
    </section>
  );
};

export default Uganda;