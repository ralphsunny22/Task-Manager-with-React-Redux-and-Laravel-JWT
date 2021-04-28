import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
    return (
        <div>
            <Link
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                //to={`/project/${project.slug}`}
                to={project.path}
            >
                {project.name}
                <span className="badge badge-primary badge-pill">
                    {project.tasksCount}
                </span>
            </Link>
        </div>
    );
};

export default Project;
