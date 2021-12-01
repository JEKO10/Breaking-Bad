import { useGlobalContext } from "../context";

function SearchForm() {
  const { search, setSearch } = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchForm;
