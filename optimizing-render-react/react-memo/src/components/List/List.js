import React from 'react';

import ListItem from '../ListItem/ListItem';

const List = ({ items }) => {
    console.log("List");
    return (
        <div>
            {
                items.map((item) => {
                    return <ListItem key={item.id} item={item} />
                })
            }
        </div>
    );
}

export default List;