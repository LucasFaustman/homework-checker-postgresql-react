import React, {Fragment, useState} from "react";

export default function InputToDo () {


    const [description, setDescription] = useState('')


    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { description }
            const response = fetch("http://localhost:3131/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = '/'
        } catch (err) {
            console.log(err.message)
        }
    }

    function handleChange(e) {
        setDescription(e.target.value)
    }

    return <Fragment>
        <h1 className="text-center mt-5">Homework Checklist</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input 
            className="form-control" 
            type='text' 
            value={description} 
            onChange={handleChange} />
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
}