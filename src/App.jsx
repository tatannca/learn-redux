import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, customize } from "./actions";
import { useState } from 'react';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment())
  const onDecrement = () => dispatch(decrement())
  const onSetNumber = (num) => {
    const parseNum = parseInt(num);
    dispatch(customize(parseNum))
  }

  const [number, setNumber] = useState('0');
  
  return (
    <div className="App">
      <h1>Counter {counter.countNumber}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <div>
        <input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}/>
          <button onClick={() => onSetNumber(number)}>custom</button>
      </div>
      
      {isLogged ? <h3>Valuable information I should't see</h3> : null}
    </div>
  );
}

export default App;
