// src/pages/Map.jsx  (or wherever you keep it)
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Wrapper } from "../../components";
import './map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWtyLXNvZiIsImEiOiJjbWNuN2lkZ3YwdXk5MmpzOTVnazU5dzcwIn0.Q55kfODgKlFDYU2HWqCL5A';

const Map = () => {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [43.84445, 40.79016],
            zoom: 12.8,
            pitch: 45,
            bearing: -17.6,
            antialias: true,
            hash: true,
            projection: 'globe'
        });

        map.addControl(new mapboxgl.NavigationControl());

        // new mapboxgl.Marker({ color: '#007bff', draggable: false })
        //     .setLngLat([43.86193, 40.79459])
        //     .setPopup(new mapboxgl.Popup().setHTML('<b>Ղանդիլյան 51ա</b><br>51a Gandilyan St'))
        //     .addTo(map);

        map.on('style.load', () => {
            map.setFog({});
            const cityLayer = map.getStyle().layers.find(l => l.id.includes('place-city'));
            if (cityLayer) {
                map.setLayerZoomRange(cityLayer.id, 0, 22);
                map.setLayoutProperty(cityLayer.id, 'text-field', [
                    'coalesce',
                    ['get', 'name:en'],
                    ['get', 'name:arm'],
                    ['get', 'name']
                ]);
                map.setLayoutProperty(cityLayer.id, 'text-font', ['Open Sans Bold', 'Arial Unicode MS Bold']);
                map.setLayoutProperty(cityLayer.id, 'text-transform', 'uppercase');
                map.setLayoutProperty(cityLayer.id, 'text-letter-spacing', 0.05);
                map.setLayoutProperty(cityLayer.id, 'text-size', [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0, 18,
                    22, 36
                ]);
                map.setPaintProperty(cityLayer.id, 'text-color', '#ffffff');
                map.setPaintProperty(cityLayer.id, 'text-halo-color', '#000000');
                map.setPaintProperty(cityLayer.id, 'text-halo-width', 2);
                map.setPaintProperty(cityLayer.id, 'text-halo-blur', 0.5);
            }

            const textLayers = map.getStyle().layers.filter(l => l.type === 'symbol' && l.layout && l.layout['text-field']);
            textLayers.forEach(layer => {
                map.setLayoutProperty(layer.id, 'text-size', [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0, 16,
                    22, 32
                ]);
            });
        });

        return () => map.remove();
    }, []);

    return (
        <Wrapper>
            <div className='container'>
                <div id="map" ref={mapContainer}></div>
                <div className="vignette"></div>
            </div>
        </Wrapper>
    );
};

export default Map;
