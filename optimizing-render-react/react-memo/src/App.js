import './App.css';
import List from "./components/List/List";
import { useState } from "react";

function App() {
  const [items] = useState([
    { id: 1, name: 'Item 1'},
    { id: 2, name: 'Item 2'},
    { id: 3, name: 'Item 3'},
  ])
  return (
    <div className="App">
      <h1>Rendering Component with React Memo</h1>
      <List items={items} />
    </div>
  );
}

export default App;
