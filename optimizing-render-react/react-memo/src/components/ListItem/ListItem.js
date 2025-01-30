import React from 'react';

const ListItem = React.memo(({ item }) =>{
    return (
        <div>{ item.name }</div>
    )
});

export default ListItem;