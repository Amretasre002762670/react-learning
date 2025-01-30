import React from 'react';
import UseLocalStorage from '../UseLocalStorage/UseLocalStorage';

const StartComponent = () => {
    const [name, setName] = UseLocalStorage("name", "Deepika");

    return (
        <div className="container">
            <h1> UseLocalStorage Custom Hooks </h1>
            <h3>Stored Name: {name}</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
}

export default StartComponent;