import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {

    const [input, setInput] = new useState(
        { "name": "", "phone": "", "email": "", "password": "", "cnfPassword": "" }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        if (input.password === input.cnfPassword) {
            console.log(input)
            let newInput = {
                "name": input.name,
                "phone": input.phone,
                "email": input.email,
                "password": input.password
            }
            console.log(newInput)

            axios.post("http://localhost:3030/signup", newInput).then(
                (response) => {
                    console.log(response.data)

                    if (response.data.status == "success") {
                        alert("Sign Up Successful")
                        setInput({ "name": "", "phone": "", "email": "", "password": "", "cnfPassword": "" })
                    }
                    else {
                        alert("Email id already exists")
                    }

                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }
        else {
            alert("Password and Confirm Password does not match")
        }
    }

    return (
        <div>
            <div className="container">
                <br /><br />

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="number" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name='cnfPassword' value={input.cnfPassword} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <p>Already have an account? <button className="btn btn-primary">&nbsp;Login</button></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp