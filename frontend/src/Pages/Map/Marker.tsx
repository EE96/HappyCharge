import React, { useEffect } from "react";
import { HandleMarkerClick } from "./InteractiveMap";

export const Marker: React.FC<google.maps.MarkerOptions & { id: string, handleClick: HandleMarkerClick }> = (options) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>();

    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    useEffect(() => {
        if (marker) {
            ["click"].forEach((eventName) =>
                google.maps.event.clearListeners(marker, eventName)
            );

            marker.addListener("click", () => {
                // if (options.id === options.markerId) {
                    // options.handleClick(null);
                // } else {
                    options.handleClick(options.id);
                // }
            });
        }
    }, [marker, options.id, options.handleClick]);

    return null;
};