import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [throttleQuery, setThrottleQuery] = useState("");
  const lastThrottleTime = useRef(0);

  // Debounce input waits for 500 ms after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  // Throttle input, API calls every 1000 ms
  const handleThrottle = () => {
    const now = Date.now();
    if (now - lastThrottleTime.current >= 500) {
      setThrottleQuery(query);
      lastThrottleTime.current = now;
    }
  };

  useEffect(() => {
    if (debounceQuery) {
      console.log(`Simulating API call for debounced query: ${debounceQuery}`);
    }
  }, [debounceQuery]);

  useEffect(() => {
    if (throttleQuery) {
      console.log(`Simulating API call for throttle query: ${throttleQuery}`);
    }
  }, [throttleQuery]);

  return (
    <div className="App">
      <h1>Throttle vs Debounce</h1>
      <input
        type="text"
        placeholder="Type search query..."
        onChange={(e) => {
          setQuery(e.target.value);
          handleThrottle();
        }}
        value={query}
      />

      <div>
        <h2>Debounced Results (Console Log)</h2>
        <p>Check the console for debounced query API calls.</p>
      </div>

      <div>
        <h2>Throttled Results (Console Log)</h2>
        <p>Check the console for throttled query API calls.</p>
      </div>
    </div>
  );
}

export default App;
