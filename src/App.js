import { useGlobalContext } from "./context";

function App() {
  const { data } = useGlobalContext();
  console.log(data);

  return <div>A</div>;
}

export default App;
