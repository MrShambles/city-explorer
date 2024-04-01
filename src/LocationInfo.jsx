import React from 'react';

function LocationInfo({ location, accessToken }) {
  return (
    <>
      <section>
        <h4>Location Information For: {location.display_name}</h4>
        {/* Displaying Latitude and Longitude */}
        <p>Latitude: {location.lat}</p>
        <p>Longitude: {location.lon}</p>
      </section>
      {location.lat && location.lon && (
        <section>
          <img alt="Location Map" src={`https://maps.locationiq.com/v3/staticmap?key=${accessToken}&center=${location.lat},${location.lon}&size=500x440&zoom=10`} />
        </section>
      )}
    </>
  );
}

export default LocationInfo;
