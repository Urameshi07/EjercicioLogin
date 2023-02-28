import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    function vacios (){
        if (name==""|| email=="" || pass==""){
            alert('Hace falta completar uno o varios campos, intenta de nuevo')
            return false;

        }else{
            //Realiza registro
            fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": name }),
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response.name)))
                alert('Bienvenido: '+name);
                window.location.href='./Login';
 
        }

    }


    return (
        <div className="auth-form-container">
            <h2>Registro</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre completo</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Nombre Completo" required/>
            <label htmlFor="email">Correo</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="TuCorreo@mail.com" id="email" name="email" required/>
            <label htmlFor="password">Contraseña</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
            <button type="submit" onClick={vacios}>Crea tu Cuenta</button>
        </form>
    </div>
    )
}