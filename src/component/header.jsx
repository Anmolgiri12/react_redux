import React from "react";

import img2 from '../download.png'
import { useSelector,useDispatch} from "react-redux";


function Header(props){
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log("home",state)
    console.log(state.cardItems.cardData.length,'sdfds');
    
        return(
        <div>
            <h1>home component</h1>
            <div className="cart_data">
                <span className="span_item" >{state.cardItems.cardData.length}</span>
                <img className="img-cart" src={img2} alt="" />
            </div>
        </div>
    )
    }

    export default Header;