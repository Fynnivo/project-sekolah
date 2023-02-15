import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import ikhwanStyle from '../../../asset/ikhwan-style2.png'

const AboutMe = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#8b5cf6'
            }
        }
    })
    return (
        <div>
            <section className='container w-[80%] mx-auto pt-8'>
                <div className='grid grid-cols-4 justify-center'>
                    <div className='col-span-2 pt-10'>
                        <div className='pb-2 text-[#8b5cf6]'>About Me</div>
                        <div className='font-black text-2xl pb-1'>Namaku Ikhwan Afandany</div>
                        <div className='pb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, molestiae! Non illo aspernatur incidunt quaerat.</div>
                        <Link to='/contact'>
                            <ThemeProvider theme={theme}>
                                <Button variant='contained' >Contact Me</Button>
                            </ThemeProvider>
                        </Link>
                    </div>
                    <div className='col-span-2 flex justify-center items-center'>
                        <img className='w-[20rem] h-[20rem]' src={ikhwanStyle} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe