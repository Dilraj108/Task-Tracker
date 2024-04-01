import React from "react";

const TaskSort = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className=" mb-5 p-4 justify-left" id="tasksort">
      <label className=" mb-2 font-medium w-full text-xl">Sort By :</label>
      <select
        onChange={handleSortChange}
        className="p-2 ml-5 border rounded-lg"
      >
        <option value="priority">Priority</option>
        <option value="startDate">Start Date</option>
        <option value="endDate">End Date</option>
      </select>
    </div>
  );
};

export default TaskSort;
