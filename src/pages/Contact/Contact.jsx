import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../features/authSlice'
import NavCom2 from '../../components/Navbar/Navbar2'
import NavLogin from '../../components/Navbar/Navbar2isLogin'
import FormContact from './components/FormContact'

const Contact = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    return (
        <div>
            {user ? <NavLogin /> : <NavCom2 />}
            <FormContact />
        </div>
    )
}

export default Contact