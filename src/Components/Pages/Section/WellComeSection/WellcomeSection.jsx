import React from 'react';
import './Wellcome.css';

const WellcomeSection = () => {
    return (
        <div className="relative z-20 flex items-center overflow-hidden bg-white">
            <div className="container relative flex flex-col lg:flex-row justify-center text-center px-4 py-12 md:py-16 mx-auto">
                {/* Text Content */}
                <div className="relative z-20 flex flex-col w-full lg:w-2/5 mb-8 lg:mb-0 lg:pr-8">
                    <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue">
                        Let's
                        <span className="text-3xl md:text-4xl lg:text-5xl text-orange-500">Do It</span>
                    </h1>
                    <p className="well-text text-lg md:text-xl lg:text-2xl text-gray-700 mt-4">
                        Join Our Journey of Discovery
                    </p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <div className="findMore">
                            <a href="#" className="text-white bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-sm md:text-base lg:text-lg">
                                Find Out More
                            </a>
                        </div>
                        <div className="ml-3 exploreMore">
                            <a href="#" className="text-white bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-md text-sm md:text-base lg:text-lg">
                                Explore More
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative w-full lg:w-3/5 flex justify-center">
                    <img
                        src="https://media.istockphoto.com/id/155581127/photo/colored-boy.jpg?s=612x612&w=0&k=20&c=LLhzQqnLnAS8h5ulUK4ESg1wrytdBxGjd6FlZcn8RGI="
                        alt="Quality control"
                        className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-4/5 xl:w-full max-w-sm lg:max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default WellcomeSection;
