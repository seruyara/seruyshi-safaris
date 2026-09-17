import Icon from "../../icons";
import { faLocationDot,faPersonHiking } from "@fortawesome/free-solid-svg-icons";

const Namibia = () => {
  return (
    <section className="destination-section">
      <div className="destination-info">
        <h2>Namibia 🇳🇦</h2>
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
            <img
              src="/images/lion.jpg"
              alt="Maasai Mara"
            />
            <p>Maasai Mara</p>
          </div>
          <div className="destination-card">
            <img
              src="/images/elephants-car.jpg"
              alt="Amboseli"
            />
            <p>Amboseli</p>
          </div>
          <div className="destination-card">
            <img
              src="/images/rhino.jpg"
              alt="Laikipia and Lewa"
            />
            <p>Laikipia & Lewa</p>
          </div>
          <div className="destination-card">
            <img
              src="/images/leo.jpg"
              alt="Samburu"
            />
            <p>Samburu</p>
          </div>
          <div className="destination-card">
            <img
              src="images/hotair baloon.jpg"
              alt="Diani and the Kenyan Coast"
            />
            <p>Diani & the Kenyan Coast</p>
          </div>
          <div className="destination-card">
            <img
              src="/images/dry water.jpg"
              alt="Lamu"
            />
            <p>Lamu</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Namibia
