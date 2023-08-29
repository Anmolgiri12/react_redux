import Header from "../component/header";
import {connect} from 'react-redux';

const mapStatetoprops=state=>({
        data:state
})

const mapDispatchtoprops=dispatch=>({
    // addtocartHandler:data=>dispatch(addtocart(data))

});

export default connect( mapStatetoprops , mapDispatchtoprops)(Header)

