	   /*function queryFunction() {
	latlng = markerLayer.getLatLng();
     //map.removeLayer(featureCollection);
	bufferResult.clearLayers();
	pmbufferResult.clearLayers();
	srbufferResult.clearLayers();
	document.getElementById("parcelcounts").innerHTML = '';
	document.getElementById("surveycounts").innerHTML = '';
	document.getElementById("tractcounts").innerHTML = '';
  if ((document.getElementById("pm1").checked == true) && (document.getElementById("tm1").checked == true)&& (document.getElementById("sr1").checked == true)){
    pmquery.nearby(latlng, distance);
tmquery.nearby(latlng, distance);
srquery.nearby(latlng, distance);
pmquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  pmbufferResult.addData(featureCollection).addTo(map)
  pmbufferResult.eachLayer(function (layer) {  
  layer.setStyle({fillColor :'#ff0099', weight: 2, color: '#e200e2'})   
	});
	
  document.getElementById('parcelcounts').innerHTML = 'Parcel Map Records: ' + featureCollection.features.length;	
	pmbufferResult.bindPopup(function (error, featureCollection) {
    
      return 'Risk Level: ' + featureCollection.features[0].properties.CLASS_DESC;
    
  });  
	
//L.geoJSON(featureCollection).addTo(map);
  x = featureCollection.features.length;
 map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
tmquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  bufferResult.addData(featureCollection).addTo(map);
  
  document.getElementById('tractcounts').innerHTML = 'Tract Map Records: ' + featureCollection.features.length;
  console.log('Found ' + featureCollection.features.length + ' features');
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
  y = featureCollection.features.length;
});
srquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  srbufferResult.addData(featureCollection).addTo(map);
  srbufferResult.eachLayer(function (layer) {  
  layer.setStyle({fillColor :'#00ff33', weight: 2, color: '#00ff33'})   
	});
   document.getElementById('surveycounts').innerHTML = 'Survey Map Records: ' + featureCollection.features.length;
  z = featureCollection.features.length;
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});

}
else if ((document.getElementById("pm1").checked == true) && (document.getElementById("tm1").checked == true)){
    pmquery.nearby(latlng, distance);
tmquery.nearby(latlng, distance);
pmquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  pmbufferResult.addData(featureCollection).addTo(map);
  pmbufferResult.eachLayer(function (layer) {  
  layer.setStyle({fillColor :'#ff0099', weight: 2, color: '#e200e2'})   
	});
  document.getElementById('parcelcounts').innerHTML = 'Parcel Map Records: ' + featureCollection.features.length;
  console.log('Found ' + featureCollection.features.length + ' features');
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
tmquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  bufferResult.addData(featureCollection).addTo(map);
  console.log('Found ' + featureCollection.features.length + ' features');
  document.getElementById('tractcounts').innerHTML = 'Tract Map Records: ' + featureCollection.features.length;
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
  } 
  
else if ((document.getElementById("sr1").checked == true) && (document.getElementById("tm1").checked == true)){
    srquery.nearby(latlng, distance);
tmquery.nearby(latlng, distance);
srquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  srbufferResult.addData(featureCollection).addTo(map);
  srbufferResult.eachLayer(function (layer) {  
  layer.setStyle({fillColor :'#00ff33', weight: 2, color: '#00ff33'})   
	});
  document.getElementById('surveycounts').innerHTML = 'Survey Map Records: ' + featureCollection.features.length;
  console.log('Found ' + featureCollection.features.length + ' features');
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
tmquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  bufferResult.addData(featureCollection).addTo(map);
  console.log('Found ' + featureCollection.features.length + ' features');
  document.getElementById('tractcounts').innerHTML = 'Tract Map Records: ' + featureCollection.features.length;
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
  } 
  else if ((document.getElementById("sr1").checked == true) && (document.getElementById("pm1").checked == true)){
    srquery.nearby(latlng, distance);
pmquery.nearby(latlng, distance);
srquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  srbufferResult.addData(featureCollection).addTo(map);
  srbufferResult.eachLayer(function (layer) {  
  layer.setStyle({fillColor :'#00ff33', weight: 2, color: '#00ff33'})   
	});
  document.getElementById('surveycounts').innerHTML = 'Survey Map Records: ' + featureCollection.features.length;
  console.log('Found ' + featureCollection.features.length + ' features');
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
pmquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  pmbufferResult.addData(featureCollection).addTo(map);
  pmbufferResult.eachLayer(function (layer) {  
  layer.setStyle({fillColor :'#ff0099', weight: 2, color: '#e200e2'})   
	});
  document.getElementById('parcelcounts').innerHTML = 'Parcel Map Records: ' + featureCollection.features.length;
  console.log('Found ' + featureCollection.features.length + ' features');
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
  } 
  else if (document.getElementById("pm1").checked == true) {
    pmquery.nearby(latlng, distance);

pmquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  pmbufferResult.addData(featureCollection).addTo(map);
  pmbufferResult.eachLayer(function (layer) {  
  layer.setStyle({fillColor :'#ff0099', weight: 2, color: '#e200e2'})   
	});
  document.getElementById('parcelcounts').innerHTML = 'Parcel Map Records: ' + featureCollection.features.length;
  console.log('Found ' + featureCollection.features.length + ' features');
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});

}
  else if (document.getElementById("tm1").checked == true) {
    tmquery.nearby(latlng, distance);

tmquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  bufferResult.addData(featureCollection).addTo(map);
  console.log('Found ' + featureCollection.features.length + ' features');
  document.getElementById('tractcounts').innerHTML = 'Tract Map Records: ' + featureCollection.features.length;
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
}
  else if (document.getElementById("sr1").checked == true) {
    srquery.nearby(latlng, distance);

srquery.run(function (error, featureCollection, response) {
  if (error) {
    console.log(error);
    return;
  }
  srbufferResult.addData(featureCollection).addTo(map);
  srbufferResult.eachLayer(function (layer) {  
  layer.setStyle({fillColor :'#00ff33', weight: 2, color: '#00ff33'})   
	});
  console.log('Found ' + featureCollection.features.length + ' features');
  document.getElementById('surveycounts').innerHTML = 'Survey Map Records: ' + featureCollection.features.length;
  map.fitBounds(L.geoJSON(featureCollection).getBounds());
});
}

  else {
    alert("No Record Type Selected!!");
  }
  //document.getElementById("note").innerHTML = 'If features found in map, click on it to see its record';
}
*/