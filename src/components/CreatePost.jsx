import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const CreatePost = () => {

    const [input, setInput] = useState(
        { "Message": "", "userId": sessionStorage.getItem("userId") }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3030/create", input, {
            headers: { 'token': sessionStorage.getItem("token"), "Content-type": "application/json" }
        }).then(
            (response) => {

                if (response.data.status == "success") {
                    alert("Posted Successfully")
                }
                else {
                    alert("Something went wrong")
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
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label" >Post a Message</label>
                                <textarea name="Message" id="" className="form-control" value={input.Message} onChange={inputHandler}></textarea>
                            </div>
                            <div></div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost