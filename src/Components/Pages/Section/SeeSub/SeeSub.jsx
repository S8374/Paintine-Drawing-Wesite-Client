import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";

const SeeSub = () => {
  const allData = useLoaderData();
  const { _id } = useParams();
  const navigate = useNavigate();

  const filterData = allData.filter((data) => data._id === _id);

  return (
    <div className="mt-24 relative">
      {/* Back Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-[#f15f26] text-gray-900 px-4 py-2  shadow-md hover:shadow-lg transition text-lg font2 z-50"
      >
        Back Home
      </button>

      {filterData.map((filter) => (
        <div key={filter._id}>
          <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
              <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                  <div className="relative">
                    {filter.photourl ? (
                      <img src={filter.photourl} alt={filter.name} />
                    ) : (
                      <img
                        src="https://pngimg.com/uploads/raincoat/raincoat_PNG53.png"
                        className="w-full relative z-10"
                        alt="Placeholder"
                      />
                    )}
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-10">
                  <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      {filter.name} <br />
                      Category: {filter.category}
                    </h1>
                    <p className="text-sm">{filter.description}</p>
                  </div>
                  <div>
                    <div className="inline-block align-bottom mr-5">
                      <span className="text-2xl leading-none align-baseline">
                        $
                      </span>
                      <span className="font-bold text-5xl leading-none align-baseline">
                        {filter.price}
                      </span>
                      <span className="text-2xl leading-none align-baseline">
                        {filter.stock}
                      </span>
                    </div>
                    <div className="inline-block align-bottom">
                      <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                        Order NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <a
              title="Buy me a coffee"
              href="https://www.buymeacoffee.com/scottwindon"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
                alt="Buy me a coffee"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeSub;
