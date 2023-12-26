import KeysComponent from "./components/KeysComponent";
import ResultPanel from "./components/ResultPanel";

function App() {
  return (
    <div className="App">
      {" "}
      <h1>React simple calculator</h1>
      <ResultPanel />
      <KeysComponent />
    </div>
  );
}

export default App;
