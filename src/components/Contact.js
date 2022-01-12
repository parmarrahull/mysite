import React from 'react'
import { FcAdvertising } from "react-icons/fc";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";

const Contact = () => {
    return (
        <>
            <h1 className='mt-12 mb-10 flex justify-center text-5xl  font-medium'>
                Let's connect to each other!
            </h1>
            <div className='flex justify-center text-slate-400 text-2xl'>
                <p className='flex text-center py-5 w-2/3'>
                    I am happy to give you a Support and make your day, just tell me what is your thougths to deal with me.
                </p>
            </div>
            <div className='flex justify-center text-xl w-auto my-5 mx-20'>
                <div>
                    <div className='flex my-5 text-3xl'>
                        <FcAdvertising />
                        <p className='mx-5'> Marketing </p>
                    </div>
                    <div>
                        <p className='text-slate-400 mx-14'>
                            I can help you to improve your SEO reagrading to your site,
                            as well as i can create and improve functionlity of your site.
                        </p>
                    </div>
                    <div className='my-5 px-7'>
                        <p className='flex justify-center cursor-pointer  shadow-xl mx-20  py-1 text-white bg-blue-400 hover:bg-blue-500'>
                            LEARN MORE
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex my-5 text-3xl'>
                        <img
                            src='https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/344/external-settings-business-kiranshastry-lineal-color-kiranshastry.png'
                            alt='img'
                            className='w-11'
                        />
                        <p className='mx-5'> Customization </p>
                    </div>
                    <div>
                        <p className='text-slate-400 mx-14'>
                            I can Customize your site or develop new site according to you,
                            what ever you like to make Customization i'll be do for you in sort time.
                        </p>
                    </div>
                    <div className='my-5 px-7'>
                        <p
                            className='flex justify-center cursor-pointer  shadow-xl mx-20   py-1 text-white bg-blue-400 hover:bg-blue-500'>
                            LEARN MORE
                        </p>
                    </div>
                </div>
                <div>
                    <div className='flex my-5 text-3xl'>
                        <IoIosSpeedometer />
                        <p className='mx-5'>  Support </p>
                    </div>
                    <div>
                        <p className='text-slate-400 mx-14'>
                            I can Customize your site or develop new site according to you,
                            what ever you like to make Customization i'll be do for you in sort time.
                        </p>
                    </div>
                    <div className='my-5 px-7'>
                        <p className='flex justify-center cursor-pointer  shadow-xl mx-20 py-1 text-white bg-blue-400 hover:bg-blue-500'>
                            LEARN MORE
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='border-2'>
                    <div className='flex place-content-end'>
                        <div>
                            <h1 className='text-4xl'>Contact information</h1>
                        </div>
                    </div>
                    <div className='px-10 py-10'>
                        <div className=' flex place-content-end' >
                            <p className='flex'><FaMapMarkerAlt /> Limbdi, 363421 India.</p>
                        </div>
                        <div className='flex place-content-end'>
                            <p className='flex'>
                                <FaPhone /> 910474488
                            </p>
                        </div>
                        <div className='flex place-content-end'>
                            <p className='flex'>
                                <FaEnvelope /> parmarrahul1974@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className='flex place-content-end mx-auto  gap-3'>
                        <div>
                            <a className='text-blue-500 hover:text-blue-700' href='https://github.com/' target="_blank" rel="noreferrer"> <FaGithub /> </a>
                        </div>
                        <div>
                            <a className='text-blue-500 hover:text-blue-700' href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"> <FaLinkedinIn /> </a>
                        </div>
                        <div className=''>
                            <a className='text-blue-500 hover:text-blue-700' href='https://www.instagram.com/_rahul__888/' target="_blank" rel="noreferrer"> <FaInstagram /> </a>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto my-20 w-1/3 border border-purple-500 bg-white">
                    <div className='p-5 space-y-5 shadow-xl'>
                        <h4 className='text-center text-3xl'> Contact Us </h4>
                        <from>
                            <div className='grid grid-cols-2 gap-5'>
                                <input
                                    className='border border-gray-500 px-4 py-2 focus:outline-none focus:boredr-purple-500 col-span-2'
                                    type="text"
                                    placeholder='Your name'
                                />
                                <input
                                    className='border border-gray-500 px-4 py-2 focus:outline-none focus:boredr-purple-500 col-span-2'
                                    type="text"
                                    placeholder='Your email'
                                />
                                <input className='border border-gray-500 px-4 py-2 focus:outline-none focus:boredr-purple-500 col-span-2'
                                    type="text"
                                    placeholder='Your phone'
                                />
                                <input className='border border-gray-500 px-4 py-2 focus:outline-none focus:boredr-purple-500 col-span-2'
                                    type="text"
                                    placeholder='Your company'
                                />
                                <textarea className='border border-gray-500 px-4 py-2 focus:outline-none focus:boredr-purple-500 col-span-2'
                                    cols="10"
                                    rows="5"
                                    placeholder='Your message'
                                />
                            </div>
                            <button
                                className='focus:outline-none mt-5 bg-purple-500 hover:bg-purple-600 px-4 py-2 text-white font-bold w-full'
                                type="submit"
                                value="Send Message"> Send Message </button>

                        </from>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;