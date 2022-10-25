import React, {Fragment, useState} from "react";

export default function EditTodo({todo}) {

    const [description, setDescription] = useState(todo.description)


    function handleChange(e) {
        setDescription(e.target.value)
    }

    //edit description

    const updateDescription = async e => {
        e.preventDefault()
        try {

            const body = { description }
            const response = await fetch(`http://localhost:3131/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/"
        } catch (err) {
            console.log(err.message)
        }
    }
    return (
        <Fragment>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
            Edit
            </button>


            <div className="modal" 
            id={`id${todo.todo_id}`}  
            onClick={() => setDescription(todo.description)}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Edit Homework Task</h4>
                    <button type="button"
                    onClick={() => setDescription(todo.description)}
                     className="close" 
                     data-dismiss="modal">&times;
                     </button>
                </div>
                <div className="modal-body">
                    <input type="text" 
                    value={description}
                    onChange={handleChange}
                    className="form-control" />
                </div>
                <div className="modal-footer">
                <button type="button" 
                    className="btn btn-warning" data-dismiss="modal"
                    onClick={e => updateDescription(e)}>
                        Edit
                </button>
                    <button type="button" 
                    className="btn btn-danger" 
                    onClick={() => setDescription(todo.description)} 
                    data-dismiss="modal">Close
                </button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}