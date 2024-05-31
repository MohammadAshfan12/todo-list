import React from "react";
import useTasks from "../../hooks/useTasks";
import Button from "../Button";
import InputField from "../InputField";
import "./TodoList.css";

const TodoList = () => {
  const {
    tasks,
    task,
    addTask,
    deleteTask,
    handleInputChange,
    animatingTasks,
  } = useTasks();

  return (
    <div className="todo-container">
      <div>
        <h1>To-Do List</h1>
        <div style={{ display: "flex", marginTop: '1rem' }}>
          <InputField
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Add a new task"
            className="input"
            onKeyDown={(e) => {
              if (e?.key === "Enter") {
                addTask();
              }
            }}
          />
          <Button
            label={"Add Task"}
            onClick={addTask}
            customClass="add-task"
            disabled={task?.length === 0}
          />
        </div>
      </div>

      <ul>
        {tasks?.length === 0 && (
          <div style={{ fontSize: "1.2rem", color: "#575151" }}>
            No Tasks...
          </div>
        )}
        {tasks?.length > 0 &&
          tasks.map((task) => (
            <li
              style={{
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              key={task.id}
              className={animatingTasks.includes(task.id) ? "fade-in" : ""}
            >
              <div style={{ width: '50%', textAlign: 'left'}}>{task.text}</div>{" "}
              <div className="date">({task.date})</div>
              <Button
                customClass="delete-task"
                label={"Delete"}
                onClick={() => deleteTask(task?.id)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
