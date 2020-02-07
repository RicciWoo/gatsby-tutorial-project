import React from 'react';
import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../sass/Layout.scss';
import './Layout.css';

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default layout;
