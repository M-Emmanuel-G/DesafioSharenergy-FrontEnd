import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerHeader } from './style';

export default function Header() {
    const navigate= useNavigate('')

    const addClient = () => {
        navigate('/addClient')
    }

    const listClient = () => {
        navigate('/fourPage')
    }

 return (
   <ContainerHeader>
        <div>
            <button onClick={listClient}>Lista</button>
            <button onClick={addClient}>Adicionar</button>
        </div>
   </ContainerHeader>
 );
}