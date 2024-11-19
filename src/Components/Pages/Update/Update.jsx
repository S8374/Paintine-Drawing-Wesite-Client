import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const allData = useLoaderData();

  // Find the specific card to update
  const currentItem = allData.find(item => item._id === _id);

  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    photourl: "",
    price: "",
    rating: "",
    customize: "",
    stock: "",
    time: "",
    description: ""
  });

  // Pre-fill form data when `currentItem` is available
  useEffect(() => {
    if (currentItem) {
      setFormData(currentItem);
    }
  }, [currentItem]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    // Show confirmation dialog
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Proceed with the update
        const form = e.target;
    
        const updatedItems = {
          name: form.name.value,
          rating: form.rating.value,
          description: form.description.value,
          price: form.price.value,
          photourl: form.photourl.value,
          category: form.category.value,
          customize: form.customize.value,
          stock: form.stock.value,
          time: form.time.value,
        };
    
        try {
          const response = await fetch(`https://painting-drawing-webs-server-ten.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedItems),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log("Update successful:", data);
    
            // Fetch the current local storage data
            const localStorageData = JSON.parse(localStorage.getItem('myAddedItems')) || [];
    
            // Update the item in local storage
            const updatedLocalStorageData = localStorageData.map(item =>
              item._id === _id ? { ...item, ...updatedItems } : item
            );
    
            // Reset the entire local storage data with the updated data
            localStorage.setItem('myAddedItems', JSON.stringify(updatedLocalStorageData));
    
            Swal.fire({
              icon: 'success',
              title: 'Item updated successfully!',
            });
    
            // Navigate to "My Added Items" route
            navigate('/myaddeditems');
          } else {
            const errorText = await response.text();
            console.error("Update failed:", errorText);
            Swal.fire({
              icon: 'error',
              title: 'Failed to update item.',
              text: errorText,
            });
          }
        } catch (error) {
          console.error("Error during update:", error);
          Swal.fire({
            icon: 'error',
            title: 'An error occurred.',
            text: 'Please try again later.',
          });
        }
      } else if (result.isDenied) {
        // Show message that changes are not saved
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="bg-white p-10 rounded-lg shadow-lg mt-16">
          <div className="grid grid-cols-2 gap-6 mb-10">
            <input
              type="text"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
              placeholder="Painting Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <select
              name="category"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option disabled>Select Category</option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
            <input
              type="text"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
              placeholder="Photo Url"
              name="photourl"
              value={formData.photourl}
              onChange={handleInputChange}
            />
            <input
              type="number"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <input
              type="number"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
              placeholder="Rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
            />
            <select
              name="customize"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
              value={formData.customize}
              onChange={handleInputChange}
            >
              <option disabled>Customize</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input
              type="number"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
              placeholder="Processing Time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
            <select
              name="stock"
              className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200"
              value={formData.stock}
              onChange={handleInputChange}
            >
              <option disabled>Stock Status</option>
              <option value="In stock">In stock</option>
              <option value="Make Order">Make Order</option>
            </select>
            <textarea
              className="block w-full text-sm h-[100px] px-4 py-2 text-slate-900 bg-white rounded-[8px] border border-violet-200 resize-none"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            <button
              className="w-fit  text-lg font2 px-5 py-2 focus:outline-none h-[50px]  bg-[#f15f26]  focus:bg-violet-700 text-white"
              type="submit"
            >
              Update Details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
