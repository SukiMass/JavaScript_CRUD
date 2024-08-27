import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './Features/user'


const Login = () => {

    const dispatch = useDispatch({})

    const [name, setName] = useState(String)
    const [age, setAge] = useState(Number)
    const [email, setEmail] = useState(String)

    const user = useSelector(state => state.user.value)

    return (
        <div>
            {!user.name && (
                <div>
                    <input value={name} onChange={e => setName(e.target.value)} />
                    <input value={age} onChange={e => setAge(e.target.value)} />
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </div>
            )}

            {!user.name ?  <button onClick={() => dispatch(login({
                name,
                age,
                email
            }))}>Login</button>
            :
        

            <button onClick={() => dispatch(logout())}>Logout</button>

        }
        </div>
    )
}

export default Login