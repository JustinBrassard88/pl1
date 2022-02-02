function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 50.510, lng: -84.519 },
  });
  
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  
}
const locations = [
{ lat: 43.874467, lng: -79.860731 },
{ lat: 43.679048, lng: -79.758725 },
{ lat: 43.160504, lng: -79.238876 }, 
{ lat: 43.651121, lng: -79.899275 }, 
{ lat: 44.580140, lng: -80.934439 },
{ lat: 43.887914, lng: -78.890971 },
{ lat: 44.107026, lng: -79.427128 },
{ lat: 43.905719, lng: -80.126354 },
{ lat: 43.477860, lng: -80.547853 },
{ lat: 42.975154, lng: -81.240603 },
{ lat: 42.981434, lng: -81.304461 },
{ lat: 42.968121, lng: -81.209361 },
{ lat: 43.651152, lng: -79.899339 },
];
