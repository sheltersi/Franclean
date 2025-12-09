"use client";

import Map from "ol/Map";
import View from "ol/View";
import GeoJSON from "ol/format/GeoJSON";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style } from "ol/style";
import { useEffect, useRef } from "react";

export default function ServicesMap() {
  const mapRef = useRef(null);

useEffect(() => {
  if (!mapRef.current) return;

  // Load province polygon GeoJSON files
  const provinces = [
    { file: "/geo/gauteng.geojson", color: "#2563EB" },
    { file: "/geo/north_west.geojson", color: "#1D4ED8" },
    { file: "/geo/mpumalanga.geojson", color: "#3B82F6" },
  ];

  let loadedLayers = 0;
  const vectorSources = [];

  const provinceLayers = provinces.map(({ file, color }) => {
    const source = new VectorSource({
      url: file,
      format: new GeoJSON(),
    });

    vectorSources.push(source);

    // Count when each GeoJSON loads
    source.on("change", () => {
      if (source.getState() === "ready") {
        loadedLayers++;

        // Once all provinces are loaded → fit map to their boundaries
        if (loadedLayers === provinces.length) {
          const combinedExtent = vectorSources[0].getExtent().slice();

          for (let i = 1; i < vectorSources.length; i++) {
            combinedExtent[0] = Math.min(combinedExtent[0], vectorSources[i].getExtent()[0]);
            combinedExtent[1] = Math.min(combinedExtent[1], vectorSources[i].getExtent()[1]);
            combinedExtent[2] = Math.max(combinedExtent[2], vectorSources[i].getExtent()[2]);
            combinedExtent[3] = Math.max(combinedExtent[3], vectorSources[i].getExtent()[3]);
          }

          map.getView().fit(combinedExtent, {
            padding: [50, 50, 50, 50],
            maxZoom: 7,     // prevents zooming too close
            duration: 1000, // smooth animation
          });
        }
      }
    });

    return new VectorLayer({
      source,
      style: new Style({
        fill: new Fill({ color: `${color}88` }),
        stroke: new Stroke({
          color: color,
          width: 2,
        }),
      }),
    });
  });

  // Initialize map
  const map = new Map({
    target: mapRef.current,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      ...provinceLayers,
    ],
    view: new View({
      center: [0, 0], // placeholder; will auto-fit after load
      zoom: 4,
    }),
  });

  return () => map.setTarget(null);
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-blue-900 mb-10">
        Our Service Areas
      </h1>

      <p className="text-center text-blue-700 mb-6">
        We proudly service Gauteng, North West & Mpumalanga Provinces.
      </p>

      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-2xl shadow-xl border border-blue-200"
      ></div>
    </div>
  );
}
