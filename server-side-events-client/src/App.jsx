import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState(null);
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:4040/events");
    eventSource.onmessage = (event) => {
      console.log({ event });
      setFact(JSON.parse(event.data));
    };
  }, []);

  function showFact() {
    console.log({ fact });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Server Side Events</h1>
        {fact.map((f, i) => {
          return (
            <div key={i}>
              <p>{f?.info}</p>
              <p>
                <small>
                  <a
                    target={"_blank"}
                    noopener
                    noreferrer
                    className="App-link"
                    href={f?.source}
                  >
                    {f?.source}
                  </a>
                </small>
              </p>
            </div>
          );
        })}
        <div>
          <button onClick={showFact}>Register For Events</button>
        </div>
      </header>
    </div>
  );
}

export default App;
