### Use `useMemo` for Expensive Calculations

If the list involves any expensive calculations or derived data, you can use `useMemo` to memoize the result and prevent recalculations on every render.

For example, if you need to filter a list based on user input:

```javascript
import React, { useMemo } from 'react';

const List = ({ items, filterText }) => {
  const filteredItems = useMemo(() => {
    return items.filter(item => item.name.includes(filterText));
  }, [filterText, items]);

  return (
    <div>
      {filteredItems.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};
```