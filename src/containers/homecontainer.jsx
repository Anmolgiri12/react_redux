import Home from "../component/home";
import {connect} from 'react-redux';
import { addtocart,removefromcart } from '../services/Actions/action';
import { REMOVE_from_cart } from "../services/constants";

const mapStatetoprops=state=>({
        data:state
})

const mapDispatchtoprops=dispatch=>({
    addtocartHandler:data=>dispatch(addtocart(data)),
    REMOVE_from_carthandler:data=>dispatch(removefromcart(data))

});

export default connect( mapStatetoprops , mapDispatchtoprops)(Home)

