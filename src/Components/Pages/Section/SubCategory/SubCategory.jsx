import React, { useContext } from 'react';
import Slider from 'react-slick';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import './SubCategory.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';


const SubCategory = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const images = [
        {
            url: "https://media.istockphoto.com/id/1316699079/photo/young-man-painting-in-nature-on-canvas-at-sunset.jpg?s=612x612&w=0&k=20&c=xe2bqg57mUc-8y_vyoQgCpWy1cjJbIxI7ncwYvHC2xk=",
            title: "Landscape Painting",
            description: "See Details"
        },
        {
            url: "https://media.istockphoto.com/id/126243836/photo/drawing-a-woman-face.jpg?s=612x612&w=0&k=20&c=ofM69r62_4Ge_jJ2plzkjmCT5Q72yGVyv073Hvb9wbU=",
            title: "Portrait Drawing",
            description: "See Details"
        },
        {
            url: "https://media.istockphoto.com/id/1072642050/photo/young-woman-artist-working-on-painting-in-studio-selective-focus-on-foreground.jpg?s=612x612&w=0&k=20&c=yn1JguCPFImykaULRbg_29fYuQsfBzquLuzLko3YCtE=",
            title: "Watercolour Painting",
            description: "See Details"
        },
        {
            url: "https://media.istockphoto.com/id/541278364/photo/oil-painting-closeup-fragment-colorful-bouquet.jpg?s=612x612&w=0&k=20&c=BjtVL0cimtFpSPieanMWR6270iy46F1mSsL5tqcj0m8=",
            title: "Oil Painting",
            description: "See Details"
        },
        {
            url: "https://media.istockphoto.com/id/1305333952/photo/watercolor-of-a-swan.jpg?s=612x612&w=0&k=20&c=8XP8gE917km9HQ3v0_XT5qsrjTVwqD1ee-Xac57Tjso=",
            title: "Charcoal Sketching",
            description: "See Details"
        },
        {
            url: "https://media.istockphoto.com/id/937528304/photo/painter.jpg?s=612x612&w=0&k=20&c=cBjxwAJs20uEkYsPjWjUztsFM9IgnZYhmMP8nn_baZc=",
            title: "Cartoon Drawing",
            description: "See Details"
        }
    ];

    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow right-arrow" onClick={onClick}>
            <MdNavigateNext />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow left-arrow" onClick={onClick}>
            <MdNavigateBefore />
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    const handleDetailsClick = (title) => {
        if (user) {
            // Navigate to the details page if the user is logged in
            navigate(`/subcategory/${title}`);
        } else {
            // Show the SweetAlert2 warning if the user is not logged in
            Swal.fire({
                title: "Please Login",
                text: "You need to be logged in to access this page.",
                icon: "warning",
                confirmButtonText: "OK"
            });
        }
    };

    return (
        <div className="subcategory-container">
            <article className="max-w-full mx-auto bg-white mt-12 px-6 py-12">
                <div className="text-center">
                    <h1 className="text-5xl font-bold font3 uppercase mb-4">Art and Craft Categories</h1>
                    <p className="text-gray-600 font2 mb-8">
                        Explore our painting expressions, from vibrant landscapes to delicate sketches.
                    </p>
                </div>
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <div key={index} className="slide">
                            <div className="image-box relative ml-4">
                                <img src={item.url} alt={item.title} className="rounded-lg" />
                                <div className="links absolute bottom-0 w-full text-center bg-gradient-to-t from-black/70 to-transparent py-4">
                                    <h2 className="text-4xl font3 text-black font-bold">{item.title}</h2>
                                    <button
                                        onClick={() => handleDetailsClick(item.title)}
                                        className="details-button font2 text-lg text-white bg-[#f15f26] px-4 py-2 rounded-md hover:bg-[#d04a1f] focus:outline-none"
                                    >
                                        {item.description}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </article>
        </div>
    );
};

export default SubCategory;
