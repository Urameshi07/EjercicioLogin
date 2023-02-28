import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    function registro (){
        fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    body: JSON.stringify({ "email": email ,"password":pass}),
    })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
        
    }

    return (
        <div className="auth-form-container">
            <h2>Registro</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre completo</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombre Completo" />
            <label htmlFor="email">Correo</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="TuCorreo@mail.com" id="email" name="email" />
            <label htmlFor="password">Contraseña</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" onClick={registro}>Crea tu Cuenta</button>
        </form>
    </div>
    )
}