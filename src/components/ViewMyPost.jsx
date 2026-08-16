import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewMyPost = () => {

    const [data, setData] = useState(

        [

        ]
    )

    const fetchData = () => {
        axios.post("http://localhost:3030/viewmypost", userId, {
            headers: { 'token': sessionStorage.getItem("token"), "Content-type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    const [token, setToken] = useState(sessionStorage.getItem("token"))
    const [userId, setuserId] = useState(
        { "userId": sessionStorage.getItem("userId") }
    )

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="card mb-3">
                                            <div class="row g-0">
                                                <div class="col-md-4">
                                                    <img src="..." class="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.Message}</h5>
                                                        <p class="card-text">Posted on {value.postedDate}</p>
                                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMyPost