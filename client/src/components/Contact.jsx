import React from 'react'

const Contact = () => {
  return (
    <div className='bg-slate-800 text-gray-200 px-8 pt-16 pb-10'>
      {/* Top Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-4 text-white">For Patients</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Our Story</li>
            <li>How MediFind Works</li>
            <li>Conditions A–Z</li>
            <li>Doctor Directory</li>
            <li>Symptoms Directory</li>
            <li>Procedures Directory</li>
            <li>Treatment Directory</li>
            <li>Drug Directory</li>
            <li>Infusion Center Finder</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-4 text-white">For Providers and Practices</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Claim Your Profile</li>
            <li>Newsroom</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-4 text-white">Business Solutions</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Provider</li>
            <li>Network Solutions</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-4 text-white">Additional Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Consumer Health Data Privacy Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Advertising Policy</li>
            <li>Content Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
