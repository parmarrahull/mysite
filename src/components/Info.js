import React from 'react'
import { FaEnvelope, FaLaptopCode, FaHammer, FaPalette, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Info = () => {
    return (
        <>
            <h1 id="contact" className="mt-10 mb-10 flex justify-center text-5xl  font-medium ">
                What I Do 👨‍🔬?
            </h1>

            {/* my cards */}
            <div className=' grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20 '>
                {/* my 1st cards */}
                <div className='bg-gradient-to-r from-green-400 to-blue-500 hover:shadow-xl my-5 md:my-0 px-5 py-8 text-xl rounded overflow-hidden shoadow-lg text-center max-w-sm'>
                    <div className='text-white'>
                        I Design !
                    </div>
                    <div className='py-5'>
                        <div className='flex justify-center text-5xl text-white'>
                            <FaPalette />
                        </div>
                        <p className='py-4 text-white'>
                            I love to design new web applications,
                            I'm always making a new web application,
                            I had designed many web applications in different languages using React,
                            Express, HTML, Bootstrap, WordPress, and few others.
                        </p>
                    </div>
                    <div className='flex justify-center rounded shadow-xl mx-auto w-1/12 bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 text-white'>
                        <a href='https://github.com/parmarrahull' target="_blank" rel="noreferrer"> <FaGithub /> </a>
                    </div>
                </div>
                {/* my 2nd cards */}
                <div className='bg-gradient-to-r from-pink-400 to-purple-500 hover:shadow-xl my-5 md:my-0 px-5 py-8 text-xl rounded overflow-hidden shoadow-lg text-center max-w-sm '>
                    <div className='text-white'>
                        I Build !
                    </div>
                    <div className='py-5'>
                        <div className='flex justify-center text-5xl text-white'>
                            <FaHammer />
                        </div>
                        <p className='py-4 text-white'>
                            I build a simple web application that creates
                            the connection between the viewer and the website.
                            So that users can easily understand that what he
                            needs and what he gets. Every one can used that
                            product in easy way that's my parspective.
                        </p>
                    </div>
                    <div className='flex justify-center  shadow-xl mx-auto w-1/12 bg-gradient-to-r from-pink-400 to-purple-500 rounded px-8 py-3 text-white'>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"> <FaLinkedinIn /> </a>
                    </div>
                </div>
                {/* my 3rd cards */}
                <div className='bg-gradient-to-r from-orange-200 to-orange-500 hover:shadow-xl my-5 md:my-0 px-5 py-8 text-xl rounded overflow-hidden shoadow-lg text-center max-w-sm '>
                    <div className='text-white'>
                        I Develop !
                    </div>
                    <div className='py-5'>
                        <div className='flex justify-center text-5xl text-white'>
                            <FaLaptopCode />
                        </div>
                        <p className='py-4 text-white'>
                            The main part of creating the web application is developing,
                            I Develop the quality web application,
                            Developing is my favorite part , No one can find a
                            single Bug/Error in my code, That's the first priority my devloping rules.
                        </p>
                    </div>
                    <div className='flex justify-center  shadow-xl mx-auto w-1/12 rounded bg-gradient-to-r from-yellow-200 to-orange-500 px-8 py-3 text-white'>
                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"> <FaEnvelope /> </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Info;
