import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '25px', color: '#4c53af'}}>Gerenciador de Tarefas</h1>
            <TodoList />
        </div>
    );
};

export default App;
