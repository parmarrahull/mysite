import React from 'react'

const Info2 = () => {

    const arr = [
        {
            "img": "https://foodetective-production.s3.amazonaws.com/uploads/picture/photo/7c2ad1c1-34f8-4eef-ac9c-2b0a60c8903d/photo.jpeg",
            "title": "🍽 Food 😋",
            "name": "I'm foodie",
            "details": "Making food is one of my favorite things to do when I was free.Good people, good food, good time this quote of my life,what you need more when you have this!"
        },
        {
            "img": "https://images.unsplash.com/photo-1603575448360-153f093fd0b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            "title": "Lifestyle 🕺",
            "name": "I'm Coder",
            "details": "So basically, I am a Node js developer,having 1 year of experience and I takenew challenges every day regarding my field,I love to solve the code mystery.Because that's the feeling of life, It's a passion of life.."

        },
        {
            "img": "https://www.teahub.io/photos/full/177-1774647_ladakh-bike-trip.jpg",
            "title": "✈ Traveller 🎒",
            "name": "I'm traveller",
            "details": "Everyone has an own dream to explore the world and mine too!I have a bucket list of my life and I want to make this bucket empty.I have been visited more than 3 countries and also in the future, I have to explore the world."
        }
    ]

    return (
        <>
            <h1 id="contact" className="mt-10 mb-10 flex justify-center text-5xl  font-medium ">
                Who am i ?
            </h1>
            <div className='w-10/12 md:w-8/12 mx-auto text-center'>
                <p className='text-xl'>Professionally I am a Node JS developer working at
                    IT SERVICES INDIA having 1 year of experience in this IT industry,
                    And also I am made traveller & foodie,
                    I love to eat and travel among the earth.
                    Currently, I have been travel the more than 3 countries and
                    my goal is to make my wise list empty.
                    Also, I'm very good at cooking,
                    I Love to make dishes in my own style and Flavour.</p>
            </div>


            {arr.map((data, id) => {
                return (
                    <>
                        <div className={`flex my-10 flex-col md:flex-row py-8 mx-5 text-center md:text-left md:mx-20 ${(id + 1) % 2 === 0 && "md:flex-row-reverse"}`}>
                            <div>
                                <div className='mr-5 '>
                                    <img
                                        src={data.img}
                                        alt='img'
                                        className='max-w-lg shadow-xl rounded-md' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='text-blue-500 text-xl font-bold'>
                                    {data.title}
                                </div>
                                <div className='text-4xl my-5 ' >
                                    {data.name}
                                </div>
                                <div>
                                    <p className=''>
                                        {data.details}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </>
                )
            })}


        </>
    )
}

export default Info2;
