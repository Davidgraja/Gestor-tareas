import { useForm } from "../hooks/useForm";

export const TodoAdd = ( { onNewTodo }) => {
    
    const {description , onEventInput , onResetForm} = useForm({description : ''});

    const onInputSubmit = (e) =>{
        e.preventDefault();

        if(description.length <= 1 ) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };

        onNewTodo( newTodo );
        onResetForm()

    }
    return (
        <>
            <form  onSubmit={ onInputSubmit } className={'pt-2'} >
                <input 
                    type="text"
                    placeholder="¿Cual sera tu proxima Tarea?"
                    className="border p-1 min-w-fit  w-1/2 focus:outline-indigo-200 pr-2 placeholder:text-base text-gray-500"
                    value={ description }
                    onChange={ onEventInput }
                    name={'description'}
                    required
                />

                <button 
                    type="submit" 
                    className="ml-1 p-1 px-2 border rounded-md bg-blue-300 text-white hover:bg-white hover:text-gray-500 hover:border-blue-300 mt-2" 
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
