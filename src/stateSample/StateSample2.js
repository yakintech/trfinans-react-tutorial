import React, { useState } from 'react'

function StateSample2() {

    const [counter, setcounter] = useState(0)

    const increase = () => {
        setcounter(counter + 1);
    }

    const setZero = () => {
        setcounter(0);
    }

    return (<>
        <h1>Counter: {counter}</h1>
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => setZero()}>Set 0</button>
    </>
    )
}

export default StateSample2

