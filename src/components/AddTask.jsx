import { useState } from "react";
import axios from "axios";

import { API_URL } from "../config/api";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      description: description,
      projectId: parseInt(props.projectId), // api expects the projectId as a number
    };

    axios
      .post(`${API_URL}/tasks`, newTask)
      .then((response) => {
        // clear form
        setTitle("");
        setDescription("");

        // invoke the function in the parent component
        props.callbackToRefresh();
      })
      .catch((e) => console.log("Error creating a new project...", e));
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
