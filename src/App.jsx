import React from "react";
import { useState } from "react";

  //handle date formating
  function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
const App = () => {
  const TODAY = formatDate(new Date());
  const [departureDate, setDepartureDate] = useState(TODAY);
  const [flightOption, setFlightOption] = useState("one-way");
  const [returnDate, setReturnDate] = useState(departureDate);

  //form submission handler
  function submitForm(event) {
    event.preventDefault();
    if (flightOption === "one-way") {
      alert(`You have booked a one-way flight on ${departureDate}`);
    } else {
      alert(
        `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
      );
    }
  }

  return (
    <div className="app">
      <form className="flight-booker" onSubmit={submitForm}>
        <select
          value={flightOption}
          onChange={(event) => setFlightOption(event.target.value)}
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
        {flightOption === "return" && (
          <input
            type="date"
            value={returnDate}
            min={departureDate}
            onChange={(event) => setReturnDate(event.target.value)}
          />
        )}
        <button>Book</button>
      </form>
    </div>
  );
};

export default App;
