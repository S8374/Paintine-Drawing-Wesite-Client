import React from 'react';
import { useLoaderData, useParams, useNavigate, Link } from 'react-router-dom'; // Add Link here

const Subcategores = () => {
    const { title } = useParams(); // Retrieve the dynamic title from the URL
    const allData = useLoaderData(); // Load all data
    const navigate = useNavigate();

    // Filter the data to find the card that matches the title 
    const filteredData = allData.filter(item => item.category === title);

    return (
        <div className="mt-24 relative bg-black">

            {/* Back Button */}
            <button 
                onClick={() => navigate('/')} 
                className="absolute top-10 left-4 bg-[#f15f26] text-white px-4 py-2 text-lg  shadow  transition z-50"
            >
                Back
            </button>

            {/* Section Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font3 text-white">Subcategory: {title}</h1>
            </div>

            {/* Items Grid */}
            {filteredData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map((item) => (
                        <div key={item._id} className="max-w-sm mx-auto bg-white shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                            <div className="relative">
                                {item.photourl ? (
                                    <img src={item.photourl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                                ) : (
                                    <img 
                                        src="https://via.placeholder.com/300x200.png?text=No+Image+Available" 
                                        alt="No Image Available" 
                                        className="w-full h-48 object-cover rounded-t-lg" 
                                    />
                                )}
                                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                                    <span className="text-md">{item.stock}</span>
                                </div>
                            </div>
                            <div className="py-6 px-8">
                                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">{item.name}</h1>
                                <p className="text-gray-700 tracking-wide mb-4">{item.description}</p>
                                <Link to={`/SeeSub/${item._id}`} className="py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                    See Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 mt-10">No items found in this subcategory.</p>
            )}
        </div>
    );
};

export default Subcategores;
