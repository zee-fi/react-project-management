import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";

function CreateProject() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title: title,
      description: description,
    }

    axios
      .post(
        `${API_URL}/projects/`,
        newProject
      )
      .then((response) => {
        navigate("/projects")
      })
      .catch((e) => {
        console.log(e);
        console.log("error creating project");
      });
  };

  return (
    <div className="CreateProject">
      <h3>Add project</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="enter a title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>

        <label>
          Description:
          <textarea
            name="description"
            placeholder="enter a description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
}

export default CreateProject;
