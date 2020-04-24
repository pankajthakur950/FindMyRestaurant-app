import React, {useEffect, useRef, useState} from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';
import config from 'config/keys';

export default function Map({options, onMount}) {
    
    const mapElementRef = useRef();
    const [map, setMap] = useState();
    let infowindow=null;
    useEffect(()=>{
        async function loadMap(){
            console.log(options);
            if(!window.google){
                const googleMap = await loadGoogleMapsApi({ key: config.GOOGLE_API });
                setMap(new googleMap.Map(mapElementRef.current, options));
                
                
            }   
        }
        loadMap();
   }, [map, options]);

   useEffect(()=>{
       console.log("map effect....");
    infowindow = window.google && new window.google.maps.InfoWindow();
    if (map && typeof onMount === `function`) onMount(map, infowindow);
   },[map])
   
   return (
        <div className="map-container" ref={mapElementRef} id="directionMap">
        </div>
  );
}
