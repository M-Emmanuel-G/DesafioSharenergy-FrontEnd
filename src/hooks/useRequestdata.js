
import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData=(url, headers)=>{

    const [ data, setData] = useState(undefined)
    const [ isLoading, setIsLoading] = useState(false)
    const [ error, setError] = useState("")
    const [ page, setPage ]= useState(false) 
    

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url, headers)
            .then((resp)=>{
                setData(resp.data)
                setIsLoading(false)
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err)
            })
    },[url, page])
    return [data, page, setPage, isLoading, error, ];
}

export default useRequestData