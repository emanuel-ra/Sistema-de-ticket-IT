import { useState, useCallback } from "react";
import { createTicket } from "../services/serviceTickets";

export const useTickets = () => {
    
    const [ticket, setTicket] = useState([]);


    const create = useCallback(async ({data}) => {       
        try{
            const response = await createTicket({data})
            setTicket(response)
        }catch(e){
            //throw new Error(e)
        }
    },[])

    return { ticket, createTicket: create }

}