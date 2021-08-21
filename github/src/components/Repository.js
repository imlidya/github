import React from 'react'
import '../styles/Repository.css'

const Repository = ({repo, user}) => (
    <div className="repo">
        <div>
            <div className="title">
                <i className="fa fa-book pr-1"></i>
                <a href={`https://github.com/${repo.full_name}`} target="_blank" rel="noopener norefferer">
                    <span>{repo.name}</span>
                </a>
            </div>
            <span className="description">{repo.description}</span>
        </div>
        <div className="d-flex">
            <div className="subitem">
                <i className="fa fa-code pr-1"></i>
                <span>{repo.language}</span>
            </div>
            <div className="subitem">
                <i className="fa fa-star pr-1"></i>
                <span>{repo.stargazers_count}</span>
            </div>
            <div className="subitem">
                <i className="fa fa-code-fork pr-1"></i>
                <span>{repo.forks_count}</span>
            </div>
        </div>
    </div>
)

export default Repository