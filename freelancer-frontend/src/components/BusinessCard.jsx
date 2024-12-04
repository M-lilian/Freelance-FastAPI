import React from 'react';

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {business.profile_pic && (
        <img 
          src={business.profile_pic} 
          alt={business.name} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{business.name}</h3>
        <p className="mt-2 text-gray-600">{business.bio}</p>
      </div>
    </div>
  );
};

export default BusinessCard;