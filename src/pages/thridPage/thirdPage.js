import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase } from '../../style';
import { ContainerAction, ContainerPage } from './style';

export default function ThridPage() {
    const navigate = useNavigate('')
    const [render, setRender] = useState({})
    const [refresh, setRefresh] = useState(false)
    
    useEffect(() => {
        axios.get('https://random.dog/woof.json').then((resp)=>{
            setRender(resp.data.url)
            console.log(resp.data);
        })

    },[refresh])

    const nextDog = ()=>{
        refresh === false ? setRefresh(true) : setRefresh(false)
    }
 return (
    <ContainerBase>
        <ContainerAction>
            <button onClick={(()=>{navigate('/secondPage')})} >Voltar</button>
            <button onClick={nextDog}>Atualizar</button>
            <button onClick={(()=>{navigate('/fourPage')})}>Avancar</button>
        </ContainerAction>
        <ContainerPage>
           <img src={render}/>
        </ContainerPage>
        
    </ContainerBase>
 )
}