import React, { useState } from "react";

const Task = ({ task, onDelete, onUpdate }) => {
  const {
    id,
    title,
    description,
    startDate,
    endDate,
    status,
    assignee,
    priority,
  } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedStatus, setUpdatedStatus] = useState(status);
  const [updatedPriority, setUpdatedPriority] = useState(priority);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleStatusChange = (e) => {
    setUpdatedStatus(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setUpdatedPriority(e.target.value);
  };

  const handleUpdateClick = () => {
    onUpdate(id, updatedStatus, updatedPriority);
    setIsEditing(false);
  };

  const handleDeleteConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleDeleteCancel = () => {
    setShowConfirmation(false);
  };

  const handleDelete = () => {
    onDelete(id);
    setShowConfirmation(false);
  };

  return (
    <div className="bg-slate-200 p-2 mb-2 rounded-lg">
      <div className="mb-0">
        <h3 className="text-lg font-bold border-b text-center">{title}</h3>
        <p>{description}</p>
        <p>
          <span style={{ fontWeight: "bold" }}>Start Date:</span> {startDate}
        </p>
        {status === "Completed" && (
          <p>
            <span style={{ fontWeight: "bold" }}>End Date:</span> {endDate}
          </p>
        )}
      </div>
      {isEditing ? (
        <div>
          <select
            value={updatedStatus}
            onChange={handleStatusChange}
            className="border p-2 mr-2 rounded-lg"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deployed">Deployed</option>
            <option value="Deferred">Deferred</option>
          </select>
          <select
            value={updatedPriority}
            onChange={handlePriorityChange}
            className="border p-2 mr-2 rounded-lg"
          >
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <button
            onClick={handleUpdateClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <p>
            <span style={{ fontWeight: "bold" }}>Status:</span> {status}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Assignee:</span> {assignee}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Priority:</span> {priority}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-1"
          >
            Edit
          </button>
          {status !== "Completed" && (
            <button
              onClick={handleDeleteConfirmation}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-1"
            >
              Delete
            </button>
          )}
          {/*Delete Confirmation box */}
          {showConfirmation && (
            <div className="modal">
              <div className="modal-content">
                <p>Do you wish to delete the task?</p>
                <div>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 mt-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleDeleteCancel}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
