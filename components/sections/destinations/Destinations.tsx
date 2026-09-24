"use client";
import Image from "next/image";

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
            <h2>All Places </h2>

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
      <Image
        src="/images/destinations/Volcanoes NP2.jpeg"
        alt="Volcanoes NP2"
        width={800}
        height={600}
      />
      <p>Volcanoes NP, Rwanda</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Masaai Mara2.jpg"
        alt="Amboseli"
        width={800}
        height={600}
      />
      <p>Masaai Mara, Kenya</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Tarangire2.jpeg"
        alt="Tarangire"
        width={800}
        height={600}
      />
      <p>Tarangire, Tanzania</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Queen Elizabeth.jpeg"
        alt="Queen Elizabeth"
        width={800}
        height={600}
      />
      <p>Queen Elizabeth, Uganda</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Western Desert.jpeg"
        alt="Western Desertt"
        width={800}
        height={600}
      />
      <p>Western Desert, Egypt</p>
    </div>

    <div className="destination-card">
      <Image
        src="/images/destinations/Okavango Delta3.jpeg"
        alt="Okavango Delta"
        width={800}
        height={600}
      />
      <p>Okavango Delta, Botswana</p>
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