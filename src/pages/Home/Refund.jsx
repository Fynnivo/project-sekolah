import React from 'react'

const Refund = () => {
  return (
    <div className='bg-[#8b5cf6] md:rounded-tr-[5rem] md:rounded-bl-[5rem] lg:rounded-tr-[5rem] lg:rounded-bl-[5rem] rounded-tr-[2rem] rounded-bl-[2rem] shadow-lg'>
      <div className='container mx-auto w-4/5 text-center text-white mb-[3.75rem]'>
        <h1 className='font-black md:text-4xl lg:text-4xl text-3xl pt-5 mb-3'>Jaminan Uang Kembali</h1>
        <p>Kepuasan anda adalah prioritas kami.</p>
        <p className='mb-3'>Jika anda tidak puas dengan pelayanan<br/> kami kembalikan uang anda tanpa syarat!</p>
        <button className='bg-blue-500 hover:bg-blue-600 hover:ring-4 ring-blue-200 px-10 py-2 rounded-full font-bold mb-5'>Mulai Sekarang</button>
      </div>
    </div>
  )
}

export default Refund
