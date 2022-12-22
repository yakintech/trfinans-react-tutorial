import React, { useState } from 'react'

function StateSample3() {

    const [name, setname] = useState('');
    const [names, setnames] = useState([]);

    const add = () => {
        setnames([...names, name]);
        setname('');
    }

    return (<>
        <div>
            <h3>Users Lenght: {names.length}</h3>
        </div>
        <div>
            <label>Name: </label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
            <button onClick={() => setnames([])}>Clear All</button>
        </div>
        <div>
            <ul>
                {
                    names && names.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    </>)
}

export default StateSample3