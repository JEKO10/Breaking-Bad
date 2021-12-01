import { useGlobalContext } from "./context";
import Header from "./components/Header";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Quotes from "./components/Quotes";
import Poster from "./poster.jpg";

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
        <div className="landing">
          <h1>
            Cho<span>OS</span>e a <span>C</span>ategor<span>Y</span>
          </h1>
          <img src={Poster} alt="Poster" id="poster" />
        </div>
      )}
    </main>
  );
}

export default App;
