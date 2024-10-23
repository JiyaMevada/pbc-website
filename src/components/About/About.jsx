import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:6/12 lg:w-6/12">
                        <img
                            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Our Mission
                        </h2>
                        <p className="mt-6 text-gray-600">
                        We connect software companies with college students, enabling them to contribute to real-world open-source projects. Our goal is to help students gain hands-on experience while improving the software ecosystem.
                           
                        </p>
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        What We Do
                        </h2>
                        <p className="mt-6 text-gray-600">
                        We provide a platform where companies post open-source projects and students contribute by coding, debugging, or enhancing documentation. This collaboration helps students build professional portfolios and companies improve their software.
                           
                        </p>
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Why Open Source?
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Open source fosters collaboration and innovation. By contributing, students enhance their skills and work on meaningful projects, while companies benefit from fresh ideas and talent.
                           
                        </p>
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        How It Works
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Students: Browse and contribute to projects based on your skills and interests.
Companies: Post projects and collaborate with students to improve open-source software.
                        </p>
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Join Us
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Sign up today to connect with students or companies and start contributing to open source!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}