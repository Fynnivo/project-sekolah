import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../../features/authSlice'
import defaultProfile from '../../../asset/default-profile.png'
import axios from 'axios'

const DashAccount = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.patch(`http://localhost:5000/users/profile/${user.uuid}`, formData);
            setMessage(response.data.message);
            setTimeout(()=> {
                window.location.reload()
            },1000)
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };
    return (
        <div className='container mx-auto w-[97%]'>
            <div className='flex flex-col justify-center items-center'>
                {user && user.imageUrl ? <img className="w-24 h-24 rounded-full" src={user.imageUrl} alt="Rounded avatar" /> : <img className="w-24 h-24 rounded-full" src={defaultProfile} alt="Rounded avatar" />}
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} name="picture" id="" />
                    <button type='submit' className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>Update</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default DashAccount
