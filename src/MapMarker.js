import React from "react";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Basemap from './Basemaps';
import './Map.css';

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
  state = {
    lat: 55.702868,
    lng: 37.530865,
    zoom: 10
  };

  onZoomChange = (zoom) => {
    this.setState({
      zoom: zoom
    });
  }

  render() {
    var center = [this.state.lat, this.state.lng];

    return (
      <Map zoom={this.state.zoom} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Basemap zoom={this.state.zoom} onChange={this.onZoomChange}/>
        <Marker position={center}>
          <Popup>Вы находитесь на {this.state.zoom} масштабе.</Popup>
        </Marker>
      </Map>
    );
  }
};

export default MapComponent;