import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../pages/pages.css';

function Login() {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if (!email){
            alert('Email obrigatório!')
            return
        } if (!password){
            alert ('Senha obrigatória!')
            return
        } 
        history.push('/mapa')

    }

    return (
        <form className="row g-3" onSubmit = {handleSubmit}>
            
            <h2 className='title'>Login</h2>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>                
                <input type="email" class="form-control" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" required/>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>                
                <input type="password" class="form-control" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" required/>
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary" type="submit">Entrar</button> 
            </div>  

        </form>
    );

}

export default Login;