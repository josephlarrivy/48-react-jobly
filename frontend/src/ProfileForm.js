import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useLocalStorage from "./hooks/useLocalStorage";
import JoblyApi from "./api";

const ProfileForm = ({ signup }) => {

    const [storeToken, removeToken, verifyToken, retrieveToken] = useLocalStorage();

    let username;
    useEffect(() => {
        const getData = async () => {
            const token = await verifyToken()
            const username = token.username;
            let data = await JoblyApi.getUser(username)
            console.log(data)
        }
        getData()
    }, [])

    const INITIAL_STATE = {
        'username': '',
        'firstName': '',
        'lastName': '',
        'email': '',
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const navigate = useNavigate();

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        signup(formData)
        setFormData(INITIAL_STATE)
        navigate('/')
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

            <label htmlFor="firstName" className="col-md-6">First Name: </label>
            <input
                required
                id={formData.firstName}
                type="text"
                name="firstName"
                placeholder="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="col-md-6"
            /><br></br><br></br>

            <label htmlFor="lastName" className="col-md-6">Last Name: </label>
            <input
                required
                id={formData.lastName}
                type="text"
                name="lastName"
                placeholder="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="col-md-6"
            /><br></br><br></br>

            <label htmlFor="email" className="col-md-6">email: </label>
            <input
                required
                id={formData.email}
                type="text"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                className="col-md-6"
            /><br></br><br></br>

            <button>Submit</button>
        </form>
    )
}

export default ProfileForm;