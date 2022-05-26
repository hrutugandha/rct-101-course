import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Pagination = () => {

    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalCount,setTotalCount] = useState(0);
  
    useEffect(() => {
      const getTodo = async () => {
        let res = await axios.get(
          `http://localhost:8080/todos?_page=${page}&_limit=5`
        );
        setTodos(res.data);
        setTotalCount(Number(res.headers['x-total-count']))
      };
      getTodo();
    }, [page]);
  
    return (
      <div className="App">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.id}
              {" : "}
              {todo.value}
            </div>
          );
        })}
        <button
          disabled={page <= 1}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          {"<"}
        </button>
        <button disabled={totalCount < page * 5} onClick={() => setPage(page + 1)}>{">"}</button>
      </div>
    );
}

export default Pagination
