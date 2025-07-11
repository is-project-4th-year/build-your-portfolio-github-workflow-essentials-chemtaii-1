import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
        <div className="text-center">
            <h2 class="text-4xl font-bol leading-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">CONTACT ME</h2>
        </div>
        <div class="max-w-[800px] mx-auto">
            <div class="mt-6 bg-[#161616] rounded-xl">
                <div class="p-10">
                    <form action="https://getform.io/f/bxoomyea" method="POST">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div class="mt-2.5 relative">
                                <input type="text" name="name" id="" placeholder="Your Name"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"/>
                            </div>
        
                        
                        <div class="mt-2.5 relative">
                                <input type="email" name="email" id="" placeholder="Your Email"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"/>
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <div class="mt-2.5 relative">
                                <textarea name="" id="message" placeholder="Your Message"
                                    class="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" rows="4">
                                </textarea>
                            </div>
                        </div>
                    </form>
                </div>
            
        
    <div class="flex justify-center items-center sm:col-span-2">
        <button type="submit"
            class="text-xl w-1/2 p-4 mt-2 mb-4 font-semibold text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-md">
            SEND NOW
            </button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
