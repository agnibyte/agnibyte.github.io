// Initialize the map and set its view to the updated coordinates
var map = L.map('map').setView([19.049827, 72.938361], 13);

// Add a tile layer to the map (OpenStreetMap tiles are used here)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map at the updated location
var marker = L.marker([19.049827, 72.938361]).addTo(map);

// Add a popup to the marker
marker.bindPopup('<b>Updated Location!</b><br>This is a popup.').openPopup();

// Optional: Add an event listener to the map
map.on('click', function(e) {
    alert("You clicked the map at " + e.latlng);
});
