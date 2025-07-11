import React from 'react';
import './AboutPage.css';

const team = [
  {
    name: 'Sarah Thompson',
    title: 'CEO',
    image: '/images/teams/team1.png',
    desc: 'Sarah is a visionary leader with over 20 years of experience in the tech industry, driving innovation and strategic growth at Viriya.',
  },
  {
    name: 'James Lee',
    title: 'CTO',
    image: '/images/teams/team2.png',
    desc: 'James is responsible for overseeing the technical strategy and ensuring Viriya remains at the forefront of technological advancements.',
  },
  {
    name: 'Emily Davis',
    title: 'COO',
    image: '/images/teams/team3.png',
    desc: 'Emily ensures operational excellence, optimizing processes and driving efficiency across all departments at Viriya.',
  },
];

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Viriya</h1>
      <p>
        Viriya is committed to delivering excellence in everything we do. Our history is rooted in innovation and dedication, striving to make a positive impact in the industry.
      </p>
      <p>
        Our mission is to empower businesses with cutting-edge solutions, fostering growth and success. We value integrity, collaboration, and sustainability as core principles guiding our operations.
      </p>

      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {team.map((member, idx) => (
          <div key={idx} className="team-card">
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="team-image" />
            </div>
            <h3>{member.name}</h3>
            <p className="title">{member.title}</p>
            <p className="desc">{member.desc}</p>
          </div>
        ))}
      </div>

      <h3>Statistics & Achievements</h3>
      <div className="stats-grid">
        <div className="stat-box">
          <p className="stat-number">50+</p>
          <p>Global Partners</p>
        </div>
        <div className="stat-box">
          <p className="stat-number">100K+</p>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat-box">
          <p className="stat-number">20+</p>
          <p>Years of Innovation</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;