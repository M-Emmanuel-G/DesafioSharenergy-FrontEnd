import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase } from '../../style';
import { ContainerAction, ContainerPage } from './style';

export default function SecondPage() {
    const [inputStatus, setInputStatus] = useState('')
    
    const navigate = useNavigate('')

    const nextPage = ()=>{navigate('/thirdPage')} 
    const previousPage = ()=>{navigate('/firstPage')} 

 return (
   <ContainerBase>
        <ContainerAction>
        <button onClick={previousPage}>Voltar</button>
            <input
                placeholder='Digite um status code'
                value={inputStatus}
                onChange={(ev)=>{setInputStatus(ev.target.value)}}
            />
            <button onClick={nextPage}>Avancar</button>
        </ContainerAction>
        <ContainerPage>
            <img src={`https://http.cat/${inputStatus}`}/>
        </ContainerPage>
   </ContainerBase>
 );
}