import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  function submitHandler() {
    alert(username);
  }

  return (
    <div className="App">
      <h1>React Forms </h1>

      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <br />
        <br />
        <button onClick={submitHandler}> Submit </button>
      </form>
    </div>
  );
}

export default App;
