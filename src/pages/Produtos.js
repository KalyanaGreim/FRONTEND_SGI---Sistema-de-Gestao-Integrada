import '../pages/pages.css';
import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router';

function Produtos() {
    const history = useHistory()
    const [imageUrl, setImageUrl] = useState('')
    const [productName , setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [provider, setProvider] = useState('')
    const [providers, setProviders] = useState([])
    const [group, setGroup] = useState('')  
    const [groups, setGroups] = useState([])
    const [cost, setCost] = useState('') 
  

    
    async function handleSubmit(event) {
        event.preventDefault()
        if (!imageUrl){
            alert('Favor inserir a url da imagem!')
            return
        } if (!productName){
            alert ('Favor inserir o nome do produto!')
            return
        } if (!cost){
            alert ('Favor inserir o preço do produto!')
        return
        }  if (!description){
            alert ('Favor inserir a descrição do produto!')
        return 
        } if (!provider){
            alert ('Favor inserir o fornecedor do produto!')
            return
        } if (!group){
            alert ('Favor inserir o grupo do produto!')
            return
        }
    
        try{
            await fetch('http://localhost:3333/produtos', {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                }, 
                body: JSON.stringify({
                    imageUrl,
                    productName,
                    cost,
                    description,
                    provider,
                    group
                })
        })
        alert('Produto cadastrado com sucesso!')
        history.push('/produtos')
        } catch(error){
            alert('Desculpe, tente novamente mais tarde.')
        } 


    }
    useEffect(()=>{
        async function getProvidersandGroups(){
            try {
                let responseProviders = await fetch('http://localhost:3333/fornecedores')
                responseProviders = await responseProviders.json()
                setProviders(responseProviders)
                let responseGroups = await fetch ('http://localhost:3333/grupos')
                responseGroups= await responseGroups.json()
                setGroups(responseGroups)
            }
            catch(error) {
                alert('Erro ao acessar grupos e fornecedores')
            }
        }
        getProvidersandGroups()
    }, [])


    return (
        <form class="row g-3" onSubmit={handleSubmit}>
            <div class="form-group">
                <h2 className='title'>Cadastre o produto:</h2>
                {imageUrl && <img src={imageUrl} alt="Imagem do produto"/>}              
                <div class="mb-3">
                    <label> URL da imagem:</label>
                    <input type="text" class="form-control" name='imageUrl' value={imageUrl} onChange={(event)=>setImageUrl(event.target.value)}  placeholder="insira um link de imagem" required/>
                </div>
                <div class="row">
                    <div class="col">
                        <label>Nome do produto:</label>
                        
                        <input type="text" class="form-control" name='productName' value={productName} onChange={(event)=>setProductName(event.target.value)}  placeholder="Ex.:Fone de ouvido" required/> 
                        
                    </div>
                    <div class="col">
                    
                        <label>Preço do produto:</label>
                        <div className='input-group-pretend input-group-sm input-group-text'>R$ 
                            <input type="text" name='cost' className='form-control' value={cost} onChange={(event)=>setCost(event.target.value)}  placeholder="0,00" required/> 
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descrição do produto:</label>
                    
                    <textarea name='description' className='form-control' value={description} onChange={(event)=>setDescription(event.target.value)}  placeholder="Ex.:Branco" required rows="3"/>
                </div>
               
                <div class="row">
                    <div class="col">
                        <label>Fornecedor:  </label>                     
                        <select type="text" name='provider' class="form-select form-select-sm mb-3"  value={provider} onChange={(event)=>setProvider(event.target.value)}  required> 
                        {providers.map(item => <option value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div class="col">                     
                        <label>Grupo:</label>
                        <select type="text" name='group' class="form-select form-select-sm mb-3"  value={group} onChange={(event)=>setGroup(event.target.value)}  required> 
                        {groups.map(item => <option value={item}>{item}</option>)}
                        </select> 
                    </div> 
                    
                </div>
                    
                </div>
                <div> 
                <div className="col-md-2">
                        <button className="btn btn-primary" type="submit">Cadastrar</button> 
                </div> 
            </div>
        </form> 
    );

}

export default Produtos;