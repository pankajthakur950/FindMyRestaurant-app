import React, {useEffect, useRef, useState} from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';

export default function Map({lat, lng}) {
    const mapElementRef = useRef();
    const [map, setMap] = useState();
    useEffect(()=>{
        async function loadMap(){
            if(!map){
                console.log("loading first time only...")
                const googleMap = await loadGoogleMapsApi({ key: "AIzaSyCo2AjCA4QSCdZMD_mq116R-fz-64tjYeA" });
                setMap(googleMap);
            }   
            map && new map.Map(mapElementRef.current, {
                center: { lat,lng },
                zoom: 14
              });
        }
        loadMap();
   }, [map, lat, lng])
   
    return (
        <div className="map-container" ref={mapElementRef} id="directionMap">
        </div>
  );
}
