import React from 'react';
import './ProductsPage.css';

const ProductsPage = () => {
  const categories = ['Electronics', 'Furniture', 'Groceries'];
  const products = [
    {
      name: 'Smartphone',
      category: 'Electronics',
      image: '/images/products/product4.png',
      desc: 'Experience cutting-edge technology with our latest smartphone model.'
    },
    {
      name: 'Dining Table Set',
      category: 'Furniture',
      image: '/images/products/product5.png',
      desc: 'Add elegance to your dining area with our stylish table sets.'
    },
    {
      name: 'Fresh Vegetables',
      category: 'Groceries',
      image: '/images/products/product6.png',
      desc: 'Choose from a wide variety of fresh vegetables sourced locally.'
    },
    {
      name: 'Laptop',
      category: 'Electronics',
      image: '/images/products/product7.png',
      desc: 'Enhance your productivity with our high-performance laptops.'
    },
  ];

  return (
    <div className="products-container">
      <aside className="sidebar">
        <h3>Filter by Category</h3>
        {categories.map((cat, idx) => (
          <label key={idx} className="category-filter">
            <input type="radio" name="category" /> {cat}
          </label>
        ))}
      </aside>

      <main className="product-list">
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p>{product.desc}</p>
            <button className="view-button">More Details</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProductsPage;