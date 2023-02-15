import React, { useState, useEffect } from "react";
import { Card, Spinner } from "flowbite-react";
import { standard } from "./PriceData";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../features/authSlice'
import { Link } from "react-router-dom";

const StandardPrice = ({ users }) => {
  const [productHemat, setProductHemat] = useState([])
  const [priceHemat, setPriceHemat] = useState([])
  const [selected] = useState(standard[0])
  const [loading, setLoading] = useState(false)
  const [dataSubs, setDataSubs] = useState([])
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const fetchProductStandard = async () => {
    const { data } = await axios.get('http://localhost:5000/v1/products/prod_NCIr7JjdN5od35')
    setProductHemat(data)
  }
  const fetchPriceStandard = async () => {
    const { data } = await axios.get('http://localhost:5000/v1/prices/price_1MRuFxJomrCqsGzVG9AL5cPX')
    setPriceHemat(data)
  }
  const IDR = new Intl.NumberFormat('id-ID')
  const price = priceHemat.unit_amount
  const formatted = IDR.format(price / 100)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post('http://localhost:5000/create-checkout-session', {
        priceId: 'price_1MRuFxJomrCqsGzVG9AL5cPX'
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
    fetchProductStandard()
    fetchPriceStandard()
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
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          {productHemat.name}
        </h5>
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
          className="my-7 space-y-5"
        >
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-[#d946ef] dark:text-blue-500"
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
              className="h-5 w-5 shrink-0 text-[#d946ef] dark:text-blue-500"
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
              className="h-5 w-5 shrink-0 text-[#d946ef] dark:text-blue-500"
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
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
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
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
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
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
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
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
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
              className="inline-flex w-full justify-center rounded-xl bg-[#d946ef] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#c026d3] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"

            ><Spinner
                color="info"
                aria-label="Info spinner example"
              /></button>
            : dataSubs && dataSubs.plan && dataSubs.plan.product === 'prod_NCIr7JjdN5od35'  ? <button
            disabled
            className="cursor-not-allowed inline-flex w-full justify-center rounded-xl bg-[#d946ef] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#c026d3] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
            Kamu Berlangganan Ini
          </button> :
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-xl bg-[#d946ef] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#c026d3] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">
              Choose Plan
            </button>
          }
        </form> :
          <Link to={'login'} className="inline-flex w-full justify-center rounded-xl bg-[#d946ef] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#c026d3] focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">Sing Up</Link>
        }
        {/* {user ? <Link
          to={`cart/${priceHemat.id}/${users.customer_id}`}
          className="inline-flex w-full justify-center rounded-full bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
          Choose plan
        </Link> : <Link to={'login'} className="inline-flex w-full justify-center rounded-full bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900">Sing Up</Link>} */}
      </Card>
    </div>
  )
}

export default StandardPrice
