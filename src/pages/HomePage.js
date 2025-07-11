// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const products = [
    {
      title: 'Smartwatch Pro',
      image: '/images/products/product1.png',
      description: 'Experience cutting-edge technology with our Smartwatch Pro, featuring health tracking and seamless connectivity.',
    },
    {
      title: 'Dining Table Set',
      image: '/images/products/product3.png',
      description: 'Enhance your dining experience with our elegant wooden table set, perfect for any modern home.',
    },
    {
      title: 'Ultra Laptop',
      image: '/images/products/product2.png',
      description: 'Meet the Ultra Laptop, combining power and portability for professionals on the go.',
    },
  ];


  return (
    <div>
      <section className="hero-section">
        <h1>Our Core Values</h1>
        <p>Integrity, Innovation, and Excellence</p>
        <button className="hero-button">Learn More</button>
      </section>

      <section className="welcome-section">
        <h2>Welcome to Viriya</h2>
        <p>
          Viriya is committed to providing the highest quality products to our customers, driven by our values of integrity and innovation.
        </p>
      </section>

      <section className="products-section">
        <h3>Featured Products</h3>
        <div className="products-grid">
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <button className="view-button">View Details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
