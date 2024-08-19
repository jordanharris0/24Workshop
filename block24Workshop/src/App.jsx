import { useState } from "react";
import "./App.css";
//importing puppyList
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("Puppy List:", puppies);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      {featPupId && (
        <div className="card">
          <h2 className="featPup">{featuredPup.name}</h2>
          <ul className="featList">
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      <br />
      <br />
      <div className="App">
        <h3>Select a Puppy Below:</h3>
        {puppies.map((puppy) => {
          return (
            <button onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
              {puppy.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
