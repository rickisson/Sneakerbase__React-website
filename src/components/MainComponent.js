import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Blog from './BlogComponent';
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
                <Route path='/about' component={About} />
                <Route path='/blog' component={Blog} />
                <Redirect to='/home' />
                <Home/>
            </Switch>
            
            <Footer/>
           

        </div>
        
        
    )



   }

}
export default Main;