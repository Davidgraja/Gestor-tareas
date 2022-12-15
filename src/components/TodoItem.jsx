import PropTypes from 'prop-types';


export const TodoItem = ( {todo  , onDeleteTodo , onCroosOut} ) => {
    return (
        <>
            <li  className=" w-10/12 mx-auto my-4  rounded border-l-2 border-indigo-300   p-3 flex  justify-between items-center shadow-sm shadow-gray-300 md:w-4/5 md:mx-0">
                <p 
                    className= {`break-all mr-3 hover:cursor-pointer ${ (todo.done) ? 'line-through decoration-black-300 decoration-2' : '' }`}
                    title="Click para tachar la tarea"
                    onClick={ ()=> onCroosOut( todo.id ) }
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

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onCroosOut: PropTypes.func.isRequired
}