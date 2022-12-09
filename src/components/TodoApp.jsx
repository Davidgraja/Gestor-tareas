
import { useTodos } from "../hooks/useTodos";
import { TodoAdd , TodoList } from "./";


export const TodoApp = () => {
    const {todos, handleNewTodo, handleCrossOutTodo, handleDeleteTodo, pendingTodos, todosCounter } = useTodos();

    return (
        <>
            <header className=" flex justify-around items-center h-14">
                <h1 className="text-gray-400 flex" >Tareas : <small className="text-green-400">{ todosCounter }</small> , Pendientes : <small className="text-cyan-600">{ pendingTodos } </small></h1>
                <a className="ml-24" href="https://github.com/Davidgraja/Gestor-tareas">
                    <i className="uil uil-github text-3xl"></i>
                </a>

            </header>
            <hr />

            <section className=" md:grid md:grid-cols-2">
                
            <div>
                <div >

                    <TodoList todosValues={ todos } onDeleteTodo={ handleDeleteTodo } onCroosOut ={(value)=> handleCrossOutTodo(value)} />

                </div>
            </div>

            <div>
                <h4 className="my-2 text-gray-400">Agregar tarea</h4>
                <hr />

                <TodoAdd onNewTodo={ (value) => handleNewTodo(value) }/>

            </div>
            </section>
        </>
    )
}
