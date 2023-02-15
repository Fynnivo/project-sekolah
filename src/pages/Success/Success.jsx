import React, { useEffect, useState } from 'react'
import success from '../../asset/succes.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button'

const Success = () => {
    let { session_id } = useParams()
    const [dataLineItems, setDataLineItems] = useState([])
    const [dataCheckout, setDataCheckout] = useState([])
    const [tagihan, setTagihan] = useState({})
    const [totalTagihan, setTotalTagihan] = useState({})
    const [subscriptionData, setSubscriptionData] = useState([])
    const [isready, setIsready] = useState(false)

    const retrieveLineItems = async () => {
        try {
            await axios.get(`http://localhost:5000/v1/checkout/sessions/${session_id}/line_items`, {
                session_id: session_id
            }).then((res) => {
                const response = res.data
                setDataLineItems(response.data)
                setIsready(true)
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    const retrieveSession = async () => {
        try {
            await axios.get(`http://localhost:5000/v1/checkout/sessions/${session_id}`)
                .then(async (res) => {
                    const dataResponse = res.data.session
                    setDataCheckout(dataResponse)
                    const tagihanRaw = dataResponse.amount_subtotal
                    const totalRaw = dataResponse.amount_total
                        setTagihan(tagihanRaw )
                        setTotalTagihan(totalRaw)
                    await axios.get(`http://localhost:5000/v1/subscription/${dataResponse.subscription}`)
                        .then(async (res) => {
                            console.log(res.data)
                            const dataSubscription = res.data
                            setSubscriptionData(dataSubscription)
                            await axios.patch("http://localhost:5000/users/subs-id", {
                                subscription_id: dataSubscription.id,
                                subscription_status: dataSubscription.status,
                                current_period_end: dataSubscription.current_period_end
                            })
                        })
                    setIsready(true)
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    const IDR = new Intl.NumberFormat('id-ID', {
        currency: 'IDR',
        style: 'currency'
    })
    const formattedTotal = IDR.format(totalTagihan / 100)
    const formattedTagihan = IDR.format(tagihan / 100)

    const dateNumber = dataCheckout.created
    const dateExpiredNumber = subscriptionData.current_period_end
    const date = new Date(dateNumber * 1000)
    const dateExpired = new Date(dateExpiredNumber * 1000)

    const formattedDate = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
    const formattedExpired = dateExpired.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/create-portal-session", {
                session_id: session_id
            })
                .then((res) => {
                    const body = res.data
                    window.location.href = body.url
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    // const updateSubscriptionId = async () => {
    //     console.log(subscriptionData)
    //     try {
    //         await axios.patch("http://localhost:5000/users/subs-id", {
    //             subscription_id: subscriptionData.id,
    //             subscription_status: subscriptionData.status
    //         })
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    useEffect(() => {
        retrieveLineItems()
        retrieveSession()
    }, [])
    return (
        <div className='h-screen bg-gray-100'>
            <div className="flex h-screen w-screen justify-center items-center">
                <div className='bg-white md:w-[35%] lg:w-[35%] w-[50%] flex flex-col justify-center items-center rounded-xl p-2'>
                    <div className='container w-[80%] mx-auto'></div>
                    <div className='mb-5 mt-5'>
                        <img src={success} alt="" width={50} />
                    </div>
                    <div className='text-center font-bold md:text-lg lg:text-lg text-base'>
                        Subscription ke {isready ? `${dataLineItems[0].description}` : <></>} Berhasil Ditambahkan
                    </div>
                    <div className='border-t-[1px] border-gray-200 w-[80%] mt-5 mb-5'></div>
                    <div className='text-left flex justify-self-start w-[90%] font-bold mb-2'>Detail Transaksi</div>
                    <div className='flex justify-self-start w-[90%] justify-between mb-2'>
                        <div>Total Tagihan</div>
                        <div>{isready ? formattedTagihan : <></>}</div>
                    </div>
                    <div className='flex justify-self-start w-[90%] justify-between mb-2'>
                        <div>Status</div>
                        <div>{isready ? dataCheckout.payment_status : <></>}</div>
                    </div>
                    <div className='flex justify-self-start w-[90%] justify-between mb-2'>
                        <div>Tanggal</div>
                        <div>{isready ? `${date.getDate()} ${formattedDate.split(" ")[0]}, ${date.getFullYear()}` : <></>}</div>
                    </div>
                    <div className='flex justify-self-start w-[90%] justify-between mb-5'>
                        <div>Waktu</div>
                        <div>{isready ? formattedTime : <></>}</div>
                    </div>
                    <div className='flex justify-self-start w-[90%] justify-between mb-5'>
                        <div>Berlaku Sampai</div>
                        <div>{isready ? `${dateExpired.getDate()} ${formattedExpired.split(" ")[0]}, ${dateExpired.getFullYear()}` : <></>}</div>
                    </div>
                    <div className='flex justify-self-start w-[90%] justify-between mb-2'>
                        <div>Total Pembayaran</div>
                        <div>{isready ? formattedTotal : <></>}</div>
                    </div>
                    <div className='flex justify-around w-[90%] mb-5 mt-5'>
                        <Button href='/' className='bg-blue-500 py-1 px-2 rounded-md text-white hover:bg-blue-600'>Home</Button>
                        <form onClick={handleSubmit}>
                            <Button type='submit' className='bg-blue-500 py-1 px-2 rounded-md text-white hover:bg-blue-600'>Manage Subscription</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success