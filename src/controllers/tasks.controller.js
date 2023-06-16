import Task from "../models/task.model.js";

export async function getTasks(req, res) {
  const tasks = await Task.find({ user: req.user.id.id }).populate("user");
  res.json(tasks);
}

export async function getTask(req, res) {
  const task = await Task.findById(req.params.id).populate("user");
  if (!task) return res.status(404).json({ message: "TASK_NOT_FOUND" });
  res.json(task);
}

export async function createTask(req, res) {
  const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id.id,
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
}

export async function updateTask(req, res) {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "TASK_NOT_FOUND" });
  res.json(task);
}

export async function deleteTask(req, res) {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "TASK_NOT_FOUND" });
  res.sendStatus(204);
}
