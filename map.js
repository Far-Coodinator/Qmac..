
// Initialize the map (Center: Qatar)
var map = L.map('map').setView([25.311898201282116, 51.31604007799217], 9);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add Markers
var locations = [
    { lat: 25.26715774429688, lng: 51.51476074580012, title: "Turkish Hospital-1" },
    { lat: 25.25601779404332, lng: 51.48194160801633, title: "Midas Furniture-2" },
    { lat: 25.29005977601914, lng: 51.54267063685352, title: "Saraya Corniche Hotel-3" },
    { lat: 25.28835706181858, lng: 51.54917025260977, title: "National Museum of Qatar-4" },
    { lat: 25.334322739883525, lng:51.46608801251694, title: "Landmark Mall-5" },
    { lat: 25.31666505393663, lng: 51.44686209444573, title: "Minaretein Center-6" },
    { lat: 25.276987, lng: 51.520008, title: "Doha Corniche-7" },
    { lat: 25.202049, lng: 51.610846, title: "Al Wakrah Souq-8" },
    { lat: 25.276987, lng: 51.532429, title: "Museum of Islamic Art-9" },
    { lat: 25.354277, lng: 51.411934, title: "Qatar University-10" },
    { lat: 25.293573, lng: 51.496563, title: "The Pearl Qatar-11" },

    // ehfsd
    { lat: 25.501964, lng: 51.399040, title: "Al Zubara Fort-12" },
    { lat: 25.461506, lng: 51.218530, title: "Al Thakira Mangroves-13" },
    { lat: 25.716847, lng: 51.560109, title: "Al Shamal-14" },
    { lat: 25.527244, lng: 51.384345, title: "Al Ghariya Beac-15" },
    { lat: 25.761046, lng: 51.174898, title: "Fuwairit Beach-16" },
    { lat: 25.673672, lng: 51.416544, title: "Al Wajba Fort-17" },
    { lat: 25.644519, lng: 51.531774, title: "The Cacti Farm-18" },
    { lat: 25.381721, lng: 51.313923, title: "Mesaieed-19" },
    { lat: 25.431465, lng: 51.291536, title: "Sealine Beach-20" },
    { lat: 25.502371, lng: 51.494983, title: "Simaisma Beach-21" },

    // 
    { lat: 25.230358, lng: 51.557612, title: "Al Jassasiya Rock Carvings-22" },
    { lat: 25.324235, lng: 51.609837, title: "Barzan Towers-23" },
    { lat: 25.723043, lng: 51.537327, title: "Al Ruwai-24" },
    { lat: 25.142262, lng: 51.483279, title: "Umm Salal Mohammed For-25" },
    { lat: 25.625512, lng: 51.597877, title: "Al Khor Cornich-26" },
    { lat: 25.290064, lng: 51.558481, title: "Al Wakrah Beach-27" },
    { lat: 25.758200, lng: 51.425754, title: "Ras Abrouq-28" },
    { lat: 25.544798, lng: 51.404109, title: "Zubarah Archaeological Site-29" },
    { lat: 25.460136, lng: 51.356263, title: "Fuwairit Beach-30" },
    { lat: 25.685469, lng: 51.565902, title: "Qatar University Research Park-31" }
];

locations.forEach(function(location) {
    L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(location.title) // Show title on click
        .openPopup();
});
