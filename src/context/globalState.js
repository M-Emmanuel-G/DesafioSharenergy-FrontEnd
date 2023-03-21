
import axios from 'axios'
import { useEffect, useState } from 'react'
import {GlobalContext} from '../context/globalStateContext'
import useRequestData from '../hooks/useRequestdata'

export const GlobalState = (props)=>{

    const [clients, setClients] = useState([])
    const [ data ] = useRequestData(`http://localhost:3003/clients`)

    // const renderClients = data.clients && data.clients.map((client)=>{
    //     console.log(client);
    // })

    // useEffect(()=>{
    //     axios
    //       .get('http://localhost:3003/clients')
    //       .then((resp)=>{setClients(resp.data.clients)}
    //       )
    //     },[])

    const dataClient = {
        clients,
        setClients
    }

    return(
        <GlobalContext.Provider value={dataClient}>
            {props.children}
        </GlobalContext.Provider>
    )
} 