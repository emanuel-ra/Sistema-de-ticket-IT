import { URL_API } from "../constanst/api";
export const getDepartments = async () => {
    
    try{
        const response = await fetch(`${URL_API}/catalogues/Departments`)
        const json = await response.json()

        const departments = json.data

        return departments?.map(department => ({
            id: department.id ,
            name:department.name 
        }))
    }
    catch(e){
        throw new ("Error getting branches")
    }
}