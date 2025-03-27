/* eslint-disable no-debugger */
/* eslint-disable react-internal/no-production-logging */
import './index.css';
import {createRoot} from 'react-dom/src/client/ReactDoM.js';
import * as React from 'react/src/React.js';
const {useState} = React;
function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  function handleClick() {
    console.log('count', count);
    setCount(count + 1);
  }
  return (
    <div>
      <div>hello counter:{count}</div>
      <button onClick={handleClick}>add</button>
    </div>
  );
}
// debugger;
createRoot(document.getElementById('root')).render(<App />);
