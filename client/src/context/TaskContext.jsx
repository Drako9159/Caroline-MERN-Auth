import { createContext, useContext } from "react";

const TaskContext = createContext();

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  return <TaskContext.Provider value={{tasks}}>{children}</TaskContext.Provider>;
}
