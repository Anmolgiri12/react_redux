import React from "react";
import img1 from '../phone.jpeg';
import img2 from '../download.png'
import { useSelector,useDispatch} from "react-redux";


function Home(props){
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log("home",state)
    console.log(state.cardItems.cardData.length,'sdfds');
    
        return(
        <div>
        {/* //     <h1>home component</h1>
        //     <div className="cart_data">
        //         <span className="span_item" >{state.cardItems.cardData.length}</span>
        //         <img className="img-cart" src={img2} alt="" />
        //     </div> */}
          
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                   <img src={img1} /> 
                </div>
                <div className="text-wrapper item">
                <span>mobile phone</span>
                <div></div> 
                <span>price = $2000</span>
                </div>
                <div className="btn-wrapper item">
                   <button onClick={()=>   
                     dispatch({type:'addToCart',payload:{name:'anmol', age:20}})
                     }>add to cart</button>
                     <button onClick={()=>   
                     dispatch({type:'removefromcart'})
                     }>remove from cart</button>
                </div>
            </div>
        </div>
    )
    }

    export default Home;