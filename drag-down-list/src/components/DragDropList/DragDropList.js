import React, { useState } from "react";
import "./DragDropList.css";

const DragDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggedItem, setDraggedItem] = useState(null); // stores the item list that is being dragged

  const handleDragStart = (index) => {
    setDraggedItem(index);
  }

  const handleDrop = () => {
    setDraggedItem(null);
  }

  const handleDragOver = (index) => {
    console.log(index + " " + draggedItem);
    if (draggedItem === index) return;

    const updatedList = [...items];
    const itemToMove = updatedList.splice(draggedItem, 1)[0]; // splice returns an array but we just need the element
    // const removeElement = updatedList.splice(draggedItem, 1);
    // const itemToMove = removeElement[0];
    updatedList.splice(index, 0, itemToMove);
    setDraggedItem(index); // Helps in preventing redundant reordering when dragging over the same index.
    setItems(updatedList);
  }

  return (
    <div className="drag-drop-container">
      <h2> Drag and Drop List </h2>
      <ul>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => {
                e.preventDefault();
                handleDragOver(index);
              }}
              onDrop={handleDrop}
              className={draggedItem === index ? "dragging" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DragDropList;
