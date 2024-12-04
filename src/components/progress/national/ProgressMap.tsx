import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface StateData {
  name: string;
  progress: number;
  schools: number;
  status: 'completed' | 'in-progress' | 'not-started';
  coordinates: [number, number]; // Latitude, Longitude
}

const mockStateData: StateData[] = [
  {
    name: 'Kerala',
    progress: 85,
    schools: 12500,
    status: 'completed',
    coordinates: [10.8505, 76.2711],
  },
  {
    name: 'Tamil Nadu',
    progress: 65,
    schools: 15000,
    status: 'in-progress',
    coordinates: [11.1271, 78.6569],
  },
  {
    name: 'Karnataka',
    progress: 45,
    schools: 13000,
    status: 'in-progress',
    coordinates: [15.3173, 75.7139],
  },
  {
    name: 'Maharashtra',
    progress: 75,
    schools: 20000,
    status: 'completed',
    coordinates: [19.7515, 75.7139],
  },
  {
    name: 'Rajasthan',
    progress: 30,
    schools: 16000,
    status: 'not-started',
    coordinates: [27.0238, 74.2179],
  },
  {
    name: 'Punjab',
    progress: 90,
    schools: 11000,
    status: 'completed',
    coordinates: [31.1471, 75.3412],
  },
  {
    name: 'Haryana',
    progress: 70,
    schools: 9000,
    status: 'completed',
    coordinates: [29.0588, 76.0856],
  },
  {
    name: 'West Bengal',
    progress: 55,
    schools: 17000,
    status: 'in-progress',
    coordinates: [22.9868, 87.855],
  },
  {
    name: 'Odisha',
    progress: 60,
    schools: 14000,
    status: 'in-progress',
    coordinates: [20.9517, 85.0985],
  },
  {
    name: 'Chhattisgarh',
    progress: 25,
    schools: 12000,
    status: 'not-started',
    coordinates: [21.2787, 81.8661],
  },
];
export function ProgressMap() {
  const [activeState, setActiveState] = useState<StateData | null>(null);
  return (
    <div className="relative h-[400px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="relative h-full w-full bg-white rounded-xl shadow-lg">
        <MapContainer
          center={[20.5937, 78.9629]} // Center of India
          zoom={5}
          className="h-full w-full" // Use full height and width
          style={{ height: '100%', width: '100%' }} // Inline fallback
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {mockStateData.map((state) => (
            <Marker
              key={state.name}
              position={state.coordinates}
              eventHandlers={{
                click: () => setActiveState(state),
              }}
            >
              <Popup>
                <h3 className="font-bold">{state.name}</h3>
                <p>Progress: {state.progress}%</p>
                <p>Schools: {state.schools.toLocaleString()}</p>
                <div
                  className={`inline-block px-2 py-1 rounded-full text-xs ${
                    state.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : state.status === 'in-progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {state.status.replace('-', ' ')}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
