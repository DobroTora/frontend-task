import { useState, useEffect } from 'react';
import getData from '../../api';

export default function useVehicleData(url) {
  const [vehicleData, setVehicleData] = useState(null);
  useEffect(() => {
    const myEffect = async () => {
      const __vehicleData = await getData(url);
      if (__vehicleData) {
        setVehicleData(__vehicleData);
      }
    };
    myEffect();
  }, []);
  return vehicleData;
}
