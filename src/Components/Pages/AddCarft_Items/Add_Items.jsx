import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Add_Items = () => {
    const { user } = useContext(AuthContext);

    const handelAddPainting = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const price = form.price.value;
        const photourl = form.photourl.value;
        const category = form.category.value;
        const customize = form.customize.value;
        const stock = form.stock.value;
        const time = form.time.value;

        const addedItems = {
            name,
            rating,
            description,
            price,
            photourl,
            category,
            customize,
            stock,
            time,
            email: user?.email,
        };

        // Send data to the server
        fetch(`https://painting-drawing-webs-server-ten.vercel.app/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addedItems),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Item Added!',
                        text: 'Your painting has been successfully added.',
                        confirmButtonColor: '#4caf50',
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Failed to add the painting.',
                    });
                }
            });
    };

    return (
        <div className="relative py-16 bg-black">
            {/* Back to Home Button */}
            <div className="absolute top-32 left-5">
                <Link
                    to="/"
                    className="px-4 py-2 bg-[#f15f26] text-white  shadow-md text-xl"
                >
                    Back to Home
                </Link>
            </div>

            <form className="mt-12" onSubmit={handelAddPainting}>
                <div className="bg-white p-10 rounded-lg shadow-lg mt-16 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <input
                            type="text"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200"
                            placeholder="Painting Name"
                            defaultValue="Landscape Painting"
                            name="name"
                            required
                        />
                        <select
                            name="category"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200"
                            required
                        >
                            <option disabled selected>
                                Select Category
                            </option>
                            <option value="Landscape Painting">Landscape Painting</option>
                            <option value="Portrait Drawing">Portrait Drawing</option>
                            <option value="Watercolour Painting">Watercolour Painting</option>
                            <option value="Oil Painting">Oil Painting</option>
                            <option value="Charcoal Sketching">Charcoal Sketching</option>
                            <option value="Cartoon Drawing">Cartoon Drawing</option>
                        </select>
                        <input
                            type="text"
                            defaultValue="https://media.istockphoto.com/id/543828714/photo/oil-painting-on-canvas-summer-forest.jpg?s=612x612&w=0&k=20&c=ZkkvF_eJKYosFYWfCoUuUv1PA5PieOZLqqHuu6FZOjk="
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200"
                            placeholder="Photo Url"
                            name="photourl"
                            required
                        />
                        <input
                            type="number"
                            defaultValue={1000}
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200"
                            placeholder="Price"
                            name="price"
                            required
                        />
                        <input
                            type="number"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200"
                            placeholder="Rating"
                            name="rating"
                            required
                        />
                        <select
                            name="customize"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200"
                            required
                        >
                            <option disabled selected>
                                Customize
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <input
                            type="number"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200"
                            placeholder="Processing Time"
                            name="time"
                            required
                        />
                        <select
                            name="stock"
                            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200"
                            required
                        >
                            <option disabled selected>
                                Stock Status
                            </option>
                            <option value="In stock">In stock</option>
                            <option value="Make Order">Make Order</option>
                        </select>
                        <textarea
                            className="block w-full text-sm h-[100px] px-4 py-2 text-slate-900 bg-white rounded-lg border border-violet-200 resize-none"
                            placeholder="Description"
                            name="description"
                            defaultValue="Painting has been a part of human expression for centuries..."
                            required
                        ></textarea>
                        <button
                            className="w-full md:w-auto font2 text-lg px-5 py-2 focus:outline-none h-[50px] border bg-[#f15f26] text-white"
                            type="submit"
                        >
                            Add Painting
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Add_Items;
