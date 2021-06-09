import React, { Component } from 'react'
import covid from '../Image/covid.svg'
export class Top extends Component {
    render() {
        return (
            <div className="bg-gray-50 justify-evenly ">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between ">
                    <h2 className="text-3xl font-extrabold tracking-tight p-20 text-gray-600 sm:text-4xl">
                        <span className="block py-5">Covid-19 tracker</span>
                        <span className="block text-indigo-600">Here you can know world and Bangladesh Covid-19 situations.</span>
                        <p
                            className=" my-10 inline-flex items-center justify-center px-5 py-3 cursor-pointer border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" >
                            Emergency
                        </p>

                    </h2>

                    <div className="mt-8 max-w-sm justify-end flex lg:mt-0">
                        <img className="" src={covid} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Top
