import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase } from '../../style';
import { ContainerPage, ContainerSearch, CardUser } from './style';

export default function FirstPage() {

   const [Users, setUsers] = useState([])
   const [inputSearch, setInputSearch] = useState('')
   const [page, setPage] = useState(1)
   const navigate = useNavigate('')
   useEffect(()=>{ 
      axios
         .get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
         .then((resp)=>{
            setUsers(resp.data.results) 
            console.log(resp.data.results);
         })
   },[page])

   const renderUsers = () =>{
      return(
         Users.map((user, key)=>{
            return(
               <CardUser key={key}>
                  <img src={user.picture.large}></img>
                  <span>nome: {user.name.first} {user.name.last}</span>
                  <span>email: {user.email}</span>
                  <span>nome de usuario: {user.login.username}</span>
                  <span>idade: {user.dob.age} anos</span>
               </CardUser>
            )
         })
      )
   }

   const nextPage = ()=>{
      navigate('/secondPage')
   }

   const nextResults = () =>{
      setPage(page + 1)
   }

   const previousResults = () =>{
      if(page > 1){
         setPage(page - 1)
      }
   }
 return (
   <ContainerBase>
      <ContainerSearch>
         <input
            placeholder='Pesquisar'
            value={inputSearch}
            onChange={(ev)=>{ setInputSearch(ev.target.value)}}
         />
         <button onClick={previousResults}>Anterior</button>
         <button onClick={nextResults}>Proxima</button>
         <button onClick={nextPage}>Avancar</button>
      </ContainerSearch>
      <ContainerPage>
        {
        Users.filter((user)=>{
            return user.name.first.includes(inputSearch) || user.login.username.includes(inputSearch) || user.name.last.includes(inputSearch) || user.email.includes(inputSearch)
        })
        .map((user, key)=>{
         return(
            <CardUser key={key}>
               <img src={user.picture.large}></img>
               <span>nome: {user.name.first} {user.name.last}</span>
               <span>email: {user.email}</span>
               <span>nome de usuario: {user.login.username}</span>
               <span>idade: {user.dob.age} anos</span>
            </CardUser>
         )
        })}
      </ContainerPage>
   </ContainerBase>
 );
}