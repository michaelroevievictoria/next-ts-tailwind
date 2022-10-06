import React, { useState } from 'react'
import { NextPage } from 'next'
import _ from 'lodash'





const FooterSection: NextPage<{}> = () => {
    return (
        <>
            <div className="mx-auto px-4 sm:px-6 lg:px-28 mt-12 md:mt-0 bg-footer " >
                <div className="h-screen-70 grid  gap-2 content-center ">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="lg:col-span-6 md:col-span-6 col-span-12 sm:col-span-12" >
                            <div className="pb-8 sm:pb-16 ">
                                {/* banner text */}
                                <main className="mx-auto mt-10 px-6 sm:mt-12 sm:px-6 md:mt-20 lg:mt-20 lg:px-8 xl:mt-28">
                                    <div className="sm:text-center lg:text-left">

                                        <p className="ff-poppins font-bold mt-2 text-white sm:mx-auto sm:mt-5 sm:max-w-xl text-4xl lg:mx-0">
                                            Connecting Health Professionals, Patients, and Facilities like never before.
                                        </p>

                                    </div>
                                </main>
                            </div>
                        </div>

                        {/* <div className="lg:col-span-6 md:col-span-6 col-span-12 sm:col-span-12">
                            <div className='py-24'>
                                <p className='text-white ff-poppins text-center font-bold text-lg pb-5'>Be part of the community</p>
                                <div className='flex justify-center gap-4'>

                                    <button
                                        // onClick={() => setShowModalRegister(true)}
                                        type="button" className="py-2 px-4  bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-40 transition ease-in duration-200  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        <p className=' text-center text-base  text-md text-black ff-poppins font-normal'>Register</p>
                                    </button>
                                    <button
                                        // onClick={() => setShowModalSignIn(true)}
                                        type="button" className="py-2 px-4  bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-40 transition ease-in duration-200  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        <p className=' text-center text-base  text-md text-black ff-poppins font-normal'>Login</p>
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>




            </div >

        </>

    )
}

export default FooterSection