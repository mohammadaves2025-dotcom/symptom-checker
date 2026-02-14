import React from 'react'
import toast from 'react-hot-toast'

const Newsletter = () => {

const subscribe = () =>{
    toast.success("Subscribed Successfully");
}

  return (
    <div className='bg-slate-800 text-gray-100'>
            {/* Newsletter Section */}
            <div className="max-w-7xl mx-auto border-t-2 border-gray-600 pt-10">
                <h3 className="text-lg font-semibold mb-2">
                    Subscribe to our newsletter
                </h3>
                <p className="text-sm text-gray-100 mb-6">
                    Sign up to stay informed about MediFind and receive wellness updates.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="px-4 py-3 bg-white rounded-full text-black"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 bg-white rounded-full text-black"
                    />
                    <select className="px-4 py-3 bg-white rounded-full text-black">
                        <option>Select an option</option>
                        <option>General Care</option>
                        <option>Specialist Care</option>
                    </select>
                    <button onClick={subscribe} className="bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-full w-30">
                        Sign me up!
                    </button>
                </div>

                <p className="text-xs text-gray-100 mt-4">
                    By subscribing, you agree to our Terms of Use and Privacy Policy.
                </p>
            </div>
        </div>
  )
}

export default Newsletter
