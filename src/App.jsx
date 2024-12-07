import React from "react";

const App = () => {
  const TODAY = formatDate(new Date());
  const [departureDate, setDepartureDate] = useState(TODAY);
  const [flightOption, setFlightOption] = useState("one-way");
  return (
    <div>
      <form className="flight-booker">
        <select
          value={flightOption}
          onChange={(event = setFlightOption(event.target.value))}
        >
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
        <input
          type="date"
          value={departureDate}
          onChange={(event) => setDepartureDate(event.target.value)}
          min={TODAY}
        />
        <button>Book</button>
      </form>
    </div>
  );
};

export default App;
