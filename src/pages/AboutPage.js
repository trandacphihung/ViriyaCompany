import React from 'react';

const AboutPage = () => {
  const team = [
    {
      name: 'Sarah Thompson',
      title: 'CEO',
      desc: 'Sarah is a visionary leader with over 20 years of experience in the tech industry, driving innovation and strategic growth at Viriya.',
    },
    {
      name: 'James Lee',
      title: 'CTO',
      desc: 'James is responsible for overseeing the technical strategy and ensuring Viriya remains at the forefront of technological advancements.',
    },
    {
      name: 'Emily Davis',
      title: 'COO',
      desc: 'Emily ensures operational excellence, optimizing processes and driving efficiency across all departments at Viriya.',
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">About Viriya</h1>
      <p className="mt-2">
        Viriya is committed to delivering excellence in everything we do. Our history is rooted in innovation and dedication, striving to make a positive impact in the industry.
      </p>
      <p className="mt-2">
        Our mission is to empower businesses with cutting-edge solutions, fostering growth and success. We value integrity, collaboration, and sustainability as core principles guiding our operations.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {team.map((member, idx) => (
          <div key={idx} className="p-4 border rounded shadow">
            <div className="h-24 w-24 bg-gray-300 rounded-full mx-auto"></div>
            <h3 className="mt-4 font-bold text-center">{member.name}</h3>
            <p className="text-center text-sm">{member.title}</p>
            <p className="text-sm mt-2">{member.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-8 font-semibold">Statistics & Achievements</h3>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        <div className="bg-blue-100 p-4 rounded text-center">
          <p className="text-2xl font-bold">50+</p>
          <p>Global Partners</p>
        </div>
        <div className="bg-blue-100 p-4 rounded text-center">
          <p className="text-2xl font-bold">100K+</p>
          <p>Satisfied Clients</p>
        </div>
        <div className="bg-blue-100 p-4 rounded text-center">
          <p className="text-2xl font-bold">20+</p>
          <p>Years of Innovation</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;