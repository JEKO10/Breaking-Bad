import { useGlobalContext } from "../context";

const Quotes = () => {
  const { isLoading, data } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="quotes">
      {data
        .filter((quote) => quote.series === "Breaking Bad")
        .map((quote) => {
          return (
            <div key={quote.quote_id}>
              <h1>{quote.quote}</h1>
              <p>{quote.author}</p>
              <hr />
            </div>
          );
        })}
    </section>
  );
};

export default Quotes;
