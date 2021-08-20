import React from 'react'
import NavBar from '../components/NavBar'
import UserInfo from '../components/UserInfo'
import Tabs from '../components/Tabs'

function userPage() {   
    return (
        <div>
            <NavBar></NavBar>
            <UserInfo></UserInfo>
            <Tabs></Tabs>
        </div>
    )
}

export default userPage