import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um dev full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Correr",
      description: "Ter um bom condicionamento físico",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Auto escola",
      description: "Tirar habilitação",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTask(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTask(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTask([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

//so posso retornar um elemento. Uma div ou algo que seja único
