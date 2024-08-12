// src/App.js
import React, { useState } from 'react';

function App() {
  const [strings, setStrings] = useState('');
  const [suffix, setSuffix] = useState('');
  const [result, setResult] = useState([]);

  const addSuffix = async () => {
    const response = await fetch('http://localhost:3001/add-suffix', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ strings: strings.split(','), suffix }),
    });

    const data = await response.json();
    setResult(data.suffixedStrings);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Add Suffix to Strings</h1>
      <input
        type="text"
        placeholder="Enter strings (comma separated)"
        value={strings}
        onChange={(e) => setStrings(e.target.value)}
        style={{ padding: '10px', width: '300px', margin: '10px 0' }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter suffix"
        value={suffix}
        onChange={(e) => setSuffix(e.target.value)}
        style={{ padding: '10px', width: '300px', margin: '10px 0' }}
      />
      <br />
      <button onClick={addSuffix} style={{ padding: '10px', cursor: 'pointer' }}>
        Add Suffix
      </button>
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Suffixed Strings: {result.join(', ')}
      </div>
    </div>
  );
}

export default App;
