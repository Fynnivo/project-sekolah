import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BsFillBagXFill } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'

const DashMain = () => {
    const [me, setMe] = useState([])
    const [subsData, setSubsData] = useState([])
    const user = async () => {
        try {
            await axios.get('http://localhost:5000/me')
                .then((res) => {
                    setMe(res.data)
                    console.log(res.data)
                    const response = res.data
                    const fetchDataSubs = async () => {
                        try {
                            await axios.get(`http://localhost:5000/v1/subscription/${response.subscription_id}`)
                                .then((res) => {
                                    setSubsData(res.data)
                                })
                        } catch (error) {
                            console.log(error.message)
                        }
                    }
                    fetchDataSubs()
                })
        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        user()
    }, [])
    return (
        <div className='container mx-auto w-[97%]'>
            <div className='flex gap-4 md:flex-row sm:flex-col flex-col'>
                <div className='bg-white w-[50%] sm:w-[30%] md:w-[20%] h-40 rounded-xl'>
                    <div className='mx-4 mb-1 flex justify-center flex-col'>
                        <div className='flex justify-between mt-2 mb-2'>
                            <span className='font-semibold text-lg  break-all'>Langganan</span>
                            <BsFillBagXFill className='mt-1' />
                        </div>
                        {me && me.subscription_status === 'active' ? <><span>Kamu berlangganan {subsData.description}</span></> : <span>Kamu belum berlangganan</span>}
                        {me && me.subscription_status === 'active' ? <Link to='/dashboard' className='mt-6 underline'>Atur Langganan</Link> : <Link className='mt-6 underline'>Langganan</Link>}
                    </div>
                </div>
                <div className='bg-white w-[50%] sm:w-[30%] md:w-[20%] h-40 rounded-xl'>
                    <div className='ml-5 mr-5 flex justify-center flex-col'>
                        <div className='flex justify-between mt-2 mb-2'>
                            <span className='font-semibold text-lg  break-all'>Role</span>
                            <FiUser className='mt-1' />
                        </div>
                        {me && me.role ? <><span>{me.role}</span></> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashMain