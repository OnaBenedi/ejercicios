import useCurrentLocation from "./useCurrentLocation";

function CurrentLocation() {
  const { location, loading, error, getLocation} = useCurrentLocation();
  return (
    <div>
      <h1>Geolocation!</h1>
      
      {error && <p>Error: {error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      {loading && <p>Loading...</p>}

      <button onClick={getLocation}>Get your location!</button>
    </div>
  );
}

export default CurrentLocation;
