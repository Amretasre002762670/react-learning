# Drag and Drop List in React

## Question

Create a simple drag-and-drop list using React. The user should be able to reorder items by dragging them.

### Follow-up:

- What libraries can help improve this functionality?
- How would you make this work on mobile devices?

# `onDrag` Event Handlers in React

In React, the `onDrag` event handlers are used to manage **drag-and-drop interactions** for elements that have the `draggable` attribute set to `true`. These event handlers allow you to control what happens when an item is dragged, dragged over, or dropped.

---

## **1. `onDragStart`**
- **Triggered when the user starts dragging an element.**
- Use this to initialize the drag operation, such as storing the index or data of the dragged item.

### Example:
```javascript
const handleDragStart = (index) => {
  console.log("Drag started on item:", index);
  setDraggedItem(index); // Store the index of the dragged item
};
```

### Usage:
```javascript
<li
  draggable
  onDragStart={() => handleDragStart(index)}
>
  Item {index}
</li>
```

---

## **2. `onDragOver`**
- **Triggered when a dragged item is being dragged over a valid drop target.**
- By default, elements are not valid drop targets. You must call `e.preventDefault()` to allow dropping.
- Use this to update the UI or reorder items as the dragged item moves over other elements.

### Example:
```javascript
const handleDragOver = (index) => {
  e.preventDefault(); // Allow dropping
  console.log("Dragging over item:", index);
  if (draggedItem === index) return; // Skip if dragging over itself

  // Reorder items
  const updatedList = [...items];
  const itemToMove = updatedList.splice(draggedItem, 1)[0];
  updatedList.splice(index, 0, itemToMove);

  setItems(updatedList); // Update the list
  setDraggedItem(index); // Update the dragged item's index
};
```

### Usage:
```javascript
<li
  onDragOver={(e) => {
    e.preventDefault();
    handleDragOver(index);
  }}
>
  Item {index}
</li>
```

---

## **3. `onDrop`**
- **Triggered when a dragged item is dropped on a valid drop target.**
- Use this to finalize the drop operation, such as updating the state or performing an action with the dropped item.

### Example:
```javascript
const handleDrop = () => {
  console.log("Item dropped");
  setDraggedItem(null); // Reset the dragged item
};
```

### Usage:
```javascript
<li
  onDrop={handleDrop}
>
  Item {index}
</li>
```

---

## **4. `onDragEnd`**
- **Triggered when the drag operation ends (e.g., the user releases the mouse button).**
- Use this to clean up or perform final actions after the drag operation.

### Example:
```javascript
const handleDragEnd = () => {
  console.log("Drag ended");
  setDraggedItem(null); // Reset the dragged item
};
```

### Usage:
```javascript
<li
  draggable
  onDragEnd={handleDragEnd}
>
  Item {index}
</li>
```

---

## **5. `onDragEnter`**
- **Triggered when a dragged item enters a valid drop target.**
- Use this to change the appearance of the drop target when the dragged item enters it.

### Example:
```javascript
const handleDragEnter = (index) => {
  console.log("Dragged item entered:", index);
};
```

### Usage:
```javascript
<li
  onDragEnter={() => handleDragEnter(index)}
>
  Item {index}
</li>
```

---

## **6. `onDragLeave`**
- **Triggered when a dragged item leaves a valid drop target.**
- Use this to revert any changes made to the drop target when the dragged item leaves it.

### Example:
```javascript
const handleDragLeave = (index) => {
  console.log("Dragged item left:", index);
};
```

### Usage:
```javascript
<li
  onDragLeave={() => handleDragLeave(index)}
>
  Item {index}
</li>
```

---

## **Complete Example**

Here’s how you can use all these event handlers in a drag-and-drop list:

```javascript
import React, { useState } from "react";

const DragDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (index) => {
    if (draggedItem === null || draggedItem === index) return;

    const updatedList = [...items];
    const itemToMove = updatedList.splice(draggedItem, 1)[0];
    updatedList.splice(index, 0, itemToMove);

    setItems(updatedList);
    setDraggedItem(index);
  };

  const handleDrop = () => {
    setDraggedItem(null);
  };

  return (
    <div>
      <h2>Drag and Drop List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault();
              handleDragOver(index);
            }}
            onDrop={handleDrop}
            onDragEnter={() => console.log("Entered:", index)}
            onDragLeave={() => console.log("Left:", index)}
            onDragEnd={() => console.log("Drag ended")}
            style={{
              opacity: draggedItem === index ? 0.5 : 1,
              backgroundColor: draggedItem === index ? "#d0d0d0" : "#f0f0f0",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragDropList;
```

---

## **Key Points**

1. **`draggable` Attribute**:
   - Set `draggable="true"` on elements you want to make draggable.

2. **`e.preventDefault()`**:
   - Required in `onDragOver` to allow dropping.

3. **State Management**:
   - Use state to track the dragged item and update the list during drag-and-drop operations.

4. **Visual Feedback**:
   - Use CSS to provide visual feedback (e.g., changing opacity or background color) during drag-and-drop.

---

## **Common Use Cases**

1. **Reordering Lists**:
   - Drag items to reorder them in a list.

2. **Moving Items Between Containers**:
   - Drag items from one container (e.g., a list) to another (e.g., a drop zone).

3. **File Uploads**:
   - Use `onDrop` to handle file uploads when files are dragged into a drop zone.

---

By understanding and using these `onDrag` event handlers, you can create rich, interactive drag-and-drop experiences in your React applications!
