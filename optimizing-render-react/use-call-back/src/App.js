import './App.css';
import List from "./components/List/List";

function App() {

  const items = [
    {id: 1, name: "Shoyo"},
    {id: 2, name: "Melody"},
    {id: 3, name: "Hinata"},
    {id: 4, name: "Kageyama"},
    {id: 5, name: "Tenaka"},
  ]

  return (
    <div className="App">
      <h2>Use Call Back Example</h2>
      <List items={items} />
    </div>
  );
}

export default App;
