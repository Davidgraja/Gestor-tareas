import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const TodoFormEdit = ({editTodo , onInputSubmit , resetEditTodo}) => {

    const {description , onEventInput ,setFormState} = useForm(editTodo)

    useEffect(()=>{
        setFormState(editTodo)
    }, [editTodo])

    return (
        <>
            <form onSubmit={ onInputSubmit } className={'pt-2'} >
                <input 
                    type="text"
                    placeholder="¿Cual sera tu proxima Tarea?"
                    className="border p-1 min-w-fit  w-1/2 focus:outline-indigo-200 pr-2 placeholder:text-base text-gray-500"
                    value={ description }
                    onChange={onEventInput}
                    name={'description'}
                    autoComplete={'off'}
                    required
                />

                <button 
                    type="submit" 
                    className="ml-1 p-1 px-2 border rounded-md bg-green-300 text-white hover:bg-white hover:text-green-400 hover:border-green-300 mt-2" 
                >
                    Guardar
                </button>

                <button 
                    type="submit" 
                    className="ml-1 p-1 px-2 border rounded-md bg-blue-400 text-white hover:bg-white hover:text-blue-400 hover:border-blue-500 mt-2" 
                    onClick={ resetEditTodo }
                >
                    Cancelar
                </button>
            </form>
        </>
    )
}
