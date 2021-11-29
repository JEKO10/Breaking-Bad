import { useGlobalContext } from "./context";
import Header from "./components/Header";

function App() {
  const { data } = useGlobalContext();
  console.log(data);

  return (
    <main>
      <Header />
    </main>
  );
}

export default App;
