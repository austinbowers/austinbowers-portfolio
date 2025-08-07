"use client"

import React, { useState } from 'react';

export default function BasicForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [success, setSuccess] = useState('')

    const [error, setError] = useState('')

    function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/mB1Qk1B-AIS", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    setSuccess('Thank you for reaching out, I will get back to you as soon as possible.');
                    setTimeout(() => setSuccess(''), 5000);
                    setName('')
                    setEmail('')
                    setMessage('')
                }
                else if(response.code === 422){
                    // Field validation failed
                    setError(response.message)
                    setTimeout(() => setError(''), 5000);
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                    setTimeout(() => setError(''), 5000);
                }
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
            });
    }


    return (
        <form onSubmit={(e) => onSubmit(e)}>

            <div className="formcarry-block mb-6">
                <label
                    className={`block mb-2 text-sm font-medium text-gray-300`}
                    htmlFor="name">Full Name</label>
                <input
                    required
                    className={`shadow-sm bg-opacity-50  border rounded-lg outline-none  block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light`}
                    type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your first and last name" />
            </div>

            <div className="formcarry-block mb-6">
                <label
                    className={`block mb-2 text-sm font-medium text-gray-300`}
                    htmlFor="email">Your Email Address</label>
                <input
                    required
                    className={`shadow-sm bg-opacity-50  border rounded-lg outline-none  block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light`}
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="john@doe.com" />
            </div>

            <div className="formcarry-block mb-6">
                <label
                    className={`block mb-2 text-sm font-medium text-gray-300`}
                    htmlFor="message">Your message</label>
                <textarea
                    required
                    rows={6}
                    className={`shadow-sm bg-opacity-50 outline-none  border rounded-lg  block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light`}
                    value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Enter your message..."></textarea>
            </div>

            <div className="formcarry-block text-center relative flex justify-center">
                <div className="relative inline-flex items-center justify-center group">
                    <button
                        className={`text-white transition-colors duration-300 font-medium bg-blue-500 group-hover:bg-opacity-10 backdrop-blur-lg rounded-md px-4 py-2 relative z-10`}
                        type="submit">Send Message
                    </button>
                    <div
                        className="rounded-full bg-blue-500 group-hover:bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-[length:100%_100%] animate-gradient-flow h-[100%] w-[100%] absolute z-0"></div>
                </div>
                {error &&
                    <p className="error-message text-red-200 fixed w-3/4 lg:w-1/2 top-20 z-[999] p-4 rounded-lg border backdrop-blur-sm border-slate-800 bg-slate-900 bg-opacity-75">{error}</p>}
                {success &&
                    <p className="text-emerald-400 fixed w-3/4 lg:w-1/2 top-20 z-[999] p-4 rounded-lg border backdrop-blur-sm border-slate-800 bg-slate-900 bg-opacity-75">{success}</p>
                }
            </div>
        </form>
    )
}