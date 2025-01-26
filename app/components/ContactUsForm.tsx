"use client"

import React, { useState } from 'react'

const ContactUsForm = () => {

    return (
        <div className='w-full bg-cyan-500 p-8 flex justify-center items-end'>
            <form className='w-4/5 md:w-2/3 lg:w-1/4 z-10 bg-cyan-500 '>

                <div className='flex flex-col mt-6 w-full'>
                    <label htmlFor="fullname" className='text-md text-gray-50 font-light'>Fullname</label>
                    <input type="text" name="fullname" className='w-full text-base mt-2 px-4 py-3 border-none outline-none rounded-[10px]' id="fullname" required />
                </div>
                <div className='flex flex-col mt-6 w-full'>
                    <label htmlFor="email" className='text-md text-gray-50 font-light'>Email</label>
                    <input type="email" name="email" className='w-full text-base mt-2 px-4 py-3 border-none outline-none rounded-[10px]' id="email" required />
                </div>
                <div className='flex flex-col mt-6 w-full'>
                    <label htmlFor="phone" className='text-md text-gray-50 font-light'>Phone Number</label>
                    <input type="text" name="phone" className='w-full text-base mt-2 px-4 py-3 border-none outline-none rounded-[10px]' id="phone" required />
                </div>
                <div className='flex flex-col mt-6 w-full'>
                    <label htmlFor="msg" className='text-md text-gray-50 font-light'>Message</label>
                    <textarea name="msg" className='w-full h-40 text-base mt-2 px-4 py-3 border-none outline-none rounded-[10px]' id="msg" required />
                </div>
                <button type='submit' className='w-full py-4 border-2 border-white text-white rounded-full text-xl mt-8 uppercase'>
                    Send Message
                </button>

            </form>
        </div>
    )
}

export default ContactUsForm