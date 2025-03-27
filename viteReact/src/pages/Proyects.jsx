import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Proyects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/dhurtado9611/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repos');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = '#111827'; // Fondo oscuro para todo el body
  }, []);

  return (
    <div className="p-6 ml-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-900 min-h-screen">
      {repos.map((repo) => (
        repo?.id && repo?.name && repo?.html_url ? (
          <div
            key={repo.id}
            className="bg-gray-800 shadow-md rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-700"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-white truncate">{repo.name}</h2>
              <FaGithub className="text-gray-400 w-6 h-6" />
            </div>
            <p className="text-gray-400 text-sm mb-4 truncate">
              {repo.description || 'Sin descripción'}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Ver en GitHub →
            </a>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default Proyects;