import { useState } from "react"
import './Counter.scss';

export default function Counter() {
 
    const [count, setCount] = useState(0);
    
    function add() {
        setCount(prevCount => prevCount + 1);
    }

    function subtract() {
        setCount(prevCount => prevCount - 1);
    }
    
    return (
        <div className="counter">
            <button 
                className="counter__button counter__button--minus" 
                onClick={subtract}>–</button>
            <div className="counter__count">
                <h1>{count}</h1>
            </div>
            <button 
                className="counter__button counter__button--plus" 
                onClick={add}>+</button>
        </div>
    )
}
