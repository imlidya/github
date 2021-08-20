import React from 'react'
import '../styles/Repository.css'

const Repository = () => (
    <div className="repo">
        <div>
            <div className="title">
                <i className="fa fa-book pr-1"></i>
                <a href="#"><span>Repo Nameeeeeeeeeeeeeeeeeeeeeeeeee</span></a>
            </div>
            <span className="description">Description</span>
        </div>
        <div className="d-flex">
            <div className="subitem">
                <i className="fa fa-code pr-1"></i>
                <span>Language</span>
            </div>
            <div className="subitem">
                <i className="fa fa-star pr-1"></i>
                <span>Star</span>
            </div>
            <div className="subitem">
                <i className="fa fa-code-fork pr-1"></i>
                <span>Fork</span>
            </div>
        </div>
    </div>
)

export default Repository