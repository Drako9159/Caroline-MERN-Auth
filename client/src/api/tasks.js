import axios from "./axios";

export async function getTasksRequest() {
  return await axios.get(`/tasks`);
}

export async function getTaskRequest(id) {
  return await axios.get(`/tasks/${id}`);
}

export async function createTasksRequest(task) {
  return await axios.post(`/tasks`, task);
}

export async function updateTasksRequest(id, task) {
  return await axios.put(`/tasks/${id}`, task);
}

export async function deleteTasksRequest(id) {
  return await axios.delete(`/tasks/${id}`);
}
