// eslint-disable-next-line
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Search from './SearchComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component{
    constructor(props){
    super(props);
    

}


render(){

    
    return(
        
          <div>
            <Header/>
           
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/search' component={Search} />
                <Redirect to='/home' />
                <Home/>  
               
            </Switch>
            
            
            <Footer/>
           

        </div>
        
        
    )



   }

}
export default Main;