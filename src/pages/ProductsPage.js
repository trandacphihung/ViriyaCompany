import React from 'react';

const ProductsPage = () => {
  const categories = ['Electronics', 'Furniture', 'Groceries'];
  const products = [
    { name: 'Smartphone', category: 'Electronics', desc: 'Experience cutting-edge technology with our latest smartphone model.' },
    { name: 'Dining Table Set', category: 'Furniture', desc: 'Add elegance to your dining area with our stylish table sets.' },
    { name: 'Fresh Vegetables', category: 'Groceries', desc: 'Choose from a wide variety of fresh vegetables sourced locally.' },
    { name: 'Laptop', category: 'Electronics', desc: 'Enhance your productivity with our high-performance laptops.' },
  ];

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-1/4">
        <h3 className="font-bold mb-4">Filter by Category</h3>
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-2">
            <input type="radio" id={cat} name="category" className="mr-2" />
            <label htmlFor={cat}>{cat}</label>
          </div>
        ))}
      </aside>

      <main className="grid gap-6 md:grid-cols-2 w-full">
        {products.map((product, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h4 className="font-bold">{product.name}</h4>
            <p className="mt-2 text-sm">{product.desc}</p>
            <button className="mt-4 text-white bg-blue-600 px-4 py-2 rounded">More Details</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProductsPage;