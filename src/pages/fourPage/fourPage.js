import axios from 'axios';
import React from 'react';
import Header from '../../components/header/header';
import useRequestData from '../../hooks/useRequestdata';
import { ContainerBase } from '../../style';
import { ContainerList, ContainerPage } from './style';
import { URL_BASE } from '../../routes/constants';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function FourPage() {
  const navigate = useNavigate('')
  const [data, page, setPage] = useRequestData(`${URL_BASE}`)

  const removeClient = (id) => {
   
    Swal.fire({
      title: 'Deseja realmente excluir o cliente?',
      text: "Esta acao nao podera ser revertida!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
        .delete(`http://localhost:3003/clients/${id}`)
        .then((resp)=>{ 
          setPage(!page)
          
        })
        Swal.fire(
          'Excluido!',
          'Cliente foi excluido com sucesso!',
          'success'
        )
      }
    })
}

const updateClient = (id) =>{
  localStorage.setItem('idClient', id)
  navigate('/updateClient')
}

  const renderClient = data && data.clients.map((client, key)=>{
    return(
      <tr key={key}>
        <td>{client.name}</td>
        <td>{client.cpf}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>{client.address}</td>
        <td>
          <div>
            <img onClick={()=>{updateClient(client._id)}} src='https://png.pngtree.com/element_our/png_detail/20181206/edit-vector-icon-png_262133.jpg'/>
            <img onClick={()=>{removeClient(client._id)}} src='https://cdn-icons-png.flaticon.com/512/216/216658.png'/>
          </div>
        </td>
      </tr>
    )
  })
 return (
   <ContainerBase>
        <Header/>
        <ContainerPage>
          <ContainerList>
            <table>
              <tr>
                <th>NOME</th>
                <th>CPF</th>
                <th>EMAIL</th>
                <th>TELEFONE</th>
                <th>ENDERECO</th>
                <th></th>
              </tr>
            {renderClient}
            </table>
          </ContainerList>
        </ContainerPage>
   </ContainerBase>
 );
           
}