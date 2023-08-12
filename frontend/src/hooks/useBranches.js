import { useState, useCallback } from "react";
import { getBranches } from "../services/serviceBranches";

export function useBranches(){

    const [branches, setBranches] = useState([]);


    const getData = useCallback(async () => {
        try{
            const data = await getBranches()
            setBranches(data)
        }catch(e){
            throw new Error('Error getting branches')
        }
    },[])

    return { branches, getBranches: getData }
}