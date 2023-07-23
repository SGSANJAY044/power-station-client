import React from 'react'

function About() {
    return (
        <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            About Our Electric Car Power Station Finder App
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Welcome to our app that aims to revolutionize electric car charging accessibility and convenience!
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            At ElectricGo, our mission is to create a seamless experience for electric car drivers to find nearby charging
            stations and to assist electric car companies in registering their stations. We envision a future where electric
            vehicles are the norm, and our app plays a vital role in supporting this green transportation revolution.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Features</h2>
          <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
            <li>Find nearby electric car charging stations with real-time availability information.</li>
            <li>Filter charging stations based on charging speed, connector type, and more.</li>
            <li>Seamlessly register and manage charging stations for electric car companies.</li>
            <li>Review and rate charging stations to help the community find the best spots.</li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or suggestions? Reach out to our support team at support@electricgo.com, and we'll be happy to assist you.
          </p>
        </div>
      </div>
    </div>
    )
}

export default About
