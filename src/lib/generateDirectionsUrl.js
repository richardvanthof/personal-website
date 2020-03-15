const generateDirectionsUrl = (location) => {
  const url = 'https://www.google.com/maps/search/?api=1&query=';
  const query = encodeURIComponent(location);
  return url + query;
};

export default generateDirectionsUrl;
