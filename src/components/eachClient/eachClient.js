import React from 'react';
import { ActionClient, EachClient, InfoClient } from './style';

export default function CardEachClient(props) {
 return (
   <EachClient>
        <InfoClient>
        <div>
            <span>NOME: {props.client.name}</span>
            <span>CPF: {props.client.cpf}</span>
            <span>TELEFONE: {props.client.phone}</span>
            <span>EMAIL: {props.client.email}</span>
            <span>ENDERECO: {props.client.address}</span>
        </div>
        </InfoClient>
        <ActionClient>
          <button>E</button>
          <button>X</button>
        </ActionClient>
   </EachClient>
 );
}