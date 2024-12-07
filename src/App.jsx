import React from 'react'

const App = () => {
  return (
    <div>
      <form className="flight-booker">
        <select>
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