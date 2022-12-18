import React from "react";
import StandardPrice from "../../../components/Price/StandardPrice";
import RegularPrice from "../../../components/Price/RegularPrice";
import PremiumPrice from '../../../components/Price/PremiumPrice';
import Feature from '../feature/feature';
import { 
  standard,
  regular,
  premium
} from "../../../components/Price/PriceData"

const Pricing = () => {
  return (
    <div className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] md:rounded-[5rem] lg:rounded-[5rem] rounded-[2rem]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-black text-2xl md:text-4xl lg:text-4xl text-white pt-10">Pilih Paket</h1>
       </div>
    <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-4 flex flex-col">
    <div className="justify-self-end">
      {standard.map((datas)=>{
        return <StandardPrice {...datas} />
      })}
    </div>
      {regular.map((datas)=>{
        return <RegularPrice {...datas} />
      })}
    <div className="justify-self-center col-span-2">
      {premium.map((datas)=>{
        return <PremiumPrice {...datas} />
      })}
    </div>

    </div>
    <Feature />
      </div>
    </div>
  )
}

export default Pricing
