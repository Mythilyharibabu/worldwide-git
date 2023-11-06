import { StylesContext } from '@mui/styles'
import React from 'react'
import styles from "../components/user.module.css";
import { useAuth } from './Context/Authcontext';
import { useNavigate } from 'react-router';
export default function User() {
  const navigate = useNavigate();
  const { user,logout } = useAuth();
  console.log("1.user",user)
  const handleclick=()=>{
   logout();

   console.log("2.user",user)
   navigate("/")
  }
  return (
    <div className={styles.user}>
<div className={styles.parentavatar}>
<img src={user.avatar} className={styles.avatar}/><p>{user.name}</p>
<button className={styles.userbtn} onClick={handleclick}><b>LOGOUT</b></button>
</div>
    </div>
  )
}
