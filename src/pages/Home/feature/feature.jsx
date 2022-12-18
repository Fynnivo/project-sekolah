import React from 'react';
import feature1 from '../../../asset/feature-1.png';
import feature2 from '../../../asset/fasterLoading.png';
import feature3 from '../../../asset/customer-service.png';

const feature = () => {
  return (
    <div className=''>
      <div className='container w-4/5 mx-auto'>
        <div className='font-black md:text-4xl lg:text-4xl text-3xl text-white mb-2 mt-10 text-center'>
          <h1>Kenapa Pilih Kami?</h1>
        </div>
        <div className='text-white mb-10 text-center'>
          <p>Harga murah, kualitas terbaik</p>
        </div>
        <div className='grid md:grid-cols-2'>
         <div className='text-white md:text-start lg:text-start text-center md:order-1 lg:order-1 order-1'>
          <p className='md:text-2xl lg:text-2xl text-xl mb-2 tracking-wide'>Tampilan Intuitif</p>
          <h1 className='font-black md:text-4xl lg:text-4xl text-3xl mb-2 tracking-normal'>Kemudahan Setup</h1>
          <p className=''>Website siap online. Nikmati kemudahan untuk semua hal yang Anda butuhkan.</p>
         </div>
         <div className='justify-self-center mb-5 md:order-2 lg:order-2 order-2'>
          <img src={feature1} width={200} alt='feature1'/>
         </div>
         <div className='justify-self-center md:order-3 lg:order-3 order-4'>
          <img src={feature2} width={200} alt='faster'/>
         </div>
         <div className='text-white mb-5 md:order-4 lg:order-4 order-3 md:text-start lg:text-start text-center'>
          <p className='md:text-2xl lg:text-2xl text-xl tracking-wide mb-2'>Performa Tinggi</p>
          <h1 className='md:text-4xl lg:text-4xl text-3xl font-black tracking-normal mb-2'>Loading Lebih Cepat</h1>
          <p className=''>Onlinekan bisnis Anda di layanan hosting yang menjamin kecepatan loading. Optimalkan performa website dan datangkan lebih banyak trafik.</p>
         </div>
         <div className='text-white mt-5 md:order-5 lg:order-5 order-5 md:text-start lg:text-start text-center'>
          <p className='md:text-2xl lg:text-2xl text-xl tracking-wide mb-2'>Profesional</p>
          <h1 className='font-black md:text-4xl lg:text-4xl text-3xl mb-2'>Bantuan 24/7</h1>
          <p>Tim Customer Support siap membantu Anda dalam mengatasi berbagai permasalahan teknis. Kapan pun Anda butuh bantuan, segera hubungi kami.</p>
         </div>
         <div className='justify-self-center mb-10 md:order-6 lg:order-6 order-6'>
          <img src={feature3} width={200} alt='customer-service' />
         </div>
        </div>
      </div>
    </div>
  )
}

export default feature
