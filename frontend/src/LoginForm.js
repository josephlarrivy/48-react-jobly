import React, { useState } from "react";


const LoginForm = ({ login }) => {

    const INITIAL_STATE = {
        'username': '',
        'password': ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        login(formData)
        setFormData(INITIAL_STATE)
    }


    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="username" className="col-md-6">username: </label>
            <input
                required
                id={formData.username}
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                className="col-md-6"
            /><br></br><br></br>

            <label htmlFor="password" className="col-md-6">password: </label>
            <input
                required
                id={formData.password}
                type="text"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                className="col-md-6"
            /><br></br><br></br>

            <button>Submit</button>
        </form>
    )
}

export default LoginForm;