import React from 'react'
import { FaEye } from "react-icons/fa";

const Projects = () => {

    const project = [
        {
            img: "https://beebom.com/wp-content/uploads/2021/05/Best-Weather-Apps-on-Windows-10-website.jpg?w=750&quality=75",
            title: "Weather Application",
            language: "JavaScript Project",
            details: "Basic weather app in which openweather api is used. We can search for any city to get live weather update at a time.",
            github: "https://github.com/parmarrahull/weather_application",
        },
        {
            img: "https://assets.materialup.com/uploads/e4bcce75-db59-4fbd-a2ad-fee275261f31/preview.png",
            title: "Netflix App",
            language: "JavaScript Project",
            details: "Basic weather app in which openweather api is used. We can search for any city to get live weather update at a time.",
            github: "https://github.com/parmarrahull/Netflix_app",
        },
        {
            img: "https://www.theinspirationallifestyle.com/wp-content/uploads/2014/09/WEB-bigstock-Notepad-laptop-and-coffee-cup-47960903.jpg",
            title: "ToDoList",
            language: "JavaScript Project",
            details: "Basic weather app in which openweather api is used. We can search for any city to get live weather update at a time.",
            github: "https://github.com/parmarrahull/ToDoList",
        },
    ]

    return (
        <>
            <h1 className='mt-10 mb-10 flex justify-center text-3xl md:text-5xl font-medium'>
                My Few Projects
            </h1>
            <div className='flex justify-center text-slate-400 text-2xl'>
                <p className='flex text-center py-2 md:py-5 md:w-2/3'>
                    Here is my few projects which was i created in lockdown for the learning and devloping perpose.
                </p>
            </div>
            <div className='md:flex justify-center gap-5 mt-10'>
                {project.map((data) => {
                    return (
                        <>
                            <div className='w-full md:w-4/12 py-8 rounded shadow-2xl hover:shadow-xl px-5 justify-center'>
                                <div className=''>
                                    <img
                                        src={data.img}
                                        alt='images'
                                        className='' />
                                </div>
                                <div className='text-slate-400 py-3 text-center text-2xl'>
                                    {data.title}
                                </div>
                                <div className='text-blue-500 text-center text-3xl'>
                                    {data.language}
                                </div>
                                <div>
                                    <p className='py-5 text-slate-400'>
                                        {data.details}
                                    </p>
                                </div>
                                <div className='shadow-xl bg-zinc-100 hover:shadow-indigo-500/40 border-2mx-auto'>
                                    <div className='py-5  mx-auto '>
                                        <a className='flex justify-center' target="_blank" rel="noreferrer" href={data.github}>
                                            <FaEye />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Projects;
