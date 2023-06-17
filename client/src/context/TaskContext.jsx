import { createContext, useContext, useState } from "react";
import {
  createTasksRequest,
  getTasksRequest,
  deleteTasksRequest,
  getTaskRequest,
  updateTasksRequest,
} from "../api/tasks";

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

  async function getTasks() {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function createTask(task) {
    try {
      const res = await createTasksRequest(task);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTask(id) {
    try {
      const res = await deleteTasksRequest(id);
      if (res.status === 204) setTasks(tasks.filter((e) => e._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function getTask(id) {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTask(id, task) {
    try {
      await updateTasksRequest(id, task);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TaskContext.Provider
      value={{ createTask, getTasks, getTask, deleteTask, updateTask, tasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}
