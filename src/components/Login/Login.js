import React, { useEffect, useState } from 'react'
import './Login.css'
import { getAuth } from '../../services/services'
import { useNavigate } from "react-router-dom";
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const Login = ({ setUserAuth }) => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setUserAuth(true)
            navigate('/home')
        }else {
            setUserAuth(false)
        }
    }, [navigate, setUserAuth])

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        getAuth(email, pass).then((response) => {
            localStorage.setItem('token', response.access_token)
            setUserAuth(true)
            navigate('/home')
        }).catch(() => {
            setAlert(true)
        }).finally(()=>setLoading(false));
    }
    return (
        <div className="form">
            {alert &&
                <div className='alert'>
                    <MuiAlert elevation={6} variant="filled" severity='error' onClose={setTimeout(() => setAlert(false), 5000)} >Invalid email or password</MuiAlert>
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email</label>
                    <input type="name" name={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name={pass} onChange={(e) => setPass(e.target.value)} required />
                </div>
                <div className="button-container">
                    <button>Login</button>
                </div>
            </form>
            {loading && <CircularProgress/>}
        </div>
    )
}

export default Login