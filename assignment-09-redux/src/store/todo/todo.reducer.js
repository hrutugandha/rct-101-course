
export const todoReducer = (state = {todos:[]},{type,payload}) => {
    switch (type) {
        case GET_TODO:{
            return{
                ...state,
                
            }
        }
        case ADD_TODO: {

            return  {...state , todos: [
                {
                    ...payload,
                    id:state.todos.length
                }
            ]}
        }
        case REMOVE_TODO: {
            return  {...state}
        }
        case UPDATEE_TODO: {
            return  {...state}
        }
        case COMPLETE_TODO: {
            let newTodos = state.todos.map((todo) => {
                if(todo.id === payload.id){
                    todo.complete = true
                }
                return todo;
            });
            return newTodos;
        }
        default: {
            return state;
        }
    }
}