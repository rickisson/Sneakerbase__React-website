 import { Card, CardImg, CardText, CardBody, CardTitle , Form,Label,Input,FormGroup,Button} from 'reactstrap';
 import React, {Component} from 'react';
 import Carousel from 'react-bootstrap/Carousel'

 


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
                name:"jordan Retros",
                image:"/images/jordan11.jpg",
                description:"jordan XI"
            },

            {
                id:2,
                name:"jordan Retros",
                image:"/images/jordanbred.jpg",
                description:"jordan bred"
            },

            {
                id:3,
                name:"jordan Retros",
                image:"/images/jordan5.jpg",
                description:"jordan VI"
            }
        
        
        ]};
    }

    render(){

        const homePage = this.state.sneakers.map(sneaker => {
            return(
                <div key={sneaker.id} className="col">
                    <img src ={sneaker.image}/>
                     <h2>{}</h2>
                    <p>{sneaker.description}</p>
                </div>
            );
        });

  
        return(
            <React.Fragment>
                 
           <div  className="container">
               <div className="row">
                   <h1 ><b>Welcome To The Home Of All Sneakers!!!</b></h1>
                   <h2>Sneakerbase is The Place to Find all your favorite sneakers and their prices</h2>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                    <Form>  
                        <FormGroup>
                            <Label htmlFor="email">Subscribe to our Newsletter</Label>
                            <Input type="text" name="email" id="email" innerRef="{input =>this.email}"/>

                        </FormGroup>
                        
                        <Button type="submit" value="submit" color="primary" size="lg" block>Submit</Button>
                        <br></br>
                    </Form>  
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="row">
                  {homePage} 
               </div>
               </div>
               <div className="container">
                   <div className="row">
                     <RenderCarousel/>
                   </div>
               </div>
               
            </React.Fragment>
        );
    }

}


class RenderCarousel extends React.Component {
    render() {
      return (
          <div className="container-fluid">
         <Carousel>
         <Carousel.Item>
            <img style={{'height':"600px"}} className="d-block w-100" src="/images/ebayair.webp"/>
         <Carousel.Caption><h3>First slide label</h3></Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
            <img style={{'height':"600px"}} className="d-block w-100" src="/images/sneakershop.webp"/>
         <Carousel.Caption><h3>Second slide label</h3></Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
            <img style={{'height':"600px"}} className="d-block w-100" src="/images/ebaysneaks.jpg"/>
         <Carousel.Caption><h3>Third slide label</h3></Carousel.Caption>
       </Carousel.Item>

         </Carousel>
         </div>
           

        );
  }

} 

export default Home;