import React, { useState } from 'react'

function ToDos() {

    const [name, setname] = useState('');
    const [todos, settodos] = useState([]);

    const add = () => {
        let newTodo = {
            id: todos.length + 1,
            name: name,
            isCompleted: false
        }

        console.log('new todo ', newTodo);
        settodos([...todos, newTodo]);

    }

    const changeStatus = (id) => {

        let todo = todos.find(q => q.id == id);
        todo.isCompleted = !todo.isCompleted;

        settodos([...todos])

    }

    const deleteItem = (id) => {

        let newTodos = todos.filter(q => q.id != id);

        settodos([...newTodos])

    }

    let completedLength  = todos.filter(q => q.isCompleted == true).length;


    return (<>
        <div>
                <h5>Total Todos: {todos.length}</h5>
                <h5>Total Completed: {completedLength}</h5>
        </div>
        <div>
            <label>ToDo Name:</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
            <button onClick={() => add()}>Add</button>
        </div>
        <div>
            <ul>
                {
                    todos && todos.map(item => {
                        let textDecoration = '';
                        if (item.isCompleted)
                            textDecoration = 'line-through';

                        return <div style={{display:'flex'}}>
                        <li onClick={() => changeStatus(item.id)} style={{ textDecoration: textDecoration, cursor: 'pointer' }}>{item.name}</li>
                        <button style={{marginLeft:'20px'}} onClick={() => deleteItem(item.id)}>Delete</button>
            
                        </div>
                    })
                }
            </ul>
        </div>
    </>
    )
}


export default ToDos