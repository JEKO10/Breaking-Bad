import React from "react";
import { useGlobalContext } from "../context";

const Characters = () => {
  const { isLoading, data } = useGlobalContext();

  // only Breaking Bad characters
  // const breakingBad = data.filter((char) => char.category === "Breaking Bad");

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="characters">
      {data
        .filter((char) => char.category === "Breaking Bad")
        .map((char) => {
          return (
            <div key={char.char_id}>
              <img src={char.img} alt={char.name} />
              <h1>{char.name}</h1>
              <h2>Actor name: {char.portrayed}</h2>
              <h2>Nickname: {char.nickname}</h2>
              <h2>Birthday: {char.birthday}</h2>
              <h2>Status: {char.status}</h2>
              <h2>Occupation: {char.occupation.join(", ")}</h2>
              <hr />
            </div>
          );
        })}
    </section>
  );
};

export default Characters;
// characters;
