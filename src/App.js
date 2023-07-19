import {useState} from 'react'
import './App.css';
function App() {
  const [expression, setExpression] = useState('')
  const [answer, setAnswer] = useState('0')
  const display = (symbol) => {
    if (symbol === '0' && expression === '0') {
      return; // No permite agregar más ceros al principio si ya hay un cero inicial
    }
    if (symbol === '.' && expression.endsWith('.')) {
      return; // No permite agregar otro punto decimal inmediatamente después de otro punto
    }
  
    let newExpression = expression + symbol;
     // Verifica si hay más de un punto decimal consecutivo dentro de un número
  const numbers = newExpression.split(/[+\-*/]/);
  const lastNumber = numbers[numbers.length - 1];
  if (lastNumber.includes('.')) {
    const decimalCount = lastNumber.split('.').length - 1;
    if (decimalCount > 1) {
      return; // No permite agregar dos puntos decimales consecutivos dentro de un número
    }
  }

    setExpression(newExpression);
    if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
      setAnswer(symbol);
    } else {
      setAnswer(newExpression);
    }
    
  
    if (expression[expression.length - 1] == '=') {
      if (/[0-9.]/.test(symbol)){
        setExpression(symbol);
      } else {
        setExpression( answer + symbol);
      }
  }}
  const calculate = () => {
setAnswer(eval(expression));
setExpression((prev) => prev + "=")
  }
  const allClear = () => {
    setExpression('')
    setAnswer(0)
  }
  const clear = () => {
    setExpression((prev) => prev.split('').slice(0,prev.length - 1).join(''));
    setAnswer(0)
  }
  return (
    <div className="App">
      <header className="App-header">
       <div className="calculator">
        <div className="formula__screen" ><input  type="text" className="input" placeholder="0" disabled value={expression}/></div>
        <div className="display__output"id="display" >
          {answer}
        </div>
        <div className="button__container">
        <button onClick={allClear} id="clear" value="AC">AC</button>
          <button onClick={clear} id="C" value="C">C</button>
          <button onClick={() =>display('/')} id="divide"  value="/"className="button__recolour">/</button>
          <button onClick={() =>display('*')} id="multiply" value="*" className="button__recolour">*</button>
          <button onClick={() =>display('7')} id="seven" value="7">7</button>
          <button onClick={() =>display('8')} id="eight" value="8">8</button>
          <button onClick={() =>display('9')} id="nine" value="9">9</button>
          <button onClick={() =>display('-')} id="subtract" value="-" className="button__recolour">-</button>
          <button onClick={() =>display('4')} id="four" value="4">4</button>
          <button onClick={() =>display('5')} id="five" value="5">5</button>
          <button onClick={() =>display('6')} id="six" value="6">6</button>
          <button onClick={() =>display('+')} id="add"  value="+" className="button__recolour">+</button>
          <button onClick={() =>display('1')} id="one" value="1">1</button>
          <button onClick={() =>display('2')} id="two" value="2">2</button>
          <button onClick={() =>display('3')} id="three" value="3">3</button>
          <button onClick={() =>display('0')} id='zero' value="0">0</button>
          <button onClick={() =>display('.')} id="decimal" value=".">.</button>
          <button onClick={calculate} id='equals' value="=">=</button>
        </div>
       </div>
       <div className="Author__container">Designed and Coded By <br/><a href="https://www.facebook.com/GerardoMorat/">Gerardo Moratinos</a></div>
      </header>
    </div>
  );
}

export default App;
