import React from 'react';
import banner from "../../assets/New Project.jpg";

const About = () => {
    return (
        <div className="p-20">
            <img src={banner} className="mt-10 mb-28" alt="Banner" />
            <h1 className="font-bold text-3xl">Personal Information:</h1>
            <h2 className="text-xl font-semibold mt-4">Name : Md Athar Uddin</h2>
            <h2 className="text-xl font-semibold mt-2">Email : atharuddin.bd6@gmail.com</h2>
            <h2 className="text-xl font-semibold mt-2">Number : +88000000000</h2>
            <h2 className="text-xl font-semibold mt-2">Address : Florence, Italy</h2>
            <div>
                <h1 className='font-bold mt-10 text-3xl mb-5'>Education :-</h1>
                <h1 className='text-xl font-semibold mt-1 '>Secondary School Certificate (SSC)</h1>
                <h1 className='text-xl font-semibold mt-1'>Year : 2023</h1>
                <h1 className='text-xl font-semibold mt-1 '>School : Horinarayanpur Union High School</h1>
            </div>
            <div>
                <h1 className='font-bold mt-10 text-3xl mb-5'>Languages :-</h1>
                <h1 className='text-xl font-semibold mt-1 '>Bangla - native</h1>
                <h1 className='text-xl font-semibold mt-1'>Hindi - native</h1>
                <h1 className='text-xl font-semibold mt-1 '>English - Fluent</h1>
                <h1 className='text-xl font-semibold mt-1 '>Italian - bacis</h1>
                <h1 className='text-xl font-semibold mt-1 '>Japanese - bacis</h1>
            </div>
            <div>
                <h1 className='font-bold mt-10 text-3xl mb-5'>Hobby :-</h1>
                    <li className='font-medium text-lg'>Watching Anime</li>
                    <li className='font-medium text-lg'>Play Chess</li>
                    <li className='font-medium text-lg'>Reading Manga</li>
                    <li className='font-medium text-lg'>Learn New Technology</li>
            </div>
        </div>
    );
};

export default About;
