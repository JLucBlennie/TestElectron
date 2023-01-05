const L = require("leaflet");
let myMapElem = document.getElementById('map');
this.map = L.map(myMapElem);

var osmUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
osmLayer = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttribution });
map.setView([51.505, -0.09], 13);
map.addLayer(osmLayer);
var marker = new L.marker([51.5, -0.09]).addTo(map);
marker.bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();

let information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;
