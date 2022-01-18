import React from "react";
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import {BasketContext} from '../../../../BasketContext';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './Map3.css';


function Map3() {
    const { address } = useContext(BasketContext)
    const [center, setCenter] = useState([55.76, 37.62]);
    const [pops, setPops] = useState(null);
 
    const geocode = (ymaps) => {
        if (address) {
          ymaps.geocode(address).then(result => {
            setCenter(result.geoObjects.get(0).geometry.getCoordinates());
          })
        }
    };

    useEffect(() => {
      if (address && pops) {
          pops.geocode(address).then(result => {
            setCenter(result.geoObjects.get(0).geometry.getCoordinates());
         })
      }
    }, [address]);

    return (
        <div >
        <YMaps
            query={{
                load: 'package.full',
                lang: 'ru_RU',
                apikey: '41694293-66c0-4133-89c1-0a6928c2497e',
            }}
        >
            <Map className='map'
              defaultState={{ center: [55.76, 37.62], zoom: 12 }}
              state={{
                  center: center,
                  zoom: 12,
                  controls: []
              }}
              modules={["geolocation", "geocode"]}
              onLoad={ymaps => {
                geocode(ymaps)
                setPops(ymaps)
              }}
            > 
                <Placemark 
                  geometry={center}
                  properties={{
                      'hintContent': address,
                  }}
                  options={{
                    'preset': 'islands#blueDotIcon'
                  }}
                />
            </Map>
        </YMaps>
        </div>
    )
}

export default Map3

