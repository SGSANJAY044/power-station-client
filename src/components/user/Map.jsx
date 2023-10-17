import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { station } from '../../api';

const MapContainer = ({ google }) => {
  const [data,setData]=useState([]);
    useEffect(()=>{
        station()
          .then( (response)=>{
            console.log(response.data);
            setData(response.data)
        })
        .catch(function (error) {
            alert(error.response.data)
            console.log(error);
          });
    },[])
  const markers = data;

  return (
    <Map
      google={google}
      zoom={4}
      initialCenter={{ lat: 20.5937, lng:  78.9629 }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          title={marker.name}
          position={{ lat: marker.lat, lng: marker.lon }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBExvzTm1RCsYRAMASZG1oQjidRH7GivOw'
})(MapContainer);
