
import { TodoItem } from './TodoItem'

export const TodoList = ({ todosValues = []  , onDeleteTodo , onCroosOut}) => {
    return (
        <ul className=" list-disc">

            {
                todosValues.map(todo =>(
                    <TodoItem
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={onDeleteTodo}
                        onCroosOut = {onCroosOut}
                    />
                ))
            }

        </ul>
    )
}
