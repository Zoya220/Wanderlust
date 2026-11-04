mapboxgl.accessToken = mapToken;

const defaultCoordinates = [77.209, 28.6139];
const listingCoordinates =
  listing.geometry &&
  listing.geometry.coordinates &&
  listing.geometry.coordinates.length
    ? listing.geometry.coordinates
    : defaultCoordinates;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: listingCoordinates,
  zoom: 9,
});

// Create popup with proper template literals and styling
const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  `<h4>${listing.title || listing.location}</h4><p>Exact location will be provided after booking</p>`,
);

// Create marker, assign popup, and add to map
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listingCoordinates)
  .setPopup(popup) // Binds popup to click event
  .addTo(map);

// Optional: Automatically display the popup on page load without needing to click
// popup.addTo(map);
