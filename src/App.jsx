import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState("0")
  
  function handleClick(e){
    const re = /[0-9]/g;
    const reSymbol = /[+/*-]/g;
    const reVerificaton = /[+/*]/g;
    
    if(e.target.id === 'equals'){
      setNum(String(eval(num)))
      console.log(num)
      return
    }
    
    if(num.includes('*-') && e.target.innerText === '+'){
      setNum(prev => prev.slice(0, -2) + e.target.innerText)
      return
    }else if(reSymbol.test(num.slice(-1)) && reVerificaton.test(e.target.innerText)){
      setNum(prev => prev.slice(0, -1) + e.target.innerText)
      return
    }
    
    if(e.target.id === "clearEntry" && num.length > 1){
      console.log(num)
      setNum(prev => prev.slice(0, -1))
      return
    } else if (e.target.id === "clearEntry"){
      return
    }
    
    if(e.target.id === 'clear'){
      setNum("0")
    } else if(num.slice(-1) === '.' && (e.target.id === 'decimal' || !re.test(e.target.innerText))){
      return
    } else if(num.includes('.') && !reSymbol.test(num) && e.target.innerText === '.'){
      return
    } else {  
      setNum(prev => prev === "0" ? e.target.innerText : prev + e.target.innerText)
    }

  }
  return (
    <div className='container'>
      <header className='title'>
        <div id='display'>{num}</div>
      </header>
      <main className='buttons'>
        <button id='equals' onClick={handleClick}>=</button>
        <button id='zero' onClick={handleClick}>0</button>
        <button id='one' onClick={handleClick}>1</button>
        <button id='two' onClick={handleClick}>2</button>
        <button id='three' onClick={handleClick}>3</button>
        <button id='four' onClick={handleClick}>4</button>
        <button id='five' onClick={handleClick}>5</button>
        <button id='six' onClick={handleClick}>6</button>
        <button id='seven' onClick={handleClick}>7</button>
        <button id='eight'onClick={handleClick}>8</button>
        <button id='nine'onClick={handleClick}>9</button>
        <button id='add'onClick={handleClick}>+</button>
        <button id='subtract'onClick={handleClick}>-</button>
        <button id='multiply'onClick={handleClick}>*</button>
        <button id='divide'onClick={handleClick}>/</button>
        <button id='decimal'onClick={handleClick}>.</button>
        <button id='clear' onClick={handleClick}>AC</button>
        <button id='clearEntry' onClick={handleClick}>CE</button>
      </main>
    </div>
      
  )
}

export default App
