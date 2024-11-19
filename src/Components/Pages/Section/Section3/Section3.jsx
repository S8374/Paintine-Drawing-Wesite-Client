import React from 'react';

const Section3 = () => {
    return (
        <div>
               <div className="relative bg-[#ffda48] flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block font2 px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                New Colaboration
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font3 text-3xl  tracking-tight text-gray-900 sm:text-6xl sm:leading-none">
            Our
            Activities
              <br className="hidden md:block" />
              Painting and Drawing
            </h2>
            <p className="text-base font2 text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque lauda
            </p>
          </div>
          <div className="flex justify-center  text flex-col items-center md:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center"
            >
              Apply Now
            </a>
            
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src="https://media.istockphoto.com/id/1167790055/photo/a-painters-hand-is-covered-with-paintdrawing-paint.jpg?s=612x612&w=0&k=20&c=off0feLOgVQMDA6gh60ozSK8UBLlkAAOY1A3ssAQcMY="
          alt=""
        />
      </div>
    </div>

        </div>
    );
};

export default Section3;
