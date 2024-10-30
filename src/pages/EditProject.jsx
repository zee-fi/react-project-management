
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API_URL } from "../config/api";


function EditProject() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {projectId} = useParams();

    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`${API_URL}/projects/${projectId}`)
            .then( response => {
                setTitle(response.data.title);
                setDescription(response.data.description)
            })
            .catch((error) => console.log("Error getting project details from the API...", error));
    }, [projectId]);


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newDetails = {
            title: title,
            description: description
        }

        axios.put(`${API_URL}/projects/${projectId}`, newDetails)
            .then( response => {
                navigate(`/projects/${projectId}`); // redirect to project details page
            })
            .catch(e => console.log("Error updating project...", e));
    }


    return (

        <div className="EditProjectPage">

            <h3>Edit the Project</h3>

            <form onSubmit={handleFormSubmit}>
                
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="enter the title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        placeholder="enter the description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <button type="submit">Update Project</button>
            </form>

        </div>
    );
}

export default EditProject;