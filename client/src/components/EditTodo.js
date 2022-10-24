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
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
            Edit
            </button>


            <div class="modal" 
            id={`id${todo.todo_id}`}  
            onClick={() => setDescription(todo.description)}>
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit Homework Task</h4>
                    <button type="button"
                    onClick={() => setDescription(todo.description)}
                     class="close" 
                     data-dismiss="modal">&times;
                     </button>
                </div>
                <div class="modal-body">
                    <input type="text" 
                    value={description}
                    onChange={handleChange}
                    className="form-control" />
                </div>
                <div class="modal-footer">
                <button type="button" 
                    class="btn btn-warning" data-dismiss="modal"
                    onClick={e => updateDescription(e)}>
                        Edit
                </button>
                    <button type="button" 
                    class="btn btn-danger" 
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