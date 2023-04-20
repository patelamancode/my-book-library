import React, { useContext } from 'react'
import { BookDataContext } from '../context/DataContext'
import '../components/Profile.css'

const Profile = () => {

  const {userData} = useContext(BookDataContext);

  return (
    <div>
      <h1>User Profile</h1>
      <div className='user-info-card'>
        <img src={userData.img} alt='' />
        <div className='user-details'>
          <p><b>Name :</b>{userData.name}</p>
          <p><b>Bio :</b>{userData.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
