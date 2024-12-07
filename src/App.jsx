import React from 'react'

const App = () => {
  const [flightOption, setFlightOption] = useState('one-way');
  return (
    <div>
      <form className="flight-booker">
        <select value={flightOption}
          onChange={(event) = setFlightOption(event.target.value)}
        >
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
        <button>
          Book
        </button>
      </form>
    </div>
  )
}

export default App