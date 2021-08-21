import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import UserInfo from '../components/UserInfo'
import Tabs from '../components/Tabs'
import Repositories from '../components/Repositories'
import NotFound  from '../components/NotFound'
import {getUser, getRepo} from '../api/Api'

function UserPage({match}) {  
    const [user, setUser] = useState([])
    const [repos, setRepos] = useState([])

    const usernameParams = match.params.username

    async function fetchUser() {
        const {data} = await getUser(usernameParams)
        setUser(data)
    }
    
    async function fetchRepo() {
        const {data} = await getRepo(usernameParams)
        setRepos(data)
    }
    
    useEffect(() => {
        fetchUser()
        fetchRepo()
    }, [])
    return (
        <>
            {user ? (
                <React.Fragment>
                <NavBar user={user} />
                <div className="container">
                    <UserInfo user={user} />
                    <Tabs repos={repos} user={user} />
                    <Repositories repos={repos} user={user} />
                </div>
                </React.Fragment>
            ) : (
                <NotFound />
            )}
        </>
    )
}

export default UserPage