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
                }
                else if(response.code === 422){
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
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
                    className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
                    htmlFor="name">Full Name</label>
                <input
                    className={`shadow-sm dark:bg-opacity-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
                    type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Your first and last name" />
            </div>

            <div className="formcarry-block mb-6">
                <label
                    className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
                    htmlFor="email">Your Email Address</label>
                <input
                    className={`shadow-sm dark:bg-opacity-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="john@doe.com" />
            </div>

            <div className="formcarry-block mb-6">
                <label
                    className={`block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
                    htmlFor="message">Your message</label>
                <textarea
                    rows={6}
                    className={`shadow-sm dark:bg-opacity-50 outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
                    value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Enter your message..."></textarea>
            </div>

            <div className="formcarry-block text-center relative">
                {error && <p className="error-message">{error}</p>}
                {!success ?
                <button
                    className={`text-white border border-blue-500 rounded-full px-6 py-2`}
                    type="submit">Send</button>
                : <p className="text-blue-500 bg-gray-900 rounded-md px-6 py-3 absolute inset-0">{success}</p>
                }

            </div>
        </form>
    )
}