import { useEffect } from "react";
import { useReducer } from "react"
import { todoReducer } from "../reducers/todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


const initialState = []

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState  , init);

    useEffect(() => {
        localStorage.setItem('todos' , JSON.stringify( todos ));
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type : 'add todo',
            payload : todo
        }

        dispatch( action )
    }

    const handleDeleteTodo = (id) =>{
        const action = {
            type : 'delete todo',
            payload : id
        }

        dispatch( action )
    }

    return (
        <>
            <h1 className="mb-2 text-gray-400" >Todo App : <small className="text-green-400">10</small> , Pendientes : <small className="text-red-400"> 2</small></h1>
            <hr />

            <section className=" md:grid md:grid-cols-2">
                
            <div>
                <div >
                    {/* <h2 className=" my-2 text-green-300" >Tareas :</h2> */}

                    <TodoList todosValues={ todos } onDeleteTodo={ handleDeleteTodo } />
                    
                </div>
            </div>

            <div>
                <h4 className="my-2 text-gray-400">Agregar todo</h4>
                <hr />

                <TodoAdd onNewTodo={ (value) => handleNewTodo(value) }/>

            </div>
            </section>
        </>
    )
}
