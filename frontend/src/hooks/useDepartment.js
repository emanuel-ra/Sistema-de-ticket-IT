import { useState, useCallback } from "react";
import { getDepartments } from "../services/serviceDepartments";

export function useDepartments(){

    const [departments, setDepartment] = useState([]);


    const getData = useCallback(async () => {
        try{
            const data = await getDepartments()
            setDepartment(data)
        }catch(e){
            throw new Error('Error getting branches')
        }
    },[])

    return { departments, getDepartments: getData }
}