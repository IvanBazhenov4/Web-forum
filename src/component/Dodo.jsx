import React, {useState} from 'react';

const Dodo = function ()  {
    const [dodo, setDodo] = useState(999)
    function increment() {
        setDodo(dodo + 1)
    }

    function decrement() {
        setDodo(dodo - 1)
    }
    return (
        <div>
            <h1>{dodo}</h1>
            <button onClick={increment}>Eggs+</button>
            <button onClick={decrement}>Eggs-</button>
        </div>
    );
};

export default Dodo;