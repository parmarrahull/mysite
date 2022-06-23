import React from 'react'


const Myskill = () => {

    const skill = [
        {
            "img": "https://cdn.iconscout.com/icon/free/png-128/react-3-1175109.png",
            "title": "REACT JS",
            "detail": "I have created 7 project using React js from past 2 years.Like Covid-19 info, e-commarce & travalling sites."
        },
        {
            "img": "https://cdn.iconscout.com/icon/free/png-128/nodejs-2-226035.png",
            "title": "NODE JS",
            "detail": "In nodejs i have making the fastest API's for data processing and all operation related to the load the data, manage data, modify data and many more..."
        },
        {
            "img": "https://cdn.iconscout.com/icon/free/png-128/express-9-1175170.png",
            "title": "EXPRESS JS",
            "detail": "Express is the NodeJS fremwork with the help of i have been make the fully responsive application at the highest speed to managing the data."
        },
        {
            "img": "https://cdn.iconscout.com/icon/free/png-128/mongodb-5-1175140.png",
            "title": "MONGODB",
            "detail": "MongoDB is my personal favorite backend technology which i love to make the querry's regarding to the data."
        }
    ]

    return (
        <>
            <h1 className='my-10 flex justify-center text-3xl text-center md:text-5xl  font-medium'>
                My skill in different languages
            </h1>
            <div className='flex justify-center text-slate-400 text-xl md:text-2xl'>
                <p className='flex text-center py-2 md:py-5 w-2/3'> Currently, I'm working on node js (backend) technology,
                    But I have pretty well knowledge of these languages.
                </p>
            </div>
            <div className='md:flex justify-center  gap-10 mt-10'>
                {skill.map((data) => {
                    return (
                        <>
                            <div className='w-full md:w-4/12 py-10 mx-auto md:py-8 rounded shadow-2xl px-5'>
                                <div className='justify-center'>
                                    <div className=' bg-repeat-round '>
                                        <img
                                            src={data.img}
                                            alt='img'
                                            className='mx-auto rounded trangsform transition-all hover:scale-125'
                                        />
                                    </div>
                                    <p className='text-blue-500 text-center'>{data.title}</p>
                                    <div className='my-5'>
                                        <p>{data.detail}
                                        </p>
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

export default Myskill;
