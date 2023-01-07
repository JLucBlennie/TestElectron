const L = require("leaflet");
let myMapElem = document.getElementById('map');
this.map = L.map(myMapElem);

var osmUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
osmLayer = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttribution });
map.setView([48.4400912,-4.5214922], 15);
map.addLayer(osmLayer);
googleSatLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
map.addLayer(googleSatLayer);

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

var baseMaps = {
    "OpenStreetMap": osmLayer,
    "Maps Satellite": googleSatLayer
};

var layerControl = L.control.layers(baseMaps).addTo(map);

var marker = new L.marker([48.4400912,-4.5214922]).addTo(map);
marker.bindPopup('Maison<br> Easily customizable.').openPopup();

let information = document.getElementById('info');
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;
