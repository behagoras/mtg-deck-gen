import React from 'react';
import TableData from './TableData';
import data from '../data/locustGod2.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TableData data={data} />
      </header>
    </div>
  );
}

export default App;
