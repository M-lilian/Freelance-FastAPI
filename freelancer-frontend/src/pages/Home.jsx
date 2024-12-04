import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import FreelancerCard from '../components/Freelancercard';
import BusinessCard from '../components/BusinessCard';

export default function Home() {
  const [freelancers, setFreelancers] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const response = await api.get('/api/freelancers/');
        console.log('Response:', response.data);
        setFreelancers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to fetch freelancers');
        setLoading(false);
      }
    };

    fetchFreelancers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
            Find the perfect freelancer for your project
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-200 text-center">
            Connect with talented professionals and businesses around the world
          </p>
        </div>
      </div>

      {/* Featured Freelancers */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Freelancers</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freelancers.slice(0, 3).map((freelancer) => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/freelancers"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View all freelancers
          </Link>
        </div>
      </div>

      {/* Featured Businesses */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Businesses</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.slice(0, 3).map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/businesses"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View all businesses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}