import axios from 'axios'
const URL_BASE = 'https://api.github.com'

export async function getUser(username) {
    const userInfo = await axios.get(`${URL_BASE}/users/${username}`)
    console.log(userInfo, 'USERINFOOOO')
    return userInfo
}
 
export async function getRepo(username) {
    const repositories = await axios.get(`${URL_BASE}/users/${username}/repos`)
    console.log(repositories, 'REPOSITORIES')
    return repositories
}