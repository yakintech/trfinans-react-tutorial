import React, { useState } from 'react'

function StateError() {

    const [counter, setcounter] = useState(0);



    // setcounter(10)

    return (<>
    <Title></Title>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>
    )
}

export default StateError



function Title(){
    return <h1>Title</h1>
}


function calc(x, y) {
    console.log('Calc Data');
    //
    //
}