import React from 'react'
import NavBar from '../components/NavBar'
import UserInfo from '../components/UserInfo'
import Tabs from '../components/Tabs'
import Repositories from '../components/Repositories'

function userPage() {   
    return (
        <div>
            <NavBar></NavBar>
            <UserInfo></UserInfo>
            <Tabs></Tabs>
            <Repositories></Repositories>
        </div>
    )
}

export default userPage