import React, { useState } from "react";

function Pet({pet, onAdoptPet}) {
  const {id, type, gender, age, weight, name, isAdopted} = pet
  const [adopted, setAdopted] = useState(isAdopted)
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === 'female' ? '♀  ' : '♂  ' }
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
       {adopted ? <button className="ui disabled button">Already adopted</button> :
        <button className="ui primary button" onClick={e =>{
           onAdoptPet(id)
           setAdopted(!adopted)
           }}>Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;