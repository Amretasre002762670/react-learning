### Use `useCallback` for Stable Event Handlers

When passing event handlers or callbacks to child components, the function reference may change on every render. This can cause unnecessary re-renders of child components, even if the event handler's logic hasn't changed.

Using `useCallback` allows you to memoize the event handler function:

```javascript
import React, { useCallback } from 'react';

const ListItem = React.memo(({ item, onClick }) => {
  console.log('Rendering:', item.name);
  return <div onClick={() => onClick(item)}>{item.name}</div>;
});

const List = ({ items }) => {
  const handleClick = useCallback((item) => {
    console.log(item.name);
  }, []);

  return (
    <div>
      {items.map(item => (
        <ListItem key={item.id} item={item} onClick={handleClick} />
      ))}
    </div>
  );
};
```

Using `useCallback` ensures that the `handleClick` function maintains the same reference across renders unless its dependencies change.