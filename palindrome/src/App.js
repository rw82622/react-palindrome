import {useState, useRef} from 'react'
import './App.css';

function App() {
  const userInput = useRef('')
  const [result, setResult] = useState('')

  const checkPalindrome = () => {
    let temp = String(userInput.current.value).toLowerCase();
    console.log(temp)
    temp = temp.replace(/\W/g, "");
    temp === temp.split("").reverse().join("") ?
      setResult('true') : setResult('false');
  }

  return (
    <div className="App">
      <h1>Palindrome Checker</h1>
      <input
        type='text'
        className=''
        ref={userInput}
        id='userInput'
        />
        <button 
        className="btn btn-primary"
        onClick={checkPalindrome}
        >Check</button>
        <div className='feedback'>
        {result === 'true' && <h4>PALINDROME</h4>}
        {result === 'false' && <h4>NOT PALINDROME</h4>}
        </div>
    </div>
  );
}

export default App;
