import React from 'react'

function TodoItem({text, completed, id}) {
  return (
    <div className='item'>
        <div className="circle">{completed ? <span>&#10003;</span> : ""}</div>
        <div className={completed ? "strike" : ""}>text</div>
        <div className="close">X</div>
    </div>
  )
}

export default TodoItem