import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0);


    // console.log('Component render');

    //SADECE BİR KERE ÇALIŞIR
    useEffect(() => {
        
        console.log('USE EFFECT!');
        //API CALL
        //EXPENSIVE METHODS

    }, [])


    useEffect(() => {
      console.log('USE EFFECT - 2');
    }, [counter2])
    

    return (<>
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increase</button>
        </div>
        <div>
            <h1>Counter-2: {counter2}</h1>
            <button onClick={() => setcounter2(counter2 + 1)}>Increase-2</button>
        </div>
    </>
    )
}

export default EffectSample