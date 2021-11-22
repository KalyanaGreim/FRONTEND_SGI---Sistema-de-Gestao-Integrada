import React, { useEffect, useState } from 'react';
import '../pages/pages.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



function Mapa() {
  const [enterprises, setEnterprises] = useState([])

  useEffect(()=>{
    async function getEnterprises(){
      const response = await fetch ('http://localhost:3333/empresas')
      const responseJSON = await response.json()
      const mappedResponse = responseJSON.map((enterprise) => {
        return {
          enterpriseName: enterprise.enterpriseName, fantasyName: enterprise.fantasyName, 
          CNPJ: enterprise.CNPJ, email: enterprise.email, coordinates: enterprise.coordinates
        }
      })
      setEnterprises(mappedResponse)
    }
    getEnterprises()
  },[])

    return (
        <div className="container-map">
      {
      
  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {
      enterprises.map(enterprise => (
        <Marker 
        position={enterprise.coordinates}
        >
          <Popup>
            <p>Razão Social: {enterprise.enterpriseName}</p>
            <p>Nome Fantasia: {enterprise.fantasyName}</p>
            <p>CNPJ: {enterprise.CNPJ}</p>
            <p>CEP: {enterprise.CEP}</p>
            <p>Endereço: {enterprise.address}</p>
            <p>Bairro: {enterprise.district}</p>
            <p>Cidade: {enterprise.city}</p>
            <p>Complemento: {enterprise.complement}</p>
            <p>Latitude: {enterprise.latitude}</p>
            <p>Longitude: {enterprise.longitude}</p>
          </Popup>
        </Marker>
      ))
    }
  </MapContainer>
        
      }
    </div>
    );

}

export default Mapa;