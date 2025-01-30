import React from 'react';

const ListItem = React.memo(({item, onClick}) => {
    return (
        <div onClick={onClick} style={{ cursor: "pointer" }} >{ item.name }</div>
    )
})

export default ListItem;