import React, { useState } from 'react'
import SignUp from './SignUp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState(
        { "email": "", "password": "" }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3030/signIn", input).then(
            (response) => {
                console.log(response.data)

                if (response.data.status == "Incorrect Password") {
                    alert("Incorrect Password")

                }
                else if (response.data.status == "Invalid Email Id") {
                    alert("Invalid Email Id")
                }
                else {
                    let token = response.data.token
                    let userId = response.data.userId

                    console.log(token)
                    console.log(userId)

                    sessionStorage.setItem("userId", userId)
                    sessionStorage.setItem("token", token)

                    navigate("/create")
                }

            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"></div>
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Sign In</button>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <p>Don't have an account? <br /><a href="/signup" className="btn btn-primary">&nbsp;Sign Up</a></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignIn