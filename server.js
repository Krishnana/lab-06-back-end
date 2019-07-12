const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.get('/location',(request,resonse) => {
    console.log('method',request.method);
    console.log('query', request.query);
    const locationData  = searchToLatLong(request.query.data);
    Response.send(locationData);
});

function searchToLatLong(query) {
    const geoData = require('./data/geo.josn');
    const location = new Location(geoData.ersults[0]);
    location.search_query = query;
    return location;
}

function Location(data) {
    this.formatted_query = data.formatted_address;
    this.latitude = data.geometry.location.lat;
    this.longitude = data.geometry.location.lng;
}

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});