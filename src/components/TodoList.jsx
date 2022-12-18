import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem'

export const TodoList = ({ todosValues = []  , onDeleteTodo , onCroosOut ,onEventEditTodo}) => {
    return (
        <ul className=" list-disc">

            {
                todosValues.map(todo =>(
                    <TodoItem
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={onDeleteTodo}
                        onCroosOut = {onCroosOut}
                        onEventEditTodo = { onEventEditTodo }
                    />
                ))
            }

        </ul>
    )
}

TodoList.propTypes = {
    todosValues : PropTypes.array.isRequired,
    onDeleteTodo : PropTypes.func.isRequired,
    onCroosOut : PropTypes.func.isRequired
}