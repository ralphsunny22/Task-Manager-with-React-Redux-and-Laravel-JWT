import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../../actions/projectActions";

const SingleProject = props => {
    const project = useSelector(state => state.project.project);
    console.log(project);
    // const { tasks } = project.tasks;

    const { slug } = props.match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProject(slug));
    }, [dispatch, slug]);

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">{project.name}</div>
                        <div className="card-body">
                            <p>{project.description}</p>

                            <button className="btn btn-primary btn-sm">
                                Mark as completed
                            </button>

                            <hr />

                            <ul className="list-group mt-3">
                                {tasks.map(task => (
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                        key={task.id}
                                    >
                                        {task.title}

                                        <button className="btn btn-primary btn-sm">
                                            Mark as completed
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;
