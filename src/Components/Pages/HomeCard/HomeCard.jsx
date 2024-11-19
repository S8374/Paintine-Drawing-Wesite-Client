import React, { useContext, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2 for better alerts
import { AuthContext } from "../Provider/AuthProvider";

const HomeCard = ({ allCardData }) => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSeeDetails = (card) => {
    if (!user) {
      // Show alert if the user is not logged in
      Swal.fire({
        title: "Please Log In",
        text: "You need to log in to see the details of this card.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      // Open the modal if logged in
      setSelectedCard(card);
    }
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      <section className="bg-white">
        {/* Header Section */}
        <div className="h-[32rem] bg-gray-100">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font3 text-center capitalize lg:text-6xl text-black">
            Painting & Drawing
            </h1>
            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
            <p className="max-w-2xl mx-auto mt-6 text-center font text-lg text-black">
               Let's see our paint and drawing details in this card. You can add your drawing in this website.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-64">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {allCardData.slice(0, 6).map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 border sm:p-6 rounded-xl bg-white shadow-md dark:bg-[#efefef] dark:border-gray-700"
              >
                <img
                  className="object-cover w-96 h-96 rounded-xl aspect-square"
                  src={
                    card.photourl ||
                    "https://via.placeholder.com/300x400.png?text=No+Image+Available"
                  }
                  alt={card.name || "Painting Img"}
                />
                <h1 className="mt-4 text-2xl font3 text-black">
                  {card.name || "Anonymous"}
                </h1>
                <p className="mt-2 font2 text-black capitalize">
                  Rating: {card.rating || "??"}
                </p>
                <div className="mt-3">
                  <button
                    onClick={() => handleSeeDetails(card)}
                    className="px-4 py-2 text-xl font2 text-white bg-[#f15f26] focus:outline-none focus:ring"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedCard && (
          <div className="fixed inset-0 flex items-center mt-28 justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6 md:p-10 overflow-y-auto max-h-[90vh]">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                ✖
              </button>
              <div className="flex flex-col items-center">
                <img
                  className="w-64 h-64 object-cover rounded-lg"
                  src={
                    selectedCard.photourl ||
                    "https://via.placeholder.com/300x400.png?text=No+Image+Available"
                  }
                  alt={selectedCard.name || "Painting Img"}
                />
                <h1 className="mt-4 text-3xl font3 text-black text-center">
                  {selectedCard.name || "Anonymous"}
                </h1>
                <p className="mt-2 font3 text-black text-center">
                  Stock: {selectedCard.stock || "??"}
                </p>
                <p className="mt-4 font2 text-black text-center">
                  {selectedCard.description || "No additional details provided."}
                </p>
                <button
                  onClick={closeModal}
                  className="mt-6 px-4 py-2 text-white bg-[#f15f26] rounded-md focus:outline-none focus:ring"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomeCard;
