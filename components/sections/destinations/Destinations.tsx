"use client";

import { useState } from "react";
import Icon from "../../icons";
import {
  faLocationDot,
  faPersonHiking,
} from "@fortawesome/free-solid-svg-icons";

import DestinationNav from "./DestinationNav";
import Kenya from "./Kenya";
import Tanzania from "./Tanzania";
import Uganda from "./Uganda";
import Rwanda from "./Rwanda";
import Egypt from "./Egypt";
import Seychelles from "./Seychelles";
import Botsawna from "./Botswana";
import Namibia from "./Namibia";
import SouthAfrica from "./SouthAfrica";

const Destinations = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");

  return (
    <>
      <DestinationNav
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      {selectedCountry === "all" && (
        <section className="destination-section">
          <div className="destination-info">
            <h2>All Places 🌍</h2>

            <p>
              Your Africa, Your Way. Whether you dream of tracking gorillas
              in Rwanda, witnessing the Great Migration in Tanzania and
              Kenya, exploring the ancient wonders of Egypt, drifting through
              Botswana's Okavango Delta, discovering Namibia's desert
              landscapes, or ending your adventure barefoot in Seychelles,
              Seruyshi Signature Safaris turns your vision into a journey
              that is uniquely yours.
              <br />
              One continent. Endless possibilities.
              <br />
              Your Story. Our Signature.
            </p>
          </div>

          <div className="destination-stats">

            <div className="destination-stat">
              <Icon
                icon={faLocationDot}
                className="destination-stat-icon"
              />

              <h5>Places to Visit</h5>
              <p>9 Countries</p>
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
                  src="/images/hotair baloon.jpg"
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
      )}

      {selectedCountry === "kenya" && <Kenya/>}

      {selectedCountry === "tanzania" && <Tanzania/>}

      {selectedCountry === "uganda" && <Uganda/>}

      {selectedCountry === "rwanda" && <Rwanda/>}

      {selectedCountry === "egypt" && <Egypt/>}

      {selectedCountry === "seychelles" && <Seychelles/>}

      {selectedCountry === "botswana" && <Botsawna/>}

      {selectedCountry === "namibia" && <Namibia/>}

      {selectedCountry === "south-africa" && <SouthAfrica/>}


    </>
  );
};

export default Destinations;