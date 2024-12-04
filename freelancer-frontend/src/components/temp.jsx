export default function FreelancerCard({ freelancer }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {freelancer.profile_pic && (
          <img
            src={freelancer.profile_pic}
            alt={freelancer.name}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{freelancer.name}</h3>
          <p className="text-indigo-600 mt-1">{freelancer.tagline}</p>
          <p className="text-gray-600 mt-2">{freelancer.bio}</p>
          {freelancer.website && (
            <a
              href={freelancer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
    );
  }