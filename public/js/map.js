if (
  typeof mapToken !== "undefined" &&
  mapToken &&
  document.getElementById("map")
) {
  mapboxgl.accessToken = mapToken;

  const defaultCoordinates = [77.209, 28.6139]; // Default: New Delhi [lng, lat]

  const listingCoordinates =
    typeof listing !== "undefined" &&
    listing &&
    listing.geometry &&
    Array.isArray(listing.geometry.coordinates) &&
    listing.geometry.coordinates.length === 2
      ? listing.geometry.coordinates
      : defaultCoordinates;

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listingCoordinates,
    zoom: 9,
  });

  const listingTitle =
    typeof listing !== "undefined" && listing
      ? listing.title || listing.location
      : "Location";

  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<h4>${listingTitle}</h4><p>Exact location will be provided after booking</p>`,
  );

  new mapboxgl.Marker({ color: "#fe424d" })
    .setLngLat(listingCoordinates)
    .setPopup(popup)
    .addTo(map);
}
