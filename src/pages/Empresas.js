import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../pages/pages.css';


function Empresas() {
    const history = useHistory()
    const [enterpriseName, setEnterpriseName] = useState('')
    const [fantasyName, setFantasyName] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [email, setEmail] = useState('')
    const [CEP, setCEP] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [complement, setComplement] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    
    async function handleSubmit(event) {
        event.preventDefault()
        if (!enterpriseName){
            alert('Razão Social obrigatória!')
            return
        } if (!fantasyName){
            alert ('Nome Fantasia obrigatório!')
            return
        } if (!CNPJ){
            alert ('CNPJ obrigatório!')
            return
        } if (!email){
            alert ('Email obrigatório!')
            return
        } if (!CEP){
            alert ('Nome Fantasia obrigatório!')
            return
        } if (!address){
            alert ('Endereço obrigatório!')
            return
        } if (!number){
            alert ('Número obrigatório!')
            return
        } if (!district){
            alert ('Bairro obrigatório!')
            return
        } if (!city){
            alert ('Cidade obrigatório!')
            return
        } if (!latitude){
            alert ('Latitude obrigatória!')
            return 
        } if (!longitude){
            alert ('Longitude obrigatória!')
            return
        }

        try{
            await fetch('http://localhost:3333/empresas', {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                }, 
                body: JSON.stringify({
                    enterpriseName, 
                    fantasyName,
                    CNPJ,
                    CEP,
                    email,
                    address,
                    number,
                    district,
                    city,
                    complement,
                    coordinates:[latitude,longitude]
                })
        })
        alert('Empresa cadastrada com sucesso!')
        history.push('/mapa')
        } catch(error){
            alert('Desculpe, tente novamente mais tarde.')
        } 

    }
    return (
        <form class="row g-3" onSubmit={handleSubmit}>           
                        <h2 className='title'>Cadastre a empresa:</h2>  
                        <div className="col-md-6">
                            <label  className="form-label">Razão Social</label>
                            <input type="text" class="form-control" name='enterpriseName'  onChange={(event) => setEnterpriseName(event.target.value)} value={enterpriseName} placeholder="DevinHouse LTDA"  required />
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Nome Fantasia</label>
                            <input type="text" className="form-control" name='fantasyName' onChange={(event) => setFantasyName(event.target.value)} value={fantasyName} placeholder="DEVinHouse" required/>
                        </div>
                        <div className="col-md-6">
                            <label  className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' onChange={(event) => setEmail(event.target.value)} value={email} placeholder="involves@gmail.com" />
                        </div>
                        <div class="col-md-6">
                            <label  class="form-label">CNPJ</label>
                            <input type="text" className="form-control" name='CNPJ' onChange={(event) => setCNPJ(event.target.value)} value={CNPJ} placeholder=" 00.000.000/0000-00" required/>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Endereço</label>
                            <input type="text" className="form-control" name='adress' onChange={(event) => setAddress(event.target.value)} value={address} placeholder="Rua Atilio Razera" required/>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Bairro</label>
                            <input type="text" className="form-control" name='district' onChange={(event) => setDistrict(event.target.value)} value={district} placeholder="Jardim das Américas" required/>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">Número</label>
                            <input type="text" className="form-control" name='number' onChange={(event) => setNumber(event.target.value)} value={number} placeholder="57" required/>
                        </div>
                        <div class="col-md-6">
                            <label  className="form-label">Cidade</label>
                            <input type="text" class="form-control" name='city' onChange={(event) => setCity(event.target.value)} value={city} placeholder="Cidade" required/>
                        </div>
                        <div className="col-md-4">
                            <label  className="form-label">Complemento</label>
                            <input type="text" class="form-control" name='complement' onChange={(event) => setComplement(event.target.value)} value={complement} placeholder="Rua sem saída"/>                                
                        </div>                            
                        <div className="col-md-2">
                            <label className="form-label">CEP</label>
                            <input type="text" className="form-control" name='CEP' onChange={(event) => setCEP(event.target.value)} value={CEP} placeholder="83.607-056" required/>
                        </div>
                        <div class="col-md-6">
                            <label className="form-label">Latitude</label>
                            <input type="text" className="form-control" name='latitude'  onChange={(event) => setLatitude(event.target.value)} value={latitude} placeholder="Latitude" required />
                        </div>
                        <div class="col-md-6">
                            <label className="form-label">Longitude</label>
                            <input type="text" className="form-control" name='longitude' onChange={(event) => setLongitude(event.target.value)} value={longitude} placeholder="Longitude" required/>
                        </div>
                            
                        <div className="col-md-2">
                        <button id='btn' className="btn btn-primary" type="submit">Cadastrar</button> 
                        </div>                                                 
      </form>
    );

}

export default Empresas;