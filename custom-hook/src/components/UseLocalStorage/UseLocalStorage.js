import { useState, useEffect } from 'react';

const UseLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error in retriving the value" + error); 
            return initialValue;
        }
    });

    // useEffect for updating stored value
    useEffect(() => {
        try {
            console.log("Setting localStorage", key, storedValue); 
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error("Error in update useLocalStorage" + error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default UseLocalStorage;