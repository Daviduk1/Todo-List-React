
import {useState} from 'react'

function App (props) {
    const [count, setCount] = useState(0)
    const [workPlace, setWorkPlace]= useState('univelcity')
    return (
        <div className = "App">
            <h1>This is {props.name} App</h1>
            <p>He is {props.age} years old</p>
            <p> he works at {workPlace}</p>
            <button onClick = {() => setWorkPlace('meta')}>click to change</button>
            <h2>{count}</h2>
            <button onClick = {() => setCount(count - 1)}>-- Decrease</button>
            <button onClick = {() => setCount(count +1)}>Increase ++</button>
        </div>
    )
}


export default App
