
import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { TodoAdd , TodoList } from "./";


export const TodoApp = () => {
    const {todos, handleEditTodo, handleNewTodo, handleCrossOutTodo, handleDeleteTodo, pendingTodos, todosCounter } = useTodos();
    
    // estado que maneja el todo por editar
    const [editTodo, setEditTodo] = useState('');
    
    return (
        <>
            <header className=" flex justify-around items-center h-14">
                <h1 className="text-gray-400 flex" >Tareas : <small className="text-green-400">{ todosCounter}</small></h1>
                <h1 className="text-gray-400 flex"> Pendientes : <small className="text-cyan-600">{ pendingTodos } </small></h1>
                <a className="ml-24" href="https://github.com/Davidgraja/Gestor-tareas">
                    <i className="uil uil-github text-3xl"></i>
                </a>

            </header>
            <hr />

            <section className=" md:grid md:grid-cols-2 md:gap-3">
                
            <div>
                <h4 className="my-2 text-gray-400">Agregar tarea</h4>
                <hr className=" md:w-8/12" />

                <TodoAdd onNewTodo={ (value) => handleNewTodo(value)} editTodo ={editTodo} resetEditTodo = { setEditTodo}  onEditTodo = { handleEditTodo } />

            </div>
            <div>
                <div >

                    <TodoList todosValues={ todos } onDeleteTodo={ handleDeleteTodo } onCroosOut ={(value)=> handleCrossOutTodo(value)} onEventEditTodo = {setEditTodo} />

                </div>
            </div>

            </section>
        </>
    )
}
