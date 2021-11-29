import { useGlobalContext } from "./context";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";

function App() {
  const { query } = useGlobalContext();
  return (
    <main>
      <Header />
      {query === "characters" ? (
        <Characters />
      ) : query === "episodes" ? (
        <Episodes />
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
