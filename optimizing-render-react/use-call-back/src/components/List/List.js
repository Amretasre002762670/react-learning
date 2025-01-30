import React, { useCallback } from 'react';
import ListItem from "../ListItem/ListItem";

const List = ({ items }) => {

    const handleClick = useCallback((name) =>{
        console.log("click event fired on " + name);
    }, []);

    return (
        <div>
            {items.map(item => {
            return <ListItem key={item.id} item={item} onClick={(e) => handleClick(item.name)} />
        })}
        </div>
    )

}

export default List;
