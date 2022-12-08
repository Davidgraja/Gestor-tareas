
export const TodoItem = ( {todo  , onDeleteTodo} ) => {
    return (
        <>
            <li  className=" mt-2 w-2/3 p-3 flex justify-between items-center shadow-sm shadow-gray-400">
                <p 
                    className=" break-all mr-3"
                >
                    { todo.description }
                
                </p>

                <button 
                    className=" border p-1 px-3 rounded-md bg-red-400 text-white hover:bg-white hover:text-red-400 hover:border-red-500" 
                    onClick={ ()=> onDeleteTodo(todo.id)}
                >
                    Borrar  
                </button>
            </li>
        </>
    )
}
