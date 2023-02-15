import React, {useState, useEffect } from "react";
import StandardPrice from "../../../components/Price/StandardPrice";
import RegularPrice from "../../../components/Price/RegularPrice";
import PremiumPrice from '../../../components/Price/PremiumPrice';
import Feature from '../feature/feature'
import axios from "axios";


const Pricing = () => {
  const [users, setUsers] = useState([])
  const me = async() => {
    try {
      const {data} = await axios.get('http://localhost:5000/me')
      setUsers(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    me()
  },[])
  return (
    <div className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] md:rounded-[5rem] lg:rounded-[5rem] rounded-[2rem]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-black text-2xl md:text-4xl lg:text-4xl text-white pt-10">Pilih Paket</h1>
        </div>
        <div className=" gap-2 flex flex-col justify-center lg:flex lg:gap-4 lg:flex-row md:grid md:grid-cols-2 md:gap-2">
          <div className="md:justify-self-center">
                  <StandardPrice users={users} />
          </div>
          <div>
                  <RegularPrice users={users} />
          </div>
          <div className="md:col-span-2 md:justify-self-center md:mt-6 lg:mt-0">
                  <PremiumPrice users={users} />
          </div>

        </div>
        <Feature />
      </div>
    </div>
  )
}

export default Pricing
