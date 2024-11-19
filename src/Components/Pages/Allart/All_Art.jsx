import React, { useContext } from "react";
import { FcViewDetails } from "react-icons/fc";
import "./Allart.css";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const All_Art = () => {
  const allDatas = useLoaderData();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext); // Use AuthContext to get user info

  const handleDetailsClick = (id) => {
    if (!user) {
      // Check if the user is logged in
      Swal.fire({
        icon: "info",
        title: "Please Login",
        text: "You need to log in to view details.",
        confirmButtonColor: "#f15f26",
      });
      return;
    }
    navigate(`/details/${id}`);
  };

  return (
    <div className="mt-24 py-4 bg-black relative">
      {/* Back Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-[#f15f26] text-white px-4 py-2 text-xl shadow transition"
      >
        Back Home
      </button>

      {/* Section Header */}
      <article
        className="c-card c-card--external c-card--flight c-flight-card"
        layout="row"
      >
        <div
          className="c-card__body"
          layout="row nowrap"
          xs-layout="row wrap"
          flex
        >
          <header
            className="c-card__title font3 text-white text-5xl"
            flex
            layout
          >
            See All Art & Craft Items
          </header>
          <header
            className="c-card__title font2 text-white mt-2 text-xl"
            flex
            layout
          >
            Hear all items on this website. You can see the card details if
            you're interested. Let's try that.
          </header>
        </div>
      </article>

      {/* Items Grid */}
      {allDatas.map((allData) => (
        <div
          key={allData._id}
          className="grid place-items-center font-mono my-6"
        >
          <div className="bg-white rounded-md shadow-lg">
            <div className="md:flex px-4 leading-none max-w-4xl">
              <div className="flex-none">
                <img
                  src={
                    allData.photourl
                      ? allData.photourl
                      : "https://via.placeholder.com/300x400.png?text=No+Image+Available"
                  }
                  alt={allData.name}
                  className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                />
              </div>
              <div className="flex-col text-gray-700">
                <p className="pt-4 text-2xl font-bold">{allData.category}</p>
                <hr className="hr-text" data-content="" />
                <div className="text-md flex justify-between px-4 my-2">
                  <span className="font-bold">Name: {allData.name}</span>
                </div>
                <p className="hidden md:block px-4 my-4 text-sm text-left">
                  {allData.description}
                </p>
                <p className="flex text-md px-4 my-2">
                  Rating: {allData.rating}
                  <span className="font-bold px-2">|</span>
                  Customize: {allData.customize}
                </p>
                <div className="text-xs px-4">
                  <button
                    onClick={() => handleDetailsClick(allData._id)}
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 hover:text-white focus:outline-none focus:shadow-outline"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All_Art;
