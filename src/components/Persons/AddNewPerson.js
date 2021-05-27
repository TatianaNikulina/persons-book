import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {GlobalContext} from "../App";

const AddNewPerson = () => {

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        age: '',
        email: '',
        phone: '',
        avatar: ''
    })

    const cnt = useContext(GlobalContext)
    let history = useHistory()

    const changeFieldHandle = event => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }

    const submitHandle = event => {
        event.preventDefault()
        cnt.addPerson(formData)
        history.push('/')
    }

    return (
        <form onSubmit={submitHandle}>
            <div>
                <label>First Name</label>
                <input type="text" name="fName" onChange={changeFieldHandle}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lName" onChange={changeFieldHandle}/>
            </div>
            <div>
                <label>Age</label>
                <input type="text" name="age" onChange={changeFieldHandle}/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={changeFieldHandle}/>
            </div>
            <div>
                <label>Phone</label>
                <input type="text" name="phone" onChange={changeFieldHandle}/>
            </div>
            <div>
                <label>Avatar</label>
                <input type="text" name="avatar" onChange={changeFieldHandle}/>
            </div>
            <button type="submit" className="btn">Add</button>
        </form>
    )
}

export default AddNewPerson