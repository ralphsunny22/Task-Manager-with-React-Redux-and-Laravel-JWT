import { PROJECTS_LOADING, GET_PROJECTS, ADD_PROJECT, ADD_PROJECT_FAIL } from './types';
import axios from 'axios';
import { returnErrors } from './errorActions'

export const getProjects = () => dispatch => {
    dispatch({
        type: PROJECTS_LOADING
    });

    axios.get('http://127.0.0.1:8000/api/projects').then(res=>
        dispatch({
            type: GET_PROJECTS,
            payload: res.data,
        })
    )
    //.catch(err => {err.response.data, err.response.status})
}

//ADD PROJECT
export const addProject = (newProject) => (dispatch) => {
    axios.post('http://127.0.0.1:8000/api/projects', newProject).then(res=>
        dispatch({
            type: ADD_PROJECT,
            payload: res.data,
        })
    )
    .catch(err => {
        if(err.response){
            dispatch(returnErrors(err.response.data, err.response.status, 'ADD_PROJECT_FAIL'));
            dispatch({
                type: ADD_PROJECT_FAIL
            });
        }
        
    });
}

