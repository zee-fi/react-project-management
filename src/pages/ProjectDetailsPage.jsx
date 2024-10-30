import { useParams } from "react-router-dom"
import axios from "axios";
import { API_URL } from "../config/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function ProjectDetailsPage () {

    const [project, setProject] = useState(null);
    
    const projectId = useParams();

    const getProject = () => {
        axios.get(`${API_URL}/projects/${projectId}?_embed=tasks`)
            .then((response) => {
                setProject(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getProject()
    }, []);

    if (project === null) {
        return <Loader />
    }


    return (
        <div className="ProjectDetailsPage">
            {project && (
                <>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </>
            )}

            {project &&
                project.tasks.map((task) => {
                    return (
                        <li className="TaskCard card" key={task.id}>
                            <h3>{task.title}</h3>
                            <h4>Description:</h4>
                            <p>{task.description}</p>
                        </li>)
                })}

            <Link to="/projects">
                <button>Back to projects</button>
            </Link>

            <Link to={`/projects/edit/${projectId}`}>
                <button>Edit Project</button>
            </Link>

        </div>
    )
}

export default ProjectDetailsPage