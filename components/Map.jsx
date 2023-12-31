import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

// create custom icon
const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38]
});


export default function Map() {

    // custom cluster icon
    const createClusterCustomIcon = function (cluster) {
        return new divIcon({
            html: `<span className="flex item-center justify-center text-base h-[3rem] w-[3rem] rounded-[50%] bg-white transform translate-x-[-25%] translate-y-[-25%] ">${cluster.getChildCount()}</span>`,
            className: "custom-marker-cluster",
            iconSize: point(33, 33, true)
        });
    };

    const markers = [

        {
            geocode: [8.7832, 34.5085],
            popUp: "digitalHUB Aachen e.V. in DIGITAL CHURCH"
        },
        {
            geocode: [8.7832, 34.5085],
            popUp: "Ludwig Forum for International Art"
        }
    ];
  

    return (
        <MapContainer center={[8.7832, 34.5085]} zoom={13} className="h-full w-full rounded">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}>
                {markers.map((marker) => (
                    <Marker position={marker.geocode} icon={customIcon} key={marker}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>

                ))}

            </MarkerClusterGroup>


        </MapContainer>
    )
}