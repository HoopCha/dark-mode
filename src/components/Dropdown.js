import React from "react";



const Dropdown  = ({ coinData, setDropDown }) => {

const handleChanges = e => {
    setDropDown (e.target.value);
    console.log(e.target.value)
};

return (
    <div >
    <select id="crypto" onChange={handleChanges}>
    <option value="All">All</option>
      {coinData.map(coin => (
          <option value={`${coin.id}`}>{coin.name}</option>
      ))}
    </select>
    </div>
)};

export default Dropdown;