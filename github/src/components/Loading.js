import React from 'react'
import '../styles/Loading.css'
import spinner from '../assets/loading-buffering.gif'

const Loading = () => (
    <div className="loading">
        <img src={spinner} alt="loading "></img>
    </div>
)

export default Loading