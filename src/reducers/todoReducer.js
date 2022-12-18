export const  todoReducer = (initialState = [] , action) =>{
    switch (action.type) {
        case 'add todo':
            return [action.payload  ,...initialState ]

        case 'delete todo':
            return initialState.filter(todo => todo.id != action.payload)
        
        case 'cross out todo':
            return initialState.map(todo => {
                if(todo.id == action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                
                return todo;
            })
        
        case 'update todo':
            return initialState.map(todo => {
                if(todo.id == action.payload.id){
                    return{
                        ...todo,
                        description : action.payload.description
                    }
                }

                return todo;
            })

        default:
            
            return initialState;
    }
}