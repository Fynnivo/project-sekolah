import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { regular } from "./PriceData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../features/authSlice'
import { Spinner } from "flowbite-react";
import axios from "axios";

const RegularPrice = ({ users }) => {
  const [productRegular, setProductRegular] = useState([])
  const [priceRegular, setPriceRegular] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataSubs, setDataSubs] = useState([])
  const [selected] = useState(regular[0])
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const fetchPriceRegular = async () => {
    const { data } = await axios.get('http://localhost:5000/v1/prices/price_1MRuIdJomrCqsGzVpwWqb1IJ')
    setPriceRegular(data)
  }
  const fetchProductRegular = async () => {
    const { data } = await axios.get('http://localhost:5000/v1/products/prod_NCIuwcTMNLuxEW')
    setProductRegular(data)
  }
  const IDR = new Intl.NumberFormat('id-ID')
  const price = priceRegular.unit_amount
  const formatted = IDR.format(price / 100)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('http://localhost:5000/create-checkout-session', {
        priceId: 'price_1MRuIdJomrCqsGzVpwWqb1IJ'
      })
        .then((res) => {
          const body = res.data
          setLoading(false)
          window.location.href = body.url
        })
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  useEffect(() => {
    fetchProductRegular()
    fetchPriceRegular()
  }, [])
  useEffect(()=> {
    const fetchDataSubs = async() => {
      const response = await axios.get(`http://localhost:5000/v1/subscription/${user.subscription_id}`)
      setDataSubs(response.data)
    }
    fetchDataSubs()
  },[user])
  return (
    <div className="lg:w-auto w-3/5 mx-auto md:mx-0 md:w-72">
      <Card className="rounded-xl">
        <div className="flex justify-between">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            {productRegular.name}
          </h5>
          <div className="bg-[#c4b5fd] rounded-lg w-28 h-5 text-sm text-center font-medium text-gray-700">Recommended</div>
        </div>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="lg:text-3xl md:text-3xl text-2xl font-semibold">
            Rp
          </span>
          <span className="lg:text-5xl md:text-5xl text-4xl font-extrabold tracking-tight">
            {formatted}
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /bln
          </span>
        </div>
        <div className="border-b-2 -mb-4"></div>
        <ul
          className="my-7 space-y-5 "
        >
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-[#8b5cf6] dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {selected.feature1}
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-[#8b5cf6] dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {selected.feature2}
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-[#8b5cf6] dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {selected.feature3}
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-[#8b5cf6] dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              {selected.feature4}
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-[#8b5cf6] dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              {selected.feature5}
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              {selected.feature6}
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              {selected.feature7}
            </span>
          </li>
        </ul>
        {user ? <form onSubmit={handleSubmit}>
          {loading ?
            <button
              className="inline-flex w-full justify-center rounded-xl bg-[#8b5cf6] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#8b5cf6] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"

            ><Spinner
                color="info"
                aria-label="Info spinner example"
              /></button>
            : dataSubs && dataSubs.plan && dataSubs.plan.product === 'prod_NCIuwcTMNLuxEW'  ? <button
            disabled
            className="cursor-not-allowed inline-flex w-full justify-center rounded-xl bg-[#8b5cf6] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#8b5cf6] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
            Kamu Berlangganan Ini
          </button> :
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-xl bg-[#8b5cf6] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#8b5cf6] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
              Choose Plan
            </button>
          }
        </form> :
          <Link to={'login'} className="inline-flex w-full justify-center rounded-xl bg-[#8b5cf6] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#8b5cf6] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">Sing Up</Link>
        }

        {/* {user ? <Link
          to={`cart/${priceRegular.id}`}
          className="inline-flex w-full justify-center rounded-xl bg-[#8b5cf6] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#7c3aed] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
          Choose plan
        </Link> : <Link to={'login'} className="inline-flex w-full justify-center rounded-xl bg-[#8b5cf6] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#7c3aed] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">Sing Up</Link>} */}
      </Card>
    </div>
  )
}
export default RegularPrice
