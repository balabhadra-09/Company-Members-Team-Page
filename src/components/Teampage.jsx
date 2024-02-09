import React from 'react';
import './Teampage.css';

const Teampage = () => {
 
  const teamMembers = [
   
    { id: 1, name: 'John Doe', position: 'CEO', imageUrl: './images/A1.jpg' },
   
    
    { id: 2, name: 'Jane Smith', position: 'CTO', imageUrl: './images/A2.jpg' },
   
    { id: 3, name: 'Alice Johnson', position: 'Lead Developer', imageUrl: './images/A3.jpg' },
    
  ];

 
  

  return (
    <div className="team-page">
      <h1 className="team-page-heading">Our Team</h1>
      <div className="team-members">
        {teamMembers.map(member => (
          <div key={member.id} className="team-member">
             <img src={member.imageUrl} alt={member.name} className="member-image" />
            <h2 className="member-name">{member.name}</h2>
            <p className="member-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teampage;
