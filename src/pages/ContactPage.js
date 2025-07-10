import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-6 md:flex gap-10">
      <form className="flex-1 space-y-4">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" rows="5" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>

      <div className="flex-1 mt-10 md:mt-0">
        <h3 className="text-lg font-bold">Contact Information</h3>
        <p className="mt-2">Phone: (123) 456-7890</p>
        <p>Email: <a className="text-blue-600" href="mailto:info@viriyacompany.com">info@viriyacompany.com</a></p>
        <div className="mt-4 bg-gray-300 h-60 rounded"></div>
      </div>
    </div>
  );
};

export default ContactPage;