
import { useForm } from "../hooks/useForm";
import { TodoFormAdd , TodoFormEdit } from "./";

export const TodoAdd = ( { onNewTodo , editTodo , resetEditTodo , onEditTodo }) => {

    
    const {description  , onEventInput , onResetForm } = useForm({description : ''});


    const onInputSubmit = (e) =>{
        e.preventDefault();

        if(description.length <= 1 ) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };

        onNewTodo( newTodo );
        onResetForm();

    }

    const onSubmitEdit = (e) =>{
        e.preventDefault();
        
        const update = e.target.description.value;

        if(update.trim().length<=1) return;

        const updateTodo = {
            id : editTodo.id,
            description : update
        };

        onEditTodo(updateTodo);
        resetEditTodo('');

    }

    const cancelEdit = () =>{
        resetEditTodo('');
        console.clear()
    }

    return (
        <>

            {
                !editTodo ? 
                <TodoFormAdd onInputSubmit={ onInputSubmit } description={ description } onEventInput={ onEventInput } />
                :
                <TodoFormEdit  onInputSubmit={ onSubmitEdit} editTodo = { editTodo } resetEditTodo = {cancelEdit} />

            }
        </>
    )
}
