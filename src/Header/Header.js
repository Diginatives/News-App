
import react from "react";
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends react.Component{

    constructor(props){
        super(props);
    }

    handleSubmit=(e)=>{
        e.preventDefault();

    }

    render(){

        return(
            <div className="app-header">
                
                <div className="header-left"> <NavLink to={'/topstories'} className="newsicon-link"> 
                <img style={{height:"35px", width:"auto", marginRight:"8px"}}src={require('./vector logo.png').default}/>
            
                    </NavLink>
                </div>


            


                <div className="header-right">  

                
                </div>

            </div>
        )
    }
}

export default Header;