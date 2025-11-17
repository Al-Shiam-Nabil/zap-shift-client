import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Covereges = () => {
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    const existingDistrict = serviceCenters.find((e) =>
      e.district.toLowerCase().includes(location.toLowerCase())
    );

    if (existingDistrict) {
      const point = [existingDistrict.latitude, existingDistrict.longitude];
      mapRef.current.flyTo(point, 12);
    }
  };

  return (
    <div>
      <h2 className="text-secondary text-4xl font-bold my-5">
        We are available in 64 districts
      </h2>

      <div>
        <form onSubmit={handleSearch}>
          <div className="join">
            <input
              className="input join-item"
              placeholder="Email"
              name="location"
            />
            <button className="btn join-item rounded-r-full">Subscribe</button>
          </div>
        </form>
      </div>

      <div className="w-full h-[700px]">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((service, index) => (
            <Marker
              key={index}
              position={[service?.latitude, service?.longitude]}
            >
              <Popup>
                <strong>{service?.district}</strong> <br />{" "}
                {service?.covered_area.join(",")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Covereges;
