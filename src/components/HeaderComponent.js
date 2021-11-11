// eslint-disable-next-line
import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{
    constructor(props){
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render(){
        return(
            <React.Fragment>
               
                <Navbar dark sticky="top" expand ="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/images/jordanlogocircle.png" 
                         height="70" width="70"/>  Sneaker Base</NavbarBrand>

                         <NavbarToggler onClick = {this.toggleNav}/>
                         <Collapse isOpen={this.state.isNavOpen} navbar>
                         <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/search">
                                        <i className="fa fa-list fa-lg" /> Search
                                    </NavLink>
                                </NavItem>
                                
                               
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar> 
               
            </React.Fragment>
        )
    }
}

export default Header;