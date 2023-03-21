import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { ContainerBase } from '../../style';
import { ContainerAdd, ContainerPage } from './style';
import Swal from 'sweetalert2';

export default function AddClientPage() {
    const [inputName, setInputName]= useState('')
    const [inputCPF, setInputCPF]= useState('')
    const [inputEmail, setInputEmail]= useState('')
    const [inputPhone, setInputPhone]= useState('')
    const [inputAddress, setInputAddress]= useState('')

    const navigate = useNavigate('')

    const body = {
        name: inputName,
        cpf: inputCPF,
        email: inputEmail,
        phone: inputPhone,
        address: inputAddress
      }
    
      const addClient = (ev)=>{
        ev.preventDefault()
        axios
          .post('http://localhost:3003/clients', body)
          .then((resp)=>{
            Swal.fire(
              'Sucesso',
              'Cliente foi adicionado com sucesso!',
              'success'
            )
            navigate('/fourPage')
          })
          .catch((err)=>{
            Swal.fire(
              'ERROR!',
              `${err.response.data.message}`,
              'error'
            )
          })
      }

return (
   <ContainerBase>
    <Header/>
    <ContainerPage>
    <ContainerAdd>
            <form onSubmit={addClient}>
            <h2>Cadastrar cliente</h2>
              <input
                type='text'
                placeholder='NOME'
                value={inputName}
                onChange={(ev)=>{setInputName(ev.target.value)}}
              />
              <input
                placeholder='CPF'
                value={inputCPF}
                onChange={(ev)=>{setInputCPF(ev.target.value)}}
                type='number'
                maxLength = {5}
              />
              <input
                placeholder='EMAIL'
                value={inputEmail}
                onChange={(ev)=>{setInputEmail(ev.target.value)}}
                type='email'
              />
              <input
              type='number'
                placeholder='TELEFONE'
                value={inputPhone}
                onChange={(ev)=>{setInputPhone(ev.target.value)}}
              />
              <input
                type='text'
                placeholder='ENDERECO'
                value={inputAddress}
                onChange={(ev)=>{setInputAddress(ev.target.value)}}
              />

              <button>Cadastrar</button>
            </form>
          </ContainerAdd>
    </ContainerPage>
   </ContainerBase>
 );
}