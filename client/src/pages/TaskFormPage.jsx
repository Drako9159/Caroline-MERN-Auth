import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";

export default function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { tasks } = useTasks();

  const onSubmit = handleSubmit((data) => {});

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <textarea
          rows={"3"}
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
