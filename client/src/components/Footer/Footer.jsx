import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ig from '../assets/insta.jpg';
import fb from '../assets/facebook.png';

const Map = () => {
  useEffect(() => {
    // initialize the map
    const map = L.map("map").setView([40.42195, -3.69449], 15);

    // add the tile layer to the map
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 18,
    }).addTo(map);

    // create a custom icon
    const icon = L.icon({
      iconUrl: "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png",
      iconSize: [25, 25],
      iconAnchor: [12, 41],
      popupAnchor: [0, -35],
    });

    // add a marker to the map
    L.marker([40.42195, -3.69449], { icon })
      .addTo(map)
      .bindPopup("<b>Gandía 1, Madrid</b><br>Ven a vernos.")
      .openPopup();

    // return cleanup function to remove map instance
    return () => {
      map.remove();
    };
  }, []);

  return (
    <footer className="footerFormat">
      <div>
        <div id="rowDisp">
          <div id="columnDisp">
            <p>XOX*</p>
            <p>Toma el control de tu vida y de tu cuerpo con el conocimiento y las herramientas para tomar decisiones bien informadas sobre tu vida sexual.</p>
          </div>
          <article>
            <h3>Contacto</h3>
            <p>Sede en Madrid:</p>
            <p>c/Gandía 1, local 9A 28007</p>
            <p>Madrid (España)</p>
            <p>Tel.: +34 683 280 312</p>
            <p>Email: madrid@gtt-vih.org</p>
            <p></p>
            <div>
              <a href="https://www.facebook.com/gtt.vih/?locale=es_ES">
                <img className="social" src={fb} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/gtt_vih/">
                <img className="social" src={ig} alt="instagram" />
              </a>
            </div>
          </article>
        </div>
      </div>
      <div id="map"></div>
    </footer>
  );
};

export default Map;

