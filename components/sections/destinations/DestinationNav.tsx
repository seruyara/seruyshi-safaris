type DestinationNavProps = {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
};

const DestinationNav = ({
  selectedCountry,
  setSelectedCountry,
}: DestinationNavProps) => {
  return (
    <div className="destination-header">

      <div className="destination-heading">
        <h2>Destinations</h2>
        <p>Discover Africa's extraordinary places</p>
      </div>

      <div className="destination-filter">

        <button
          className={selectedCountry === "all" ? "active" : ""}
          onClick={() => setSelectedCountry("all")}
        >
          All
        </button>

        <button
          className={selectedCountry === "kenya" ? "active" : ""}
          onClick={() => setSelectedCountry("kenya")}
        >
          Kenya
        </button>

        <button
          className={selectedCountry === "tanzania" ? "active" : ""}
          onClick={() => setSelectedCountry("tanzania")}
        >
          Tanzania
        </button>

        <button
          className={selectedCountry === "uganda" ? "active" : ""}
          onClick={() => setSelectedCountry("uganda")}
        >
          Uganda
        </button>

        <button
          className={selectedCountry === "rwanda" ? "active" : ""}
          onClick={() => setSelectedCountry("rwanda")}
        >
          Rwanda
        </button>

        <button
          className={selectedCountry === "egypt" ? "active" : ""}
          onClick={() => setSelectedCountry("egypt")}
        >
          Egypt
        </button>

        <button
          className={selectedCountry === "seychelles" ? "active" : ""}
          onClick={() => setSelectedCountry("seychelles")}
        >
          Seychelles
        </button>

        <button
          className={selectedCountry === "botswana" ? "active" : ""}
          onClick={() => setSelectedCountry("botswana")}
        >
          Botswana
        </button>

        <button
          className={selectedCountry === "namibia" ? "active" : ""}
          onClick={() => setSelectedCountry("namibia")}
        >
          Namibia
        </button>

        <button
          className={selectedCountry === "south-africa" ? "active" : ""}
          onClick={() => setSelectedCountry("south-africa")}
        >
          South Africa
        </button>

      </div>

    </div>
  );
};

export default DestinationNav;