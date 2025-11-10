import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Router({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[data-navigate]');
      if (link) {
        e.preventDefault();
        navigate(link.getAttribute('href'));
      }
    };
    document.body.addEventListener('click', handleClick);
    return () => document.body.removeEventListener('click', handleClick);
  }, [navigate]);

  return children;
}