import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetails = ({ url }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getPokemonDetails = async (cb) => {
      await axios
        .get(url)
        .then(({ data }) => cb(data))
        .catch((err) => {
          console.log(err);
        });
    };
    getPokemonDetails(setDetails);
  }, [details, url]);
  return (
    <>
      <td>
        <img src={details.sprites.front_default} alt=""></img>
      </td>
      <td>{details.height}</td>
      <td>{details.weight}</td>
    </>
  );
};

export default PokemonDetails;
