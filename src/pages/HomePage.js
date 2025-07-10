import React from 'react';

const HomePage = () => {
  return (
    <div className="p-6">
      <section className="bg-blue-600 text-white py-16 text-center rounded">
        <h1 className="text-3xl font-bold">Our Core Values</h1>
        <p className="mt-2 text-lg">Integrity, Innovation, and Excellence</p>
        <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded shadow">Learn More</button>
      </section>

      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Welcome to Viriya</h2>
        <p className="mt-2">Viriya is committed to providing the highest quality products to our customers, driven by our values of integrity and innovation.</p>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-bold mb-4 text-center">Featured Products</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Smartwatch Pro',
              description: 'Experience cutting-edge technology with our Smartwatch Pro, featuring health tracking and seamless connectivity.',
            },
            {
              title: 'Dining Table Set',
              description: 'Enhance your dining experience with our elegant wooden table set, perfect for any modern home.',
            },
            {
              title: 'Ultra Laptop',
              description: 'Meet the Ultra Laptop, combining power and portability for professionals on the go.',
            }
          ].map((product, idx) => (
            <div key={idx} className="border rounded shadow p-4">
              <h4 className="font-bold">{product.title}</h4>
              <p className="mt-2">{product.description}</p>
              <button className="mt-4 text-white bg-blue-600 px-4 py-2 rounded">View Details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;