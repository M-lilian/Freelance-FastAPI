import React from 'react';

const FreelancerCard = ({ freelancer }) => {
  return (
    <div className="freelancer-card">
      {freelancer.profile_pic && (
        <img 
          src={freelancer.profile_pic} 
          alt={freelancer.name} 
          className="profile-pic"
        />
      )}
      <div className="freelancer-info">
        <h3>{freelancer.name}</h3>
        <p className="tagline">{freelancer.tagline}</p>
        <p className="bio">{freelancer.bio}</p>
        {freelancer.website && (
          <a href={freelancer.website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
      </div>
    </div>
  );
};

export default FreelancerCard;