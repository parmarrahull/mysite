import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className=' shadow-2xl py-8 mb:py-16 border rounded mx-auto md:mx-20'>
                <div className=''>
                    <h1 className='mt-10 mb-10 flex justify-center text-2xl md:text-5xl  font-medium'>
                        Some more!
                    </h1>
                    <div className='text-center text-xl md:text-2xl text-slate-400'>
                        <p>If you want to see more project like this you can contect me on Email, instagram or github.</p>
                    </div>
                    <div className='mt-10 mb-5 flex justify-center text-xl md:text-4xl  font-normal'>
                        Rahul Parmar
                    </div>
                    <div className=' flex justify-center text-1xl text-slate-400 font-normal'>
                        FULL-STACK DEVELOPER
                    </div>
                </div>
                <div className='flex py-5 w-11 mx-auto justify-center gap-3'>
                    <div className=''>
                        <a className='text-blue-500 hover:text-blue-700 text-2xl' href='https://github.com/' target="_blank" rel="noreferrer"> <FaGithub /> </a>
                    </div>
                    <div className=''>
                        <a className='text-blue-500 hover:text-blue-700 text-2xl' href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"> <FaLinkedinIn /> </a>
                    </div>
                    <div className=''>
                        <a className='text-blue-500 hover:text-blue-700 text-2xl' href='https://www.instagram.com/_rahul__888/' target="_blank" rel="noreferrer"> <FaInstagram /> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
