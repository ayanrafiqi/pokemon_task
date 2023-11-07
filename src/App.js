import react, { useState, useEffect } from "react";
import axios from "axios";
import PokemonDetails from "./PokemonDetails";
import "./App.css";

function App() {
  const [model, setModel] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getData = async (cb) => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(({ data }) => cb(data.results))
        .catch((err) => {
          console.log(err);
        });
    };

    getData(setModel);
  }, [offset]);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Face </th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {model.map((pokemon, index) => (
            <tr key={index}>
              <td>{pokemon.name}</td>
              <PokemonDetails url={pokemon.url} />
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="submit"
        disabled={offset === 0}
        onClick={() => setOffset(offset - 10)}
      >
        prev
      </button>
      <button type="submit" onClick={() => setOffset(offset + 10)}>
        next
      </button>
    </div>
  );
}

export default App;
