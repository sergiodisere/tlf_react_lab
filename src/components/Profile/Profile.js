import React, { useEffect, useState } from 'react'
import { getProfile } from '../../services/services'
import Avatar from '@mui/material/Avatar';
import './Profile.css'

const Profile = () => {

  const [dataProfile, setDataProfile] = useState("")

  useEffect(() => {
    getProfile().then((res) => {
      setDataProfile(res)
    }).catch();
  }, [])
  
  return (
    <div className='profile'>
      <div className='avatar'>
        <Avatar
          alt={dataProfile.username}
          src={dataProfile.avatar}
          sx={{ width: 60, height: 60, }}
        />
      </div>
      <h1>@{dataProfile.username}</h1>
      <p>{dataProfile.bio}</p>
    </div>
  )
}

export default Profile