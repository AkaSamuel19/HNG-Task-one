import React from 'react'
import profileImg from "./profile__img.svg"
import "./Profile.css"
import imgHover from "./hover.svg"
import imgFocus from "./focused.svg"

const Profile = () => {
  return (

      <div id="container">
        <div className="profile__img">
          <img src={profileImg} alt="" />
          
        </div>
        <img src={imgFocus} className ="imageFocus"/>
        <img src={imgHover} className ="imageHover"/>
        


        <div id="twitter">
          <p>Akande Samuel</p>
        </div>
        <div className="slack">
          Sammie
        </div>

      </div>
      

  )
}

export default Profile
