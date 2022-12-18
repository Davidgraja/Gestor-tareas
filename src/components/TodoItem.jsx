import PropTypes from 'prop-types';

export const TodoItem = ( {todo  , onDeleteTodo , onCroosOut , onEventEditTodo } ) => {

    const eventEdit = () =>{
        
        onEventEditTodo(todo)
    }

    return (
        <>
            <li  className=" w-full  x-auto my-4  rounded border-l-2 border-indigo-300   p-3 flex justify-between items-center shadow-sm shadow-gray-300 md:w-10/12  md:mx-0">
                <p 
                    className= {`break-all mr-3 hover:cursor-pointer ${ (todo.done) ? 'line-through decoration-black-300 decoration-2' : '' }`}
                    title="Click para tachar la tarea"
                    onClick={ ()=> onCroosOut( todo.id ) }
                >
                    { todo.description }
                
                </p>

                <section className=' flex'>
                <button 
                    className=" border p-1 px-3 mr-2 rounded-md bg-blue-400 text-white hover:bg-white hover:text-blue-400 hover:border-blue-500" 
                    onClick={ eventEdit }
                    
                >
                    Editar
                </button>
                <button 
                    className=" border p-1 px-3 rounded-md bg-red-400 text-white hover:bg-white hover:text-red-400 hover:border-red-500" 
                    onClick={ ()=> onDeleteTodo(todo.id)}
                >
                    Borrar  
                </button>

                </section>
            </li>
        </>
    )
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onCroosOut: PropTypes.func.isRequired
}