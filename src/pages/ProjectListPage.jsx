import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader"
import { API_URL } from "../config/api";

function ProjectListPage () {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/projects/`)
            .then((response) => {
                setProjects(response.data)
            })
            .catch((e) => {
                console.log(e)
                console.log("Error getting projects from API")
            })
    }, []);

    return (
        <>
        <h1>Projects</h1>

        {projects === null ? <Loader />
            : projects.toReversed().map((projectDetails) => {
            return (<div key={projectDetails.id} className="card">{projectDetails.title}</div>)
        })}
        </>
    )

}

export default ProjectListPage