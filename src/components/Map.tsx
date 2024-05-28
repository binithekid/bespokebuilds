import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY!,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 51.40055,
        lng: -0.12808,
      };

      const mapOptions = {
        center: position,
        zoom: 12,
        mapId: "ContactMap",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  }, []);

  return (
    <main className="w-full py-20 gap-8 flex md:flex-row flex-col px-4 md:px-20 ">
      <div className="md:w-1/2">
        <div ref={mapRef} className="shadow text-sm h-[30rem] my-8 rounded" />
      </div>

      <div className="md:w-1/2 flex justify-center flex-col">
        <div>
          <p className="text-gray-500">Where to find us</p>
          <h1 className="font-display font-bold text-2xl md:text-3xl tracking-normal text-gray-800">
            Connecting Near and Far
          </h1>
        </div>
        <div className="flex mt-1 flex-col gap-1 text-gray-500">
          <p>86 Huntingdon Close</p>
          <p>Mitcham, Surrey</p>
          <p>CR4 1XL</p>
          <p>United Kingdom</p>
        </div>
      </div>
    </main>
  );
};

export default Map;
