import React from "react";
import ComplaintMap from "../..//Pages/ComplaintMap";

const PetaPengaduan = () => {
    return (
        <div className="peta-page">

            <h1>Peta Pengaduan</h1>

            <p>
                Lihat lokasi pengaduan infrastruktur yang telah dilaporkan
                oleh masyarakat.
            </p>

            <div className="full-map">
                <ComplaintMap />
            </div>

        </div>
    );
};

export default PetaPengaduan;