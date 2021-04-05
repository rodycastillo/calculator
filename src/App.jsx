/* eslint no-eval: 0 */
import React, { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

const App = () => {
    const [stack, setStack] = useState("");

    return (
    <main className='react-calculator'>
        <h1 className="title">Calculadora</h1>
        <Result value={stack} />
        <Numbers onClickNumber={number => {
            console.log("Click en number", number) 
            setStack(`${stack}${number}`)
        }} />
        <Functions 
            onContentClear={() => {
                console.log("Content Clear")
                setStack('')
            }}
            onDelete={() => {
                if(stack.length > 0) {
                    const newStack = stack.substring(0, stack.length-1);
                    
                    setStack(newStack);
                }
            }}
        />
        <MathOperations 
            onClickOperation={operation => {
                console.log("Operation:", operation)
                setStack(`${stack} ${operation}`) 
            }} 
            onClickEqual={equal => {
                console.log("Igual:", equal)
                // setStack(`${stack} ${equal}`) 
                setStack(eval(stack).toString())
            }}
        />
    </main>)
}

export default App;

