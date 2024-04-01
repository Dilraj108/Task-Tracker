import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("P0");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      title,
      description,
      startDate: new Date().toISOString(),
      status,
      assignee,
      priority,
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setAssignee("");
    setPriority("P0");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between lg:flex-wrap"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2 rounded-lg text-center mb-2  md:w-1/4 md:mb-0"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded-lg text-center p-2 mr-2 mb-2  md:w-1/4 md:mb-0"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 mr-2  mt-2 rounded-lg md:w-1/5  md:mt-0"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Deployed">Deployed</option>
        <option value="Deferred">Deferred</option>
      </select>
      <input
        type="text"
        placeholder="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        className="border rounded-lg mt-2 text-center p-2 mr-2  md:w-1/4"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 mr-2 rounded-lg md:w-1/5 "
      >
        <option value="P0">P0</option>
        <option value="P1">P1</option>
        <option value="P2">P2</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2  md:w-auto"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
