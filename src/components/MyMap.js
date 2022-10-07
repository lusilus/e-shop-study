import { MapContainer, TileLayer, useMap , Marker, Popup} from 'react-leaflet'

export default function MyMap(){
    return(
     
  <MapContainer center={[52.515, 13.39]} zoom={13} scrollWheelZoom={false} style={{ width: "100%", height: "300px" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Marker position={[52.516, 13.39]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      {/* </Popup>
    </Marker> */} */
  </MapContainer>
  
 
    )
   
}

