import React from "react";
import { useLocalStorange } from "./useLocalStorange";
const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorange("todos1", []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

const addTodo = (text) => {
    const newTodos = [...todos];
        
        newTodos.push({
            text,
            completed: false,
        });
    saveTodos (newTodos);
};

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);

        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}



export { TodoContext, TodoProvider }; 

// const defaultTodos = [
//     { text: 'Cortar cebolla', completed: true },
//    { text: 'Tomar el Curso de Intro a React.js', completed: false },
//     { text: 'Llorar con la Llorona', completed: false },
//      { text: 'LALALALALA', completed: false },
//      { text: 'Usar estados derivados', completed: true },
//    ];
  
//    localStorage.setItem('todos1', JSON.stringify(defaultTodos));