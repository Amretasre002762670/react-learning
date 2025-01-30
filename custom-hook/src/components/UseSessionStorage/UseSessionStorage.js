import { useState, useEffect } from 'react';

const UseSessionStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.sessionStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.error(e);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.sessionStorage.setItem(key, JSON.stringify(storedValue));
        } catch (e) { 
            console.error(e);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];

}