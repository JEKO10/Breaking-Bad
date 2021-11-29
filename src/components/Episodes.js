import { useGlobalContext } from "../context";

const Episodes = () => {
  const { isLoading, data } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="episodes">
      {data
        .filter((ep) => ep.series === "Breaking Bad")
        .map((ep) => {
          return (
            <div key={ep.episode_id}>
              <h1>Title: {ep.title}</h1>
              <h1>
                s{ep.season} e{ep.episode}
              </h1>
              <h1>Released: {ep.air_date}</h1>
              <hr />
            </div>
          );
        })}
    </section>
  );
};

export default Episodes;
