import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    function login (){
        if (email==="" || pass===""){
            alert('Hace falta completar uno o varios campos, intenta de nuevo')
            return false;

        }else{
            fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            /*Mandamos los valores de mail y pass como parámetros*/
            body: JSON.stringify({ "email": email ,"password":pass}),
            })
            .then(response=>{
                if(response.status=='200'){
                    //Lógica para ejecutar la consulta de datos
                    alert('Bienvenido.');
                    window.location.href='./listado';
                }else{
                    alert('El usuario o contraseña no son correctos, intenta de nuevo.');
                }
            })
        }   
    }
    

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="TuCorreo@mail.com" id="email" name="email" required/>
                <label htmlFor="password">Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password" required/>
                <button type="submit" onClick={login}>Inicia Sesión</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>¿Aún no tienes cuenta? Regístrate.</button>
        </div>
    )
}