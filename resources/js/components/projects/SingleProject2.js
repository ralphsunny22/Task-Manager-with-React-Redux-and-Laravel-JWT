import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleProject } from "../../actions/projectActions";
import AddTask from "../tasks/AddTask";
import Task from "../tasks/Task";

const SingleProject = props => {
    //error states for addTasks
    const [errMsg, setErrMsg] = useState(null);
    const [titleErr, setTitleErr] = useState(null);

    const error = useSelector(state => state.error);

    const project = useSelector(state => state.project.project);

    //will also update once we addTask
    const tasks = useSelector(state => state.project.tasks);

    //console.log(tasks);

    const { slug } = props.match.params;

    const dispatch = useDispatch();

    //getItems
    useEffect(() => {
        const project = window.localStorage.getItem("project");
        const tasks = window.localStorage.getItem("tasks");
        //console.log(tasks);
    }, [localStorage]);

    //setItems
    useEffect(() => {
        window.localStorage.setItem("project", JSON.stringify(project));
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [project]);

    //dispatch
    useEffect(() => {
        dispatch(singleProject(slug));
    }, []);

    //check errors for addTask
    useEffect(() => {
        if (error.id === "ADD_TASK_FAIL") {
            setErrMsg(error.msg.message);
            setTitleErr(error.msg.errors.title && error.msg.errors.title[0]);
        }
    }, [error]);

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {errMsg && (
                        <p className="alert alert-danger text-center">
                            {errMsg}
                        </p>
                    )}

                    <div className="card">
                        <div className="card-header"> {project.name} </div>
                        <div className="card-body">
                            <p> {project.description} </p>

                            <button className="btn btn-primary btn-sm">
                                Mark as completed
                            </button>

                            <hr />

                            <AddTask
                                project={project}
                                errMsg={errMsg}
                                titleErr={titleErr}
                            />

                            <ul className="list-group mt-3">
                                {tasks
                                    ? tasks.map(task => (
                                          <Task key={task.id} task={task} />
                                      ))
                                    : null}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
