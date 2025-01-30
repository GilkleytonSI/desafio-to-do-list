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

    // Remover uma tarefa
    const removerTarefa = (index) => {
        setTarefas(tarefas.filter((_, i) => i !== index));
    };

    // Alternar status de conclusão
    const alternarConclusao = (index) => {
        setTarefas(
            tarefas.map((tarefa, i) =>
                i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            )
        );
    };

    // Contagem de tarefas pendentes
    const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;

    // Mensagem condicional
    let mensagem;
    if (tarefas.length === 0) {
        mensagem = "Nenhuma tarefa adicionada. Comece criando uma!";
    } else if (tarefasPendentes === 0) {
        mensagem = "Parabéns! Você concluiu todas as tarefas! 🎉";
    } else {
        mensagem = `Você tem ${tarefasPendentes} tarefa(s) pendente(s).`;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Lista de Tarefas</h2>

            {/* Input e botão para adicionar tarefa */}
            <input
                type="text"
                placeholder="Digite uma tarefa..."
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                style={{ padding: "8px", marginRight: "10px" }}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>

            {/* Exibe mensagem condicional */}
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>{mensagem}</p>

            {/* Lista de tarefas */}
            <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
                {tarefas.map((tarefa, index) => (
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
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
