import { useGlobalContext } from "../context";

function SearchForm() {
  const { query, setQuery } = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchForm;
