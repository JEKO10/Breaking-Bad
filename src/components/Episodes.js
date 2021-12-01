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
            <div key={ep.episode_id} className="episode">
              <h1>
                <strong>Title: </strong>
                {ep.title}
              </h1>
              <h1>
                S{ep.season} E{ep.episode}
              </h1>
              <h1>
                <strong>Released: </strong>
                {ep.air_date}
              </h1>
            </div>
          );
        })}
    </section>
  );
};

export default Episodes;
