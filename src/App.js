import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import blue from "./img/blue.jpg";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="my-container" >
                <Main />
            </div>
        </BrowserRouter>
        );
    }
}

export default App;