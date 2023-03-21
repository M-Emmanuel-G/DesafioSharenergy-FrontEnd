import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase } from '../../style';
import { ContainerPage, ContainerUpdate } from './style';
import Swal from 'sweetalert2';

export default function UpdateClients() {

  const [inputName, setInputName]= useState('')
  const [inputEmail, setInputEmail]= useState('')
  const [inputPhone, setInputPhone]= useState('')
  const [inputAddress, setInputAddress]= useState('')

  const navigate = useNavigate('')

  const body = {
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      address: inputAddress
    }
  
    const updateClient = (ev)=>{
      
      ev.preventDefault()
      if(!inputName){ alert('insira um nome valido..')}
      if(!inputEmail){ alert('insira um nome valido..')}
      if(!inputPhone){ alert('insira um nome valido..')}
      if(!inputAddress){ alert('insira um nome valido..')}
      

      axios
        .patch(`http://localhost:3003/clients/${localStorage.getItem('idClient')}`, body)
        .then((resp)=>{
          console.log(resp);
          navigate('/fourPage')

          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Cliente foi editado com sucesso!',
          })
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.message,
          })
        })

        
    }

 return (
   <ContainerBase>
      <Header/>
      <ContainerPage>
        <ContainerUpdate>
          <form onSubmit={updateClient}>
            <h2>Atualizar cliente</h2>
              <input
                placeholder='NOME'
                value={inputName}
                onChange={(ev)=>{setInputName(ev.target.value)}}
              />
              <input
                placeholder='EMAIL'
                value={inputEmail}
                onChange={(ev)=>{setInputEmail(ev.target.value)}}
              />
              <input
                placeholder='TELEFONE'
                value={inputPhone}
                onChange={(ev)=>{setInputPhone(ev.target.value)}}
              />
              <input
                placeholder='ENDERECO'
                value={inputAddress}
                onChange={(ev)=>{setInputAddress(ev.target.value)}}
              />

              <button>Atualizar</button>
          </form>
        </ContainerUpdate>
      </ContainerPage>
   </ContainerBase>
 );
}