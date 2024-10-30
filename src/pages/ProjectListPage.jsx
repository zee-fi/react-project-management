import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader"

function ProjectListPage () {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get("https://project-management-api-4641927fee65.herokuapp.com/projects/")
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
            : projects.map((projectDetails) => {
            return (<div key={projectDetails.id} className="card">{projectDetails.title}</div>)
        })}
        </>
    )

}

export default ProjectListPage