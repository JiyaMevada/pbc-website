import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className=" hidden text-3xl font-bold text-center sm:text-3xl sm:block  ">
                        Welcome to Open Mentor!
                            <span className="hidden sm:block text-2xl">"Empowering the Next Generation of Developers"
                            Join the Community & Explore Projects</span>
                        </h2>
                        <div className="flex justify-center items-center lg:order-2">
    <Link
        to="#"
        className="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
        Log in
    </Link>
    <Link
        to="#"
        className="text-white  bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
    >
        Get started
    </Link>
</div>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://images.pexels.com/photos/7433833/pexels-photo-7433833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image2" />
            </div>

            <h1 className="text-center text-3xl sm:text-3xl py-10 font-medium">“Connecting Students with Software Companies to Power Open Source Innovation.”</h1>
        </div>
    );
}
