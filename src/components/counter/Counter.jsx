import { useState } from "react"
import './Counter.scss';
import Count from "../count/Count";

export default function Counter() {
 
    const [count, setCount] = useState(0);
    
    function add() {
        setCount(prevCount => prevCount + 1);
    }

    function subtract() {
        setCount(prevCount => prevCount - 1);
    }

    console.log("Counter rendered");
    
    return (
        <div className="counter">
            <button 
                className="counter__button counter__button--minus" 
                onClick={subtract}>–</button>
            <Count count={count}/>
            <button 
                className="counter__button counter__button--plus" 
                onClick={add}>+</button>
        </div>
    )
}
