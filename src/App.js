import { useGlobalContext } from "./context";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Quotes from "./components/Quotes";

function App() {
  const { query } = useGlobalContext();
  return (
    <main>
      <Header />
      {query === "characters" ? (
        <Characters />
      ) : query === "episodes" ? (
        <Episodes />
      ) : query === "quotes" ? (
        <Quotes />
      ) : (
        <h1>Choose a category</h1>
      )}
    </main>
  );
}

export default App;
