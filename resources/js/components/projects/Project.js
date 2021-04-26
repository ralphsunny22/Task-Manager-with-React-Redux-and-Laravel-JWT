import { post } from 'jquery';
import React from 'react';
import { Link } from 'react-router-dom'

const Project = ({ project }) => {
    return (
        <div>
            <Link
                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                // to={`/${project.slug}`}
                to={project.path}
                >
                {project.name}
                <span className='badge badge-primary badge-pill'>
                    {project.tasks_count}
                </span>
            </Link>
        </div>
    )
}

export default Project
