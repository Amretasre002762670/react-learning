# Build a Reusable Modal Component in React

## **Question**

Create a reusable `Modal` component in React. The component should:
- Accept `children`, `isOpen`, and `onClose` as props.
- Render a modal overlay with the content passed as `children`.
- Close the modal when the overlay is clicked or the `Escape` key is pressed.

### **Follow-up**
How would you make this component accessible (e.g., focus trapping, ARIA attributes)?

---

## **What to Look For**
- Ability to create reusable and composable components.
- Understanding of event handling (e.g., `onClick`, `onKeyDown`).
- Knowledge of accessibility best practices.

---

## **Solution**

Here’s a small React app that implements the `Modal` component:

### **1. Modal Component**

```javascript
import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Render nothing if modal is not open
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose} // Close modal on overlay click
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "100%",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
```

---

### **2. App Component**

```javascript
import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Reusable Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default App;
```

---

### **3. Accessibility Improvements**

To make the `Modal` component accessible:
1. **Focus Trapping**: Ensure focus remains within the modal when it is open.
2. **ARIA Attributes**: Add ARIA attributes to improve screen reader support.
3. **Keyboard Navigation**: Allow users to navigate the modal using the keyboard.

Here’s an updated version of the `Modal` component with accessibility improvements:

```javascript
import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      modalRef.current.focus(); // Focus the modal when it opens
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Render nothing if modal is not open
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose} // Close modal on overlay click
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "100%",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <h2 id="modal-title">Modal Title</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
```

---

### **4. Running the App**

1. Save the `Modal` component in a file named `Modal.js`.
2. Save the `App` component in a file named `App.js`.
3. Run the app using `npm start` or `yarn start`.

---

### **Key Features**
- **Reusable**: The `Modal` component can be used anywhere in the app.
- **Accessible**: Includes ARIA attributes and focus management.
- **User-Friendly**: Closes on overlay click or `Escape` key press.

---

### **Follow-up Discussion**
- **Focus Trapping**: Use a library like `focus-trap-react` to ensure focus remains within the modal.
- **ARIA Attributes**: Add `aria-describedby` for additional descriptions.
- **Animation**: Add animations for opening and closing the modal using CSS or libraries like `framer-motion`.

---

This small React app demonstrates how to build a reusable and accessible `Modal` component, making it a great example for a frontend engineering interview!