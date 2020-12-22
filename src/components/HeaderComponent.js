import React, { Component }  from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';


class Header extends Component{
    render(){
        return(
            <React.Fragment>
               
                <Navbar dark sticky="top" expand ="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/images/jordanlogocircle.png" 
                         height="70" width="70"/>  Sneaker Base</NavbarBrand>
                    </div>
                </Navbar> 
               
            </React.Fragment>
        )
    }
}

export default Header;