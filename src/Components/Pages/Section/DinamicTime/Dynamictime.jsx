import React, { useState, useEffect } from 'react';

const Dynamictime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <div className="flex justify-center items-center bg-[#f15f26] text-white py-12">
            <div className="text-center space-y-6">
                <div>
                    <h1 className="text-4xl font3 sm:text-6xl  mb-4">Next Event</h1>
                    <p className="text-xl sm:text-3xl font2 mb-6">Painting and Drawing <span className='text-sm sm:text-xl font3'>20-28 Jul, 24</span></p>
                </div>

                <div className="flex justify-center gap-4 sm:gap-10 flex-wrap">
                    <div className="time-box text-center flex justify-center items-center bg-white text-black py-4 px-6 rounded-lg w-20 sm:w-32">
                        <div>
                            <span className='text-2xl font-bold'>{hours}</span>
                            <p className="text-sm font2 sm:text-base">Day</p>
                        </div>
                    </div>

                    <div className="time-box text-center flex justify-center items-center bg-white text-black py-4 px-6 rounded-lg w-20 sm:w-32">
                        <div>
                            <span className='text-2xl font-bold'>7</span>
                            <p className="text-sm sm:text-base">Hours</p>
                        </div>
                    </div>

                    <div className="time-box text-center flex justify-center items-center bg-white text-black py-4 px-6 rounded-lg w-20 sm:w-32">
                        <div>
                            <span className='text-2xl font-bold'>{minutes}</span>
                            <p className="text-sm sm:text-base">Minutes</p>
                        </div>
                    </div>

                    <div className="time-box text-center flex justify-center items-center bg-white text-black py-4 px-6 rounded-lg w-20 sm:w-32">
                        <div>
                            <span className='text-2xl font-bold'>{seconds}</span>
                            <p className="text-sm sm:text-base">Seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dynamictime;
