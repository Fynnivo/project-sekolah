import React from 'react'
import CustomerSupport from '../../asset/icons8-customer-service-64.png'
import ShieldSecure from '../../asset/icons8-protect-50.png'
import Adjustment from '../../asset/icons8-slider-60.png'
import UpDownArrow from '../../asset/icons8-up-down-arrow-50.png'
import Bolt from '../../asset/icons8-quick-mode-on-60.png'
import Easy from '../../asset/icons8-user-plus-48.png'

const Feature = () => {

  return (
    <div className='container w-[65%] mx-auto mb-48 '>
      <div className='flex justify-center items-center flex-col'>
        <div className='font-black text-2xl'>Berbagai Fitur</div>
        <p className='mt-2 mb-10 md:text-left lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, provident.</p>
        <div className='grid lg:grid-cols-6 md:grid-cols-6 grid-cols-2 gap-4 gap-y-4'>
          <div className='col-span-2' >
            <div className='flex flex-col justify-center items-center'>
              <div className='h-14 w-14 rounded-full bg-gray-100 flex justify-center items-center'>
                <img className='w-9 h-9' src={ShieldSecure} alt="" />
              </div>
              <div className='font-black mb-2 mt-2 text-lg'>Secure</div>
              <div className='break-all md:text-left lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quam.</div>
            </div>
          </div>
          <div className='col-span-2' >
            <div className='flex flex-col justify-center items-center'>
              <div className='h-14 w-14 rounded-full bg-gray-100 flex justify-center items-center'>
                <img className='w-9 h-9' src={CustomerSupport} alt="" />
              </div>
              {/* <PhoneIcon className='w-8 h-8' /> */}
              <div className='font-black mb-2 mt-2 text-lg'>24/7 Support</div>
              <div className='break-all md:text-left lg:text-left text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, hic!</div>
            </div>
          </div>
          <div className='col-span-2' >
            <div className='flex flex-col justify-center items-center'>
              <div className='h-14 w-14 rounded-full bg-gray-100 flex justify-center items-center'>
                <img className='w-9 h-9' src={Adjustment} alt="" />
              </div>
              {/* <AdjustmentsHorizontalIcon className='w-8 h-8' /> */}
              <div className='font-black mb-2 mt-2 text-lg'>Customizable</div>
              <div className='break-all md:text-left lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, tempore?</div>
            </div>
          </div>
          <div className='col-span-2' >
            <div className='flex flex-col justify-center items-center'>
              <div className='h-14 w-14 rounded-full bg-gray-100 flex justify-center items-center'>
                <img className='w-9 h-9' src={UpDownArrow} alt="" />
              </div>
              <div className='font-black mb-2 mt-2 text-lg'>Reliable</div>
              <div className='break-all md:text-left lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eius!</div>
            </div>
          </div>
          <div className='col-span-2' >
            <div className='flex flex-col justify-center items-center'>
              <div className='h-14 w-14 rounded-full bg-gray-100 flex justify-center items-center'>
                <img className='w-9 h-9' src={Bolt} alt="" />
              </div>
              <div className='font-black mb-2 mt-2 text-lg'>Fast</div>
              <div className='break-all md:text-left lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, earum.</div>
            </div>
          </div>
          <div className='col-span-2' >
            <div className='flex flex-col justify-center items-center'>
              <div className='h-14 w-14 rounded-full bg-gray-100 flex justify-center items-center'>
                <img className='w-9 h-9' src={Easy} alt="" />
              </div>
              <div className='font-black mb-2 mt-2 text-lg'>Easy</div>
              <div className='break-all md:text-left lg:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quia.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature