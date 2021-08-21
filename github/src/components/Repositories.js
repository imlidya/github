import React from 'react'
import Repository from './Repository'
import '../styles/Repositories.css'

const Repositories = ({repos, user}) => (
    <section className="repositories">
        {repos.map((repo) => (
            <Repository key={repo.id} repo={repo} user={user} />
        ))}
    </section>
)

export default Repositories