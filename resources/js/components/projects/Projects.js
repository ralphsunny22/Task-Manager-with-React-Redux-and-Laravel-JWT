import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../actions/projectActions';

const Projects = () => {

    const projects = useSelector(state => state.project.projects)
    console.log(projects)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects())
        
    }, [dispatch])

    return (
        <div>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects
