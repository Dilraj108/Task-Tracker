import React, { useState } from "react";

const TaskFilter = ({ tasks, setFilteredTasks }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");

  const handleFilter = () => {
    let filteredTasks = tasks;

    // Filter by start date and end date
    if (startDate && endDate) {
      filteredTasks = filteredTasks.filter(
        (task) =>
          new Date(task.startDate) >= new Date(startDate) &&
          new Date(task.startDate) <= new Date(endDate)
      );
    }

    // Filter by assignee
    if (assignee) {
      filteredTasks = filteredTasks.filter((task) =>
        task.assignee.toLowerCase().includes(assignee.toLowerCase())
      );
    }

    // Filter by priority
    if (priority) {
      filteredTasks = filteredTasks.filter(
        (task) => task.priority === priority
      );
    }

    setFilteredTasks(filteredTasks);
  };

  return (
    <div className=" mb-5 p-4 flex flex-wrap justify-left">
      <div className="mb-4 flex items-center">
        <h2 className="text-xl font-medium mb-2 w-full mr-4">Filter By :</h2>
      </div>
      <div className="mb-4 flex items-center  mr-4">
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder="Assignee Name"
          className=" border text-center rounded-lg  marker:p-2 h-11"
        />
      </div>
      <div className="mb-4 flex items-center  mr-4">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border rounded-lg p-2 h-11"
        >
          <option value="" disabled hidden>
            Priority
          </option>
          <option value="All">All</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
      </div>
      <div className="mb-4 flex items-center  mr-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded-lg p-2 mr-2"
        />
      </div>
      <div className="mb-4 flex items-center  mr-4">
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded-lg p-2"
        />
      </div>

      <div className="mb-4 flex items-center  mr-4">
        <button
          onClick={handleFilter}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-11 w-30 ml-2 rounded-full "
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;
