import Categories from "./Categories";
import SearchForm from "./SearchForm";
import { useGlobalContext } from "../context";

const Header = () => {
  const { query } = useGlobalContext();

  return (
    <nav>
      <Categories />
      {query === "characters" ? (
        <SearchForm />
      ) : query === "episodes" ? (
        <SearchForm />
      ) : (
        ""
      )}
    </nav>
  );
};
export default Header;
