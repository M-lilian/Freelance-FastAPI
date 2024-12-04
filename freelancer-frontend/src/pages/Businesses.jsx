import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import BusinessCard from '../components/BusinessCard';

const Businesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await api.get('/api/businesses/');
        setBusinesses(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to fetch businesses');
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Businesses</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default Businesses;