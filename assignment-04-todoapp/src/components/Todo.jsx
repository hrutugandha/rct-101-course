import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Todo = () => {
  
    const [todos, setTodos] = useState([]);
    const [text,setText] = useState([])
    const [isChecked, setIsChecked] = useState(todos.isChecked);

    const deleteTodo = idToDelete => setTodos(currentTodos => currentTodos.filter(todo => todo.id !== idToDelete))

    const addTask = (newtask) => {

      let isTaskPresent = todos.some((todo) => todo.text === newtask);
      if(newtask && !isTaskPresent) {
        const payload = {
          text: text,
          isComplete: newtask
        };
        axios.post("http://localhost:8080/todos", payload)
      }

    }
  
    useEffect(() => {
      const getTodo = async () => {
        let res = await axios.get(
          `http://localhost:8080/todos`
        );
        setTodos(res.data);
      };
      getTodo();
    }, []);
  
    return (
      <div className="App">
       <div>
       {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input type="checkbox" checked={todo.isComplete}/>
              {todo.id}
              {" : "}
              {todo.text}
              <button onClick ={() => deleteTodo(todo.id)}>X</button>
            </div>
          );
        })}
       </div>
       <div>
           <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
           <button onClick={addTask}>Save</button>
       </div>
      </div>
    );
}

export default Todo
