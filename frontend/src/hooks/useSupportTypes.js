import { useState, useCallback } from "react";
import { getSupportTypes } from "../services/serviceTypeSupport";

export function useSupportTypes(){

    const [supportTypes, setSupportTypes] = useState([]);


    const getData = useCallback(async () => {
        try{
            const data = await getSupportTypes()
            setSupportTypes(data)
        }catch(e){
            throw new Error('Error getting branches')
        }
    },[])

    return { supportTypes, getSupportTypes: getData }
}