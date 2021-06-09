import React, { useEffect, useState } from "react";
const Bangladesh = () => {
    const [allCountry, setAllCountry] = useState([]);
    useEffect(() => {
        fetch(`https://disease.sh/v3/covid-19/countries/bangladesh`)
            .then((res) => res.json())
            .then((data) => setAllCountry(data));
    }, []);
    const { cases, deaths, recovered } = allCountry;
    const calculate = (data) => {
        return Math.floor(data / 1000);
    };
    return (
        <div className="">
            <h1 className="text-3xl font-extrabold text-gray-500 bg-gray-100 text-center pt-5 " >Bangladesh Covid-19 Track</h1>
            <div className="bg-gray-100 md:flex">
                <div className="max-w-7xl mx-auto md:py-1 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">
                        <span className="block">Total Cases</span>
                        <span className="block text-blue-600">
                            +{calculate(cases)} K
                    </span>
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto md:py-1 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">
                        <span className="block">Total Recovered</span>
                        <span className="block text-green-600">
                            +{calculate(recovered)} K
                    </span>
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto md:py-1 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">
                        <span className="block">Total Death</span>
                        <span className="block text-red-600">
                            +{calculate(deaths)} K
                    </span>
                    </h2>
                </div>
            </div>
        </div>
    );
};
export default Bangladesh;
