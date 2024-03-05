import React, { useState } from 'react'
import TodoItem from './TodoItem';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setTodos([
                ...todos,
                {text: e.target.value,
                completed: false,
            id: Date.now()
        }
            ]);
            inputRef.current.value = "";
        }
    }

    // toggle Completed
    const handleCompleted = (id) => {
        const updatedList = todos.map((e) => {
            if(e.id === id) {
                e.completed = !e.completed;
            }
            return e;
        });
        setTodos(updatedList)
    }

    // Delete item
    const handleDelete = (id) => {
        const filter = todos.filter((e) => e.id !== id);
        setTodos(filter);
    }

    // handle Text update
    const handleUpdateText = (id, text) => {
        const updatedList = todos.map((e) => {
            if(e.id === id) {
                e.text = text;
            }
            return e;
        });

        setTodos(updatedList);
    }
  return (
    <div className='app'>
        <input type="text" onKeyDown={handleKeyPress} ref={inputRef} />
        {todos.map((e) => (
            <TodoItem
                {...e}
                key={e.id}
                updateCompleted = {handleCompleted}
                deleteTodo = {handleDelete}
                updateText = {handleUpdateText}
            />
            
        ))}
    </div>
  )
}

export default TodoApp

