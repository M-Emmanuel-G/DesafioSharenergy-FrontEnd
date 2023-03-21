import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase } from '../../style';
import { ButtonCamp, ContainerLogin, LoginCamp } from './style';

export default function LoginPage() {
    const navigate = useNavigate('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('name') === 'desafiosharenergy'){
            navigate('/firstPage')
        }
    },[])

    const nextPage = (ev)=>{
        ev.preventDefault()
        if(name === 'desafiosharenergy' && password === 'sh@r3n3rgy'){
            if(remember === true){
                localStorage.setItem('name', name)
                localStorage.setItem('password', password)
            }
            navigate('/firstPage')
        } else{
            alert('Login inválido')
        }
    }

 return (
    <ContainerBase>
        <ContainerLogin>
            <form onSubmit={nextPage}>
            <LoginCamp>
            <h2>Acesse sua conta</h2>
                <input
                    placeholder='Usuário'
                    value={name}
                    onChange={(ev)=>{setName(ev.target.value)}}
                />
                <input
                    placeholder='Senha'
                    value={password}
                    onChange={(ev)=>{setPassword(ev.target.value)}}
                />
            </LoginCamp>
            <ButtonCamp>
            
                    <div>
                        <input 
                            type='checkbox'
                            id='remember'
                            value={remember}
                            onChange={(ev)=>{setRemember(ev.target.checked)}}
                            />
                        <label>Lembrar-me</label>
                    </div>
                        <button type='submit'>Logar</button>
            </ButtonCamp>
            </form>
        </ContainerLogin>
    </ContainerBase>
 );
}