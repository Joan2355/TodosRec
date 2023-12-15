import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo (newTodoValue);
        setOpenModal(false);
    }
    const onCancel = (event) => {
        event.preventDefault();
        setOpenModal(false);
    }

    const onChange = (event) => {
      setNewTodoValue ( event.target.value );
    }


    return (
        <div className="TodoForm">
            <h2>Escribe tu nuevo Todo</h2>
            <form onSubmit={onSubmit}>
                <textarea type="text" id="todo" placeholder="Escribe tu tarea..." 
                value ={newTodoValue}
                onChange={onChange}
                />
                <div className="button-container">
                    <button type="submit">Guardar</button>
                    <button type="button" className="cancel" onClick={onCancel} >Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export { TodoForm };