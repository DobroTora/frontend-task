/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import useVehicleData from './useVehicleData';
import './style.scss';

export default function Vehicle({ details }) {
  const vehicle = useVehicleData(details.apiUrl);

  return vehicle ? (
    <section aria-label="Vehicles List" className="card">
      <figure>
        <img alt={details.media[0].name} src={details.media[0].url} />
      </figure>
      <section className="details">
        <article aria-label="vehicle-details" className="min-details">
          <hr className="line" />
          <h1>{details.media[0].name}</h1>
          <hr className="line" />
          <h3 className="price"> From {details.price} </h3>
          <h3 className="extra">{vehicle.description}</h3>
        </article>
      </section>
    </section>
  ) : (
    <></>
  );
}
