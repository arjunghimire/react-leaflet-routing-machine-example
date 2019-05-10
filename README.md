# React leaflet-routing-machine example

[![N|Screensghot](https://lh3.googleusercontent.com/-hIq62YGFGng/XNUI-khVIII/AAAAAAAAL5c/RnH9jJDCeeQKEMKN8VJs1kaCZ76P2yP7wCK8BGAs/s0/FireShot%2BCapture%2B001%2B-%2BReact%2BApp%2B-%2Blocalhost.png)](https://lh3.googleusercontent.com/-hIq62YGFGng/XNUI-khVIII/AAAAAAAAL5c/RnH9jJDCeeQKEMKN8VJs1kaCZ76P2yP7wCK8BGAs/s0/FireShot%2BCapture%2B001%2B-%2BReact%2BApp%2B-%2Blocalhost.png)

### 1. Dependencies

```js
  "leaflet": "^1.4.0",
  "leaflet-routing-machine": "^3.2.12",
  "react-leaflet": "^2.2.1",
```

### 2. LeafletMap.js

```js
import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "./RoutingMachine";

export default class LeafletMap extends Component {
  state = {
    lat: 57.74,
    lng: 11.94,
    zoom: 13,
    isMapInit: false
  };
  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} ref={this.saveMap}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {this.state.isMapInit && <Routing map={this.map} />}
      </Map>
    );
  }
}
```

### 3. RoutingMachine.js

```js
import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [L.latLng(27.67, 85.316), L.latLng(27.68, 85.321)]
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
```
