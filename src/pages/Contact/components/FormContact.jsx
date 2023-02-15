import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BsGeoAltFill, BsWhatsapp } from 'react-icons/bs'

const FormContact = () => {
    const form = useRef();
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p7qmkuq', 'template_mpp75iq', form.current, 'P4vNoLzJGhkkVROpy')
            .then((result) => {
                console.log(result.text);
                setMessage('Berhasil terkirim')
                setTimeout(() => {
                    setMessage()
                }, 2000)
            }, (error) => {
                console.log(error.text);
            });
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#8b5cf6'
            }
        }
    })
    return (
        <div>
            <section className='pt-10 w-[80%] container mx-auto'>
                {message && <div class="w-[30%] mx-auto flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Success alert!</span> {message}
                    </div>
                </div>
                }
                <div className='flex flex-col justify-center items-center'>
                    <div className='font-black text-2xl text-[#8b5cf6]'>
                        Contact Me
                    </div>
                    <form className='flex flex-col w-[30%] mx-auto' ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input className='block mb-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer' type="text" name="user_name" />
                        <label>Email</label>
                        <input className='block mb-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer' type="email" name="user_email" />
                        <label>Message</label>
                        <textarea className='mb-3 block  w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer' name="message" />
                        <button type='submit'>
                            <ThemeProvider theme={theme}>
                                <Button className='w-full' variant='contained'>Kirim</Button>
                            </ThemeProvider>
                        </button>
                    </form>
                </div>
                <div className='border-b-2 mt-5'></div>
                <div className='flex gap-10 mt-14'>

                    <div className=''>
                        <div className='flex' >
                            <BsGeoAltFill className='w-10 h-10' />
                            <div className='flex flex-col ml-2'>
                                <div className='font-black'>Location</div>
                                <div>Penanggungan, Gabus</div>
                            </div>
                        </div>
                        <div className='flex mt-5' >
                            <BsWhatsapp className='w-10 h-10' />
                            <div className='flex flex-col ml-2'>
                                <div className='font-black'>What'sApp</div>
                                <a href='https://wa.me/087848781092'>087848781092</a>
                            </div>
                        </div>
                    </div>
                    <div className='ml-[26%]'>
                        <div class="mapouter">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.683206967318!2d111.0394476690428!3d-6.809838014833934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70cd0a25466c5f%3A0x65e2f047be0865bd!2sPangonan%2C%20Penanggungan%2C%20Gabus%2C%20Pati%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1676399440733!5m2!1sen!2sid"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormContact