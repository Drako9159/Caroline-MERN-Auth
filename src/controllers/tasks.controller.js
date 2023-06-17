import Task from "../models/task.model.js";

export async function getTasks(req, res) {
  try {
    const tasks = await Task.find({ user: req.user.id.id }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "SOMETHING_WENT_WRONG" });
  }
}

export async function getTask(req, res) {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "TASK_NOT_FOUND" });
    res.json(task);
  } catch (error) {
    return res.status(400).json({ message: "TASK_NOT_FOUND" });
  }
}

export async function createTask(req, res) {
  try {
    const { title, description, date } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id.id,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: "SOMETHING_WENT_WRONG" });
  }
}

export async function updateTask(req, res) {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "TASK_NOT_FOUND" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "TASK_NOT_FOUND" });
  }
}

export async function deleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "TASK_NOT_FOUND" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "TASK_NOT_FOUND" });
  }
}
