import React from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

const App = () => {
    return (
    <main className='react-calculator'>
        <h1 className="title">Calculadora</h1>
        <Result value={undefined} />
        <Numbers onClickNumber={number => {
            console.log("Click en number", number) 
        }} />
        <Functions 
            onContentClear={() => 
                console.log("Content Clear")}
            onDelete={() => 
                console.log("onDelete")}
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation:", operation)
            } 
            onClickEqual={equal => 
                console.log("Igual:", equal)
            }
        />
    </main>)
}

export default App;

