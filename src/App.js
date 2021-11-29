import { useGlobalContext } from "./context";
import Categories from "./components/Categories";

function App() {
  const { data } = useGlobalContext();
  console.log(data);

  return (
    <main>
      <Categories />
    </main>
  );
}

export default App;
