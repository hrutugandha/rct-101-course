import React from 'react'
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();
const todos = useSelector((state) => state.todo.todos);

const addNew = () => {
  let value = ref.current.value;
  dispatch(
    addTodo({
      text: value,
      isComplete: false
    })
  )
}

const Todo = () => {
  return (
    <div>
      <h1>todo app</h1>
      <div>
        <input type="text" />
        <button type="submit" onClick={(e)=> addNew(e.target)}>Add</button>
      </div>
    </div>
  )
}

export default Todo
