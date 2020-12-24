import React, { useState } from 'react';
import './App.css';
import hooks from "./hooks";

function App() {

  const hookTypes = hooks.map(hook => hook['type']);

  const [comp, setComp] = useState(null);

  const onRadioSelect = (val) => {
    const selected = hooks.filter(hook => hook.type === val)[0].component;
    setComp(selected);
  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {
          hookTypes.map((hookType, ndx) => {
            return (
              <div key={ndx} style={{margin: 10, border: '1px solid black', padding: 10}} >
                <label style={{cursor: 'grab'}}>
                  <input style={{}} type="radio" name="hook" value={`${hookType}`} onChange={(e) => onRadioSelect(e.target.value)} />
                  <span style={{marginLeft: 10, marginRight: 10}}>{hookType}</span>
                </label>
              </div>
            );
          })
        }
      </div>
      <div style={{marginTop: 50, padding: 20}}>
        {comp}
      </div>
    </>
  );
}

export default App;
