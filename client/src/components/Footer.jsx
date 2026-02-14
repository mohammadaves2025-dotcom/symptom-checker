import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-slate-800 text-gray-200 px-8 pt-1'>
            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-12 border-t border-slate-700 pt-6 pb-8 flex justify-between items-center gap-6">
                <div className='flex flex-col'>
                    <h1 className='text-white text-xl font-semibold mb-3'>MediFind</h1>
                    <div className="text-sm text-gray-200">
                        <p>
                            This information is not intended as a substitute for informed medical advice. You should work with a licensed professional to diagnose and treat health conditions. We let the data speak for itself, MediFind does not endorse any healthcare providers.
                        </p>
                        <p className="mt-2 text-md text-white">© 2026 All Rights Reserved</p>
                    </div>
                </div>

                <div className='pb-15'>
                    <h1>Find us </h1>
                    <div className="flex gap-4 text-xl mt-4">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
