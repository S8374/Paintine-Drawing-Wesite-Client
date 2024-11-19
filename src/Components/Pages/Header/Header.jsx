import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);
    const [error, setError] = useState(null); // Error state for displaying error messages
    const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile dropdown toggle
    const { createUser, signIn, user, logOut, signInWithFacebook } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setError(null); // Clear error message on modal toggle
    };

    const switchModalForm = () => {
        setIsSignUp(!isSignUp);
        setError(null); // Clear error message on form switch
    };

    const handleFacebookLogin = () => {
        signInWithFacebook()
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in with Facebook successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                setIsModalOpen(false);
            })
            .catch((error) => {
                setError('Failed to log in with Facebook. Please try again.');
                console.error(error.message);
            });
    };
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                return updateProfile(user, { displayName: name });
            })
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account created successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                setIsModalOpen(false);
                form.reset();
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setError('Email already in use');
                } else {
                    setError('An error occurred. Please try again.');
                }
            });
    };

    const handelLogOut = () => {
        logOut()
            .then(() => {
                setIsProfileOpen(false); // Close profile dropdown on logout
            })
            .catch(error => console.error(error));
    };

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                setIsModalOpen(false);
                form.reset();
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password') {
                    setError('Incorrect password');
                } else if (error.code === 'auth/user-not-found') {
                    setError('User not found');
                } else {
                    setError('An error occurred. Please try again.');
                }
            });
    };

    const navLink = (
        <>
            <li className="nav__item ">
                <NavLink to={'/'} className="nav__link font3 text-xl">Home</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to={'/allArt'} className="nav__link font3 text-xl">All Art & Craft Items</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to={'/addcraft'} className="nav__link font3 text-xl">Add Craft Item</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to={'/myArtlist'} className="nav__link font3 text-xl">My Art & Craft List</NavLink>
            </li>
        </>
    );

    return (
        <header className="header">
            <div className="header__logo">
                <img className="w-28" src="https://little-birdies.axiomthemes.com/wp-content/uploads/2016/12/logo_h.png" alt="Logo" />
            </div>
            <div className='flex  text-center'>
                <div className='flex justify-center  items-center '>
                    <div className="header__toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>
                    <div className="flex profile1 justify-center items-center">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                >
                                    <div className="w-10 rounded-full">
                                        <img alt="User Avatar" src={user.photoURL || "data:image/jpeg;base64,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"} />
                                    </div>
                                </div>
                                {isProfileOpen && (
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content  bg-white rounded-box mt-3 w-52 p-2 shadow">
                                        <li><a>{user.displayName}</a></li>
                                        <li onClick={handelLogOut}><a>Logout</a></li>
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <button className=" signUpButton" onClick={toggleModal}>

                                <Link className='font3'> {isSignUp ? "Sign Up" : "Sign In"}</Link>
                            </button>
                        )}
                    </div>
                </div>
            </div>


            <nav className={`nav ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
                {isMenuOpen && (
                    <div className="nav__close" onClick={toggleMenu}>
                        <FaTimes />
                    </div>
                )}

                <div className="nav__content bd-grid">
                    <div className="nav__perfil flex">
                        <div>
                            <img className="w-28" src="https://little-birdies.axiomthemes.com/wp-content/uploads/2016/12/logo_h.png" alt="Logo" />
                        </div>


                    </div>

                    <div className="nav__menu">
                        <ul className="nav__list">
                            {navLink}
                        </ul>
                    </div>

                    <div className="flex profile2 justify-center items-center">
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                >
                                    <div className="w-10 rounded-full">
                                        <img alt="User Avatar" src={user.photoURL || "data:image/jpeg;base64,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"} />
                                    </div>
                                </div>
                                {isProfileOpen && (
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow">
                                        <li><a>{user.displayName}</a></li>
                                        <li onClick={handelLogOut}><a>Logout</a></li>
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <button className="signUpButton2 " onClick={toggleModal}>
                                <Link className='font3'>
                                    {isSignUp ? "Sign Up" : "Sign In"}
                                </Link>
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
                            <button className="modal-close" onClick={toggleModal}><FaTimes /></button>
                        </div>

                        <form className="modal-body text-white" onSubmit={isSignUp ? handleSignUp : handleSignIn}>
                            {isSignUp && (
                                <>
                                    <label className="block mb-2 text-sm font-bold">Username</label>
                                    <input name="name" type="text" required className="w-full px-4 py-2 mb-4 border rounded" placeholder="Enter your username" />
                                </>
                            )}

                            <label className="block mb-2 text-sm font-bold">Email</label>
                            <input name="email" type="email" className="w-full px-4 py-2 mb-4 border rounded" placeholder="Enter your email" required />

                            <label className="block mb-2 text-sm font-bold">Password</label>
                            <input name="password" type="password" className="w-full px-4 py-2 mb-6 border rounded" placeholder="Enter your password" required />

                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Display error in red */}

                            <button type="submit" className="w-full btn btn-primary">{isSignUp ? "Register" : "Login"}</button>
                            <button
                                onClick={handleFacebookLogin}
                                className="w-full btn btn-primary mt-4 flex justify-center items-center"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                    alt="Facebook"
                                    className="h-5 w-5 mr-2"
                                />
                                Continue with Facebook
                            </button>

                        </form>

                        <p className="text-center mt-4">
                            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                            <span className="text-blue-500 cursor-pointer" onClick={switchModalForm}>
                                {isSignUp ? "Sign In" : "Sign Up"}
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
