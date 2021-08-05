import { useState, useEffect } from 'react';
import getData from '../../api';

export default async function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const _vehicles = await getData('/api/vehicles.json');
      if (_vehicles) {
        setVehicles(_vehicles);
        setLoading(false);
      } else {
        setError('The resource has not been resolved');
      }
    })();
  }, []);

  return {
    loading,
    error,
    vehicles,
  };
}
