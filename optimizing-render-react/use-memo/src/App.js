import './App.css';
import { useState, useMemo } from 'react';

function App() {

  const [filterText, setFilterText ] = useState("");
   

  // Since App re-renders whenever state (filterText) changes, the items array is recreated on every render. 
  // This causes useMemo to trigger unnecessary recomputations.So useMemo for items.

  const items = useMemo(() => [
    {id: 1, name: "Apple"},
    {id: 2, name: "Grapes"},
    {id: 3, name: "Mango"},
    {id: 4, name: "Cherry"},
    {id: 5, name: "Orange"},
    {id: 6, name: "Plum"},
  ], []);

  const filterItems = useMemo(() => {
    return items.filter((item) => {
      return item.name.toLowerCase().includes(filterText.toLowerCase());
    })
  }, [filterText, items])

  return (
    <div className="App">
      <h1> Use Memo hooks demonstration </h1>
      <input type="text"
      placeholder='Search...'
      onChange={(e) => setFilterText(e.target.value)} />
      <ul>
        { filterItems.map((item) => {
          return <li key={item.id}>{item.name}</li>
        }) }
      </ul>
    </div>
  );
}

export default App;
