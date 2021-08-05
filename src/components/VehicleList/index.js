import React, { useState } from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from './Vehicle';

export default function VehicleList() {
  const [allVehicles, setAllVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');

  const x = async () => {
    const { loading, error, vehicles } = await useData();
    setIsError(error);
    setIsLoading(loading);
    setAllVehicles(vehicles);
  };
  x();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  return (
    <section className="App">
      <section className="container">
        {allVehicles.map((vehicle) => <Vehicle key={vehicle.id} details={vehicle} />)}
      </section>
    </section>
  );
}
