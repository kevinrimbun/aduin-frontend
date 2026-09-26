import React from "react";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";


const defaultIcon = L.icon({

    iconUrl: require(
        "leaflet/dist/images/marker-icon.png"
    ),

    iconRetinaUrl: require(
        "leaflet/dist/images/marker-icon-2x.png"
    ),

    shadowUrl: require(
        "leaflet/dist/images/marker-shadow.png"
    ),

    iconSize: [25, 41],

    iconAnchor: [12, 41],

    popupAnchor: [1, -34],

    shadowSize: [41, 41]

});


const ComplaintMap = () => {

    const centerPosition = [
        -6.200000,
        106.816666
    ];


    const complaints = [

        {
            id: 1,
            position: [
                -6.1944,
                106.8229
            ],
            type: "Jalan Rusak",
            location: "Jl. Medan Merdeka Selatan",
            status: "Menunggu Verifikasi"
        },

        {
            id: 2,
            position: [
                -6.2088,
                106.8456
            ],
            type: "Lampu Penerangan Mati",
            location: "Jl. Gatot Subroto",
            status: "Sedang Diproses"
        },

        {
            id: 3,
            position: [
                -6.1754,
                106.8272
            ],
            type: "Sampah Menumpuk",
            location: "Jl. Kebon Sirih",
            status: "Selesai"
        },

        {
            id: 4,
            position: [
                -6.2297,
                106.7990
            ],
            type: "Drainase Tersumbat",
            location: "Jl. Senopati",
            status: "Menunggu Verifikasi"
        }

    ];


    return (

        <MapContainer

            center={centerPosition}

            zoom={12}

            scrollWheelZoom={false}

            className="complaint-leaflet-map"

        >

            <TileLayer

                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />


            {complaints.map((complaint) => (

                <Marker

                    key={complaint.id}

                    position={complaint.position}

                    icon={defaultIcon}

                >

                    <Popup>

                        <div className="complaint-popup">

                            <h3>
                                {complaint.type}
                            </h3>

                            <p>
                                <strong>
                                    Lokasi:
                                </strong>

                                <br />

                                {complaint.location}
                            </p>

                            <p>
                                <strong>
                                    Status:
                                </strong>

                                <br />

                                {complaint.status}
                            </p>

                        </div>

                    </Popup>

                </Marker>

            ))}

        </MapContainer>

    );

};


export default ComplaintMap;