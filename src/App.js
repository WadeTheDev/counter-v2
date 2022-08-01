import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

const App = () =>{
  let stateNumber = useState(1)
  let number = stateNumber[0]
  let setNumber = stateNumber[1]
const addition = () => {
  setNumber(number + 1) 
}
const soustraction = () => {
  setNumber(number - 1) 
}
  return (
    <>
    <Counter number={number} addition={addition} soustraction={soustraction}/>
    </>
  )
}
export default App;
