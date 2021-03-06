import React from 'react'
import '../styles/UserInfo.css'

const UserInfo = ({user}) => (
    <div className="user_info">
        <img 
            src={user.avatar_url}
            className="p-2 avatar"
            width="130"
            height="130"
            alt="profile_image"
        />
        <div className="user_infoDetails">
            <h5>{user.login}</h5>
            <div className="user_infos">
                    {user.location && (
                        <div className="user_infoDetail">
                            <i className="fa fa-map-marker pr-1"></i>
                            <span>Location ` </span>
                        </div>
                    )}
                    {user.blog && (
                        <div className="user_infoDetail">
                            <i className="fa fa-globe pr-1"></i>
                            <span>{user.email} ` </span>
                        </div>
                    )}
                    {user.email && (
                        <div className="user_infoDetail">
                            <i className="fa fa-envelope pr-1"></i>
                            <span>{user.email} ` </span>
                        </div>
                    )}
                    {user.twitter_username && (
                        <div className="user_infoDetail">
                            <i className="fa fa-twitter pr-1"></i>
                            <span>{user.twitter_username} ` </span>
                        </div>
                    )}
                    {user.followers && (
                        <div className="user_infoDetail">
                            <i className="fa fa-group pr-1"></i>
                            <span>{user.followers} ` </span>
                        </div>
                    )}
                    {user.following && (
                        <div className="user_infoDetail">
                            <i className="fa fa-heart pr-1"></i>
                            <span>{user.following} ` </span>
                        </div>
                    )}
            </div>
        </div>
    </div>
)

export default UserInfo