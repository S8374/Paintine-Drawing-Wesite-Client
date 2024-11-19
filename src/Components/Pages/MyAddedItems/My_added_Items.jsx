import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { AuthContext } from '../Provider/AuthProvider';

const My_added_Items = () => {
  const { user } = useContext(AuthContext); // Get current user's email
  const [filteredData, setFilteredData] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false); // Track if data has been updated
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (!user?.email) {
      return;
    }

    // Fetch data from the server
    fetch('https://painting-drawing-webs-server-ten.vercel.app/add')
      .then((res) => res.json())
      .then((serverData) => {
        const matchedData = serverData.filter(
          (serverItem) => serverItem.email === user.email
        );
        setFilteredData(matchedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [dataUpdated, user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://painting-drawing-webs-server-ten.vercel.app/delete/${id}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your item has been deleted.',
                icon: 'success',
              });
              setDataUpdated(!dataUpdated);
            } else {
              Swal.fire({
                title: 'Error!',
                text: 'Failed to delete the item.',
                icon: 'error',
              });
            }
          })
          .catch((error) => {
            console.error('Error deleting item:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete the item.',
              icon: 'error',
            });
          });
      }
    });
  };

  return (
    <div className="mt-16 px-6 bg-black">
      {/* Back Home Button */}
      <button
        onClick={() => navigate('/')}
        className="bg-[#f15f26] text-white px-4 py-2 text-xl mt-10 "
      >
        Back Home
      </button>

      <h1 className="text-4xl  py-8 text-center font3 text-white ">See Your All Art & Craft Items</h1>
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <div key={item._id} className="mb-8 grid place-items-center font-mono">
            <div className="bg-white rounded-md bg-gray-800 shadow-lg max-w-4xl">
              <div className="md:flex px-4 leading-none">
                {/* Conditionally display the image */}
                {item.photourl ? (
                  <div className="flex-none">
                    <img
                      src={item.photourl}
                      alt="Painting"
                      className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                    />
                  </div>
                ) : <img
                src= 'https://via.placeholder.com/300x400.png?text=No+Image+Available'
                alt="Painting"
                className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
              /> }

                <div className="flex-col text-gray-300 p-4">
                  <p className="text-2xl font-bold text-black">{item.category}</p>
                  <hr className="hr-text my-2 text-black " data-content="" />
                  <div className="text-md flex justify-between my-2">
                    <span className="font-bold text-black">Name: {item.name}</span>
                  </div>
                  <p className="hidden md:block my-4 text-sm text-left text-black">{item.description}</p>
                  <p className="flex text-md my-2 text-black">
                    Rating: {item.rating}
                    <span className="font-bold px-2 text-black" >|</span>
                    Customize: {item.customize}
                  </p>

                  <div className="text-xs">
                    <Link
                      to={`/update/${item._id}`}
                      className="bg-[#f15f26] font2 text-lg text-black  px-4 py-2 m-2 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline"
                    >
                      Update
                    </Link>

                    <button
                      className=" text-white font2 text-lg bg-red-500 px-4 py-2 m-2 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No matched items found.</p>
      )}
    </div>
  );
};

export default My_added_Items;
