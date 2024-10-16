import React from 'react';
import './layout.css'; 
import Navbar from './NavBar';
import Banner from './banner';
import Content1 from './Content1';
import Content2 from './Content2';
import Footer from './Footer';

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Banner />
            <Content1 />
            <Content2 />
            <Footer />
        </div>
    );
};

export default App;

