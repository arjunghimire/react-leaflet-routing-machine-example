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
