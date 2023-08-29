import { ADD_to_cart } from "../constants";

const initialstate={
    cardData:[]
};

export default function cardItems(state=initialstate,action){
    // console.log('reducer called')
   switch(action.type){
    case 'addToCart':{
        console.log('addTO cart called')
    
    return {
            ...state,
          cardData:[...state.cardData,action.payload]
    }
    }
    case 'removefromcart':{
        console.log('addTO cart removed')
        state.cardData.pop();
        // state.pop();
    
    return {
            ...state,
    }
    }
    // case ADD_to_cart:
    //     return{
    //         ...state,
    //         cardData:action.data
    //     }
       
        default:
            return state
   }
}