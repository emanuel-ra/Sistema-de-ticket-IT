import { URL_API } from "../constanst/api";
export const getBranches = async () => {
    
    try{
        const response = await fetch(`${URL_API}/catalogues/Branches`)
        const json = await response.json()

        const branches = json.data

        return branches?.map(branch => ({
            id: branch.id ,
            name:branch.name 
        }))
    }
    catch(e){
        throw new ("Error getting branches")
    }
}