import  {REMOVE_TODO, ADD_TODO,COMPLETE_TODO,UPDATE_TODO, GET_TODO} from './todo.types'


export const addTodo = (payload) => (dispatch) => {
    dispatch({type:GET_TODO_LOADING});

    return axios
    .get('https://localhost:8080/todos')
}

export const todoGET = () => ({type: GET_TODO})
export const todoAdd = (payload) =>({type: ADD_TODO,payload})
export const todoComplete = (id) =>({type: COMPLETE_TODO, payload:id})
export const todoUpdate = (payload) =>({type: UPDATE_TODO,payload});
export const todoRemove = (id) =>({type: REMOVE_TODO,payload:id})