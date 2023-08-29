import { ADD_to_cart } from "../constants"
import { REMOVE_from_cart } from "../constants"

export const addtocart=(data)=>{
    return{
        type:ADD_to_cart,
         data:data
    }
}
export const removefromcart=()=>{
    return{
        type:REMOVE_from_cart,
        
    }
}

