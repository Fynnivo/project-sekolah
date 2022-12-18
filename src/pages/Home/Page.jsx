import React from "react";
import vectorHero from "../../asset/banner.png"


const Hero  = () => {

  return (
    <div>
    <div className="overflow-hidden">
      <div className="container w-4/5 grid lg:grid-cols-2 md:grid-cols-2 h-[40rem] grid-cols-1 items-center justify-items-center md:mt-10 mt-8 mx-auto text-center">
        <div className="text-center md:text-start lg:text-start">
          <h1 className="font-black md:mt-0 lg:md-0 text-3xl md:text-4xl lg:text-4xl">Siap Membantu Anda Membuat Website</h1>
          <p className="mt-3">Cepat, aman, dan menarik</p>
          <p>Buat website impianmu</p>
          <button className="bg-purple-500 rounded-full py-2 px-10 shadow-md mt-3 font-semibold text-white hover:bg-purple-600 focus:ring-purple-200 focus:ring-4 mb-12">Lihat Penawaran</button>
        </div>
        <img className="order-first md:order-last lg:order-last lg:mb-0 md:mb-0" src={`${vectorHero}`} alt=""/>
      </div>
 
    </div>
    </div>
  )
}

export default Hero
