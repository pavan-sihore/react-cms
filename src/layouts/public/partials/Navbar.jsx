// Navbar.js
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = forwardRef((props, ref) => {

  return (
    <>
        {/* <!-- Navbar Menu --> */}
        <nav ref={ref} className="bg-green-500 shadow-md" >
            <div className="max-w-6xl mx-auto flex justify-start items-center p-4">                
                <ul className="flex space-x-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About</Link></li>
                    <li><Link to="/profile">Services</Link></li>
                    <li><Link to="/profile">Circular</Link></li>
                    <li><Link to="/profile">Orders</Link></li>
                    <li><Link to="/profile">Rules & Acts</Link></li>
                    <li><Link to="/profile">Whats New</Link></li>
                    <li><Link to="/profile">Our Team</Link></li>
                    {/* <li><Link to="/profile">Important Link</Link></li> */}
                    <li><Link to="/profile">Photo Galary</Link></li>
                    <li><Link to="/profile">Video Galary</Link></li>
                    <li><Link to="/profile">FAQ</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
});

Navbar.displayName = 'Navbar';

export default Navbar;