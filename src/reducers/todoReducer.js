export const  todoReducer = (initialState = [] , action) =>{
    switch (action.type) {
        case 'add todo':
            return [ ...initialState , action.payload ]

        case 'delete todo':
            return initialState.filter(todo => todo.id != action.payload)

        default:
            
            return initialState;
    }
}