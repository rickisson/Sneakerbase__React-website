 import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
 import React, {Component} from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = { 
            
            sneakers: [
            
            {
                id:0,
                name:"Jordan Retros",
                image:"/images/jordan4.jpg",
                description:"Jordan IV"
            },
        
            {
                id:1,
                name:"jordan Retro 5",
                image:"/images/jordan11.jpg",
                description:"jordan XI"
            },

            {
                id:1,
                name:"jordan Retro 5",
                image:"/images/jordanbred.jpg",
                description:"jordan bred"
            },

            {
                id:1,
                name:"jordan Retro 5",
                image:"/images/jordan5.jpg",
                description:"jordan VI"
            }
        
        
        ]};
    }

    render(){

        const homePage = this.state.sneakers.map(sneaker => {
            return(
                <div className="col">
                    <img src ={sneaker.image}/>
                    <h2>{sneaker.name}</h2>
                    <p>{sneaker.description}</p>
                </div>
            );
        });
        return(
           <div className="container">
               <div className="row">
                   {homePage}
               </div>

           </div>
        );
    }

}

export default Home;