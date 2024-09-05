import { useEffect, useState } from "react";

function useCurrentLocation() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  function getLocation() {
    setLocation(null)
    setLoading(false)
    setError(null)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoading(true);
          setTimeout(() => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setLoading(false);
          }, 3000);
          console.log(`The position is ===>`, position);
        },
        (error) => {
          setError(error.message);
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          });
        }
      );
    } else {
      setError({ error: "Geolocation failed, not supported by this browser" });
      setLocation({
        latitude: null,
        longitude: null,
        error: "Geolocation failed, not supported by this browser",
      });
    }
  }
  useEffect(() => {
    getLocation();
  }, []);
  return {
    location,
    loading,
    error,
    getLocation
  };
}

export default useCurrentLocation;
