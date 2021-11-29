import { useGlobalContext } from "./context";
import Header from "./components/Header";
import Characters from "./components/Characters";

function App() {
  const { query } = useGlobalContext();
  return (
    <main>
      <Header />
      {query === "characters" ? <Characters /> : ""}
    </main>
  );
}

export default App;
