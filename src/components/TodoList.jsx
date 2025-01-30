import React, { useState } from "react";

const TodoList = () => {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState("");

    // Adicionar nova tarefa
    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") return;
        setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
        setNovaTarefa(""); // Limpa o input
    };

    // Remover uma tarefa da lista
    const removerTarefa = (index) => {
        setTarefas(tarefas.filter((_, i) => i !== index));
    };

    // Alternar o status de conclusão da tarefa
    const alternarConclusao = (index) => {
        setTarefas(
            tarefas.map((tarefa, i) =>
                i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            )
        );
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Lista de Tarefas</h2>

            {/* Input e botão para adicionar nova tarefa */}
            <input
                type="text"
                placeholder="Digite uma tarefa..."
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                style={{ padding: "8px", marginRight: "10px" }}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>

            {/* Lista de tarefas */}
            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                {tarefas.length > 0 ? (
                    tarefas.map((tarefa, index) => ( // Aqui está o uso do .map()
                        <li key={index} style={{ marginBottom: "10px" }}>
                            <span
                                onClick={() => alternarConclusao(index)}
                                style={{
                                    textDecoration: tarefa.concluida ? "line-through" : "none",
                                    cursor: "pointer",
                                }}
                            >
                                {tarefa.texto}
                            </span>
                            <button
                                onClick={() => removerTarefa(index)}
                                style={{ marginLeft: "10px", color: "red" }}
                            >
                                ❌
                            </button>
                        </li>
                    ))
                ) : (
                    <p>Nenhuma tarefa adicionada.</p>
                )}
            </ul>
        </div>
    );
};

export default TodoList;
