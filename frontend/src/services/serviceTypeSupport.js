import { URL_API } from "../constanst/api";
export const getSupportTypes = async () => {
    
    try{
        const response = await fetch(`${URL_API}/catalogues/Support/types`)
        const json = await response.json()

        const types = json.data

        return types?.map(department => ({
            id: department.id ,
            name:department.name 
        }))
    }
    catch(e){
        throw new ("Error getting branches")
    }
}