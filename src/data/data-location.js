const data = [
  {
    location: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  { location: "London", latitude: 51.5074, longitude: -0.1278 },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  { location: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;
  const filteredLocation = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  if (filteredLocation.length > 0) {
    return filteredLocation[0];
  } else {
    const defaultLocation = {
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}
export { getLocations, getLocationByName };
