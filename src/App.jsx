import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import TaskFilter from "./Components/TaskFilter";
import TaskSort from "./Components/TaskSort";

const App = () => {
  // State for tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      startDate: "2024-03-30",
      endDate: "",
      status: "Pending",
      assignee: "John Doe",
      priority: "P1",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      startDate: "2024-03-29",
      endDate: "",
      status: "Pending",
      assignee: "Jane Doe",
      priority: "P2",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      startDate: "2024-03-28",
      endDate: "",
      status: "Pending",
      assignee: "James Smith",
      priority: "P0",
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description for Task 4",
      startDate: "2024-03-27",
      endDate: "",
      status: "In Progress",
      assignee: "John Doe",
      priority: "P1",
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description for Task 5",
      startDate: "2024-03-26",
      endDate: "",
      status: "In Progress",
      assignee: "Jane Doe",
      priority: "P2",
    },
    {
      id: 6,
      title: "Task 6",
      description: "Description for Task 6",
      startDate: "2024-03-25",
      endDate: "",
      status: "In Progress",
      assignee: "James Smith",
      priority: "P0",
    },
    {
      id: 7,
      title: "Task 7",
      description: "Description for Task 7",
      startDate: "2024-03-24",
      endDate: "2024-04-24",
      status: "Completed",
      assignee: "John Doe",
      priority: "P1",
    },
    {
      id: 8,
      title: "Task 8",
      description: "Description for Task 8",
      startDate: "2024-03-23",
      endDate: "2024-04-24",
      status: "Completed",
      assignee: "Jane Doe",
      priority: "P2",
    },
    {
      id: 9,
      title: "Task 9",
      description: "Description for Task 9",
      startDate: "2024-03-22",
      endDate: "2024-04-24",
      status: "Completed",
      assignee: "James Smith",
      priority: "P0",
    },
    {
      id: 10,
      title: "Task 10",
      description: "Description for Task 10",
      startDate: "2024-03-21",
      endDate: "",
      status: "Deployed",
      assignee: "John Doe",
      priority: "P1",
    },
    {
      id: 11,
      title: "Task 11",
      description: "Description for Task 11",
      startDate: "2024-03-20",
      endDate: "",
      status: "Deployed",
      assignee: "Jane Doe",
      priority: "P2",
    },
    {
      id: 12,
      title: "Task 12",
      description: "Description for Task 12",
      startDate: "2024-03-19",
      endDate: "",
      status: "Deployed",
      assignee: "James Smith",
      priority: "P0",
    },
    {
      id: 13,
      title: "Task 13",
      description: "Description for Task 13",
      startDate: "2024-03-18",
      endDate: "",
      status: "Deferred",
      assignee: "John Doe",
      priority: "P1",
    },
    {
      id: 14,
      title: "Task 14",
      description: "Description for Task 14",
      startDate: "2024-03-17",
      endDate: "",
      status: "Deferred",
      assignee: "Jane Doe",
      priority: "P2",
    },
    {
      id: 15,
      title: "Task 15",
      description: "Description for Task 15",
      startDate: "2024-03-16",
      endDate: "",
      status: "Deferred",
      assignee: "James Smith",
      priority: "P0",
    },
  ]);
  const [filteredTasks, setFilteredTasks] = useState(tasks); // Set filteredTasks to initial tasks state

  const [sortCriteria, setSortCriteria] = useState("priority");

  // Function to add task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]); // Update filtered tasks when adding a new task
    setShowTaskForm(false);
    alert("Task added successfully!");
  };

  // Function to delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setFilteredTasks(filteredTasks.filter((task) => task.id !== taskId)); // Update filtered tasks when deleting a task
  };
  const [showTaskForm, setShowTaskForm] = useState(false); // State to manage visibility of TaskForm

  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };
  // Function to update task status and priority
  const updateTask = (taskId, updatedStatus, updatedPriority) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: updatedStatus,
          priority: updatedPriority,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); // Update filtered tasks when updating a task
  };

  // Function to sort tasks
  const sortTasks = (criteria) => {
    const sortedTasks = [...filteredTasks].sort((a, b) => {
      if (criteria === "priority") {
        return a.priority.localeCompare(b.priority);
      } else if (criteria === "startDate") {
        return new Date(a.startDate) - new Date(b.startDate);
      } else if (criteria === "endDate") {
        return new Date(a.endDate) - new Date(b.endDate);
      }
      return 0;
    });
    setFilteredTasks(sortedTasks);
    setSortCriteria(criteria);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5 ml-10">Task Board</h1>

      <div
        className="container mx-auto p-4 border-2  border-cyan-50 rounded-lg "
        id="home"
      >
        <button
          onClick={toggleTaskForm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3"
        >
          Add Task
        </button>
        {showTaskForm && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleTaskForm}>
                &times;
              </span>
              <TaskForm addTask={addTask} />
            </div>
          </div>
        )}{" "}
        <TaskFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />
        <TaskSort onSort={sortTasks} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <TaskList
            title="Pending"
            tasks={filteredTasks.filter((task) => task.status === "Pending")}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
          <TaskList
            title="In Progress"
            tasks={filteredTasks.filter(
              (task) => task.status === "In Progress"
            )}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
          <TaskList
            title="Completed"
            tasks={filteredTasks.filter((task) => task.status === "Completed")}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
          <TaskList
            title="Deployed"
            tasks={filteredTasks.filter((task) => task.status === "Deployed")}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
          <TaskList
            title="Deferred"
            tasks={filteredTasks.filter((task) => task.status === "Deferred")}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        </div>
      </div>
    </>
  );
};

export default App;
