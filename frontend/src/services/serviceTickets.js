import { URL_API } from "../constanst/api";
export const createTicket = async ({ data }) => {
    
    try{
        const response = await fetch(`${URL_API}/tickets/request`,{
            method: "POST" ,
            cache: "no-cache" ,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const json = await response.json()
        
        return json;
    }
    catch(e){
        //throw new ("Error to create ticket")
        console.log(e)
    }
}