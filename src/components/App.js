import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [displayPets, setDisplayPets] = useState([])
  function onFindPetsClick(){
    fetch((filters.type === 'all') ? `http://localhost:3001/pets` : `http://localhost:3001/pets?type=${filters}`)
    .then(r => r.json())
    .then(d => setPets(d))
  }

  function onChangeType(type) {
    setFilters(type)
  }
  function onAdoptPet(id) {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({isAdopted: true})
      })
      .then(res => res.json())
      .then(data => console.log('PATCH', data));
  }



  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;