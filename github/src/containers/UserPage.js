import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import UserInfo from '../components/UserInfo'
import Tabs from '../components/Tabs'
import Repositories from '../components/Repositories'
import Loading  from '../components/Loading'
import {getUser, getRepo} from '../api/Api'

function UserPage({match}) {  
    const [user, setUser] = useState()
    const [repos, setRepos] = useState()

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
            {user? (
                <>
                    <NavBar user={user}></NavBar>
                    <div className="container">
                        <UserInfo user={user}></UserInfo>
                    </div>
                    <Tabs repos={repos} user={user}></Tabs>
                    <Repositories repos={repos} user={user}></Repositories>
                </>
            ): (
                <Loading></Loading>
            )}
        </>
    )
}

export default UserPage