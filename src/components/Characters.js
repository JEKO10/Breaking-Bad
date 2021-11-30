import React from "react";
import { useGlobalContext } from "../context";

const Characters = () => {
  const { isLoading, data } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="characters">
      {data.map((char) => {
        return (
          <div key={char.char_id} className="card">
            <div className="cardInner">
              <div className="front">
                <img src={char.img} alt={char.name} />
              </div>
              <div className="back">
                <h1>{char.name}</h1>
                <h4>
                  <strong>Actor name:</strong> {char.portrayed}
                </h4>
                <h4>
                  <strong>Nickname:</strong> {char.nickname}
                </h4>
                <h4>
                  <strong>Birthday:</strong> {char.birthday}
                </h4>
                <h4>
                  <strong>Status:</strong> {char.status}
                </h4>
                {/* <h4>
                  <strong>Occupation:</strong> {char.occupation.join(", ")}
                </h4> */}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Characters;
// characters;
