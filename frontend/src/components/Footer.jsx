import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
   <div>
    <div className=" py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 Analomy Detection. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link className="hover:text-gray-400 transition duration-300" to='/'>Privacy Policy</Link>
          <Link className="hover:text-gray-400 transition duration-300" to='/'>Terms of Use</Link>
          <Link className="hover:text-gray-400 transition duration-300" to='/'>Contact Us</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;