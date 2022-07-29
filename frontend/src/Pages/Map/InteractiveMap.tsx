import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

import { GoogleMapOptions } from './GoogleMapOptions';
import { Marker } from "./Marker";
import { chargers } from "../../chargers";

export type HandleMarkerClick = (markerId: string) => void

export const InteractiveMap = ({ handleMarkerClick }: { handleMarkerClick: HandleMarkerClick }) => {
    const [zoom, setZoom] = React.useState(13); // initial zoom
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 55.87633996467739,
        lng: -4.302982491466489
    });


    const onIdle = (map: google.maps.Map) => {
        const zoomSame = zoom === map.getZoom();
        const latSame = center.lat === map.getCenter()?.lat();
        const lngSame = center.lng === map.getCenter()?.lng();
        if (!zoomSame || !latSame || !lngSame) {
            setZoom(map.getZoom()!);
            setCenter(map.getCenter()!.toJSON());
        }
    };

    return (
        <div style={{ display: "flex", height: "100%" }}>
            <Wrapper apiKey="AIzaSyAVrkd6EW6k9m0wIvznJk5Ok6yKGUHJFtY">
                <GoogleMapOptions
                    center={center}
                    onIdle={onIdle}
                    zoom={zoom}
                    style={{ flexGrow: "1", height: "100%" }}
                >
                    {chargers.map(chargeDevice => ( 
                        <Marker
                            key={chargeDevice.ChargeDeviceId}
                            id={chargeDevice.ChargeDeviceId}
                            position={{
                                lat: chargeDevice.ChargeDeviceCoordinates.Latitude,
                                lng: chargeDevice.ChargeDeviceCoordinates.Longitude,
                            }} 
                            handleClick={handleMarkerClick}
                        />
                    ))}
                </GoogleMapOptions>
            </Wrapper>
        </div>
    );
}