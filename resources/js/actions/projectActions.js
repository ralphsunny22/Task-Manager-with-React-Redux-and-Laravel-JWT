import { PROJECTS_LOADING, GET_PROJECTS } from './types';
import axios from 'axios';

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

