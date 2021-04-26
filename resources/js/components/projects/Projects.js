import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../actions/projectActions';
import { Link } from 'react-router-dom';
import Project from './Project'

const Projects = () => {

    const projects = useSelector(state => state.project.projects)
    console.log(projects)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProjects())
        
    }, [dispatch])

    return (
        <div className='container py-4'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='card'>
                <div className='card-header'>All projects</div>
                <div className='card-body'>
                  <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                    Create new project
                  </Link>
                  <ul className='list-group list-group-flush'>
                    {projects.map(project => (
                      <Project key={project.id} project={project} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Projects
