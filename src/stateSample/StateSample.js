import React from 'react'

function StateSample() {

    let counter = 0;

    const increase = () => {
        counter++;
        console.log('Counter ', counter);
    }

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => increase()}>Increase</button>
    </>

    )
}

export default StateSample