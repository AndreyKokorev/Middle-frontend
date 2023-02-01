import React, { useState } from 'react';
import classes from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)


    return (
        <div>
            <h1 className={classes.title}>{count}</h1>
            <button
                onClick={()=> setCount(count + 1)}
            >Increment</button>
            <button
                onClick={()=> setCount(count - 1)}
            >Decrement</button>
        </div>
    );
};

export default Counter
