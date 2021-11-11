
// eslint-disable-next-line
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            searchValue: "",
            results: []
        }

    }

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
        };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
       } 
       
       
    makeApiCall = () => {

    
        
        fetch("https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100&brand=off-white", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
                "x-rapidapi-key": "b0b80815f3mshd4ed854432ecd31p1b6fa8jsn1d3378f657ca"
            }
        })
        .then(response=>{
            return response.json();
        })
        .then(jsonData => {
            console.log(jsonData.results);
            this.setState({results: jsonData.results});
        });

    };  

    
    render(){

        const shoes = this.state.results.map(brands =>(
            
            <div key={brands.id}>
                <h1>{brands.silhouette}</h1>
                <h1>{brands.retailPrice}</h1>
               <img src={brands.image.thumbnail} alt="shoe-thumbnail" />
             </div>
        ));
           

        return(
            <div className="container"  style={{textAlign:'center'}} >
            <div className="row">
               
            </div>
            <div className="row">
                <div className="col">
                    <h2>BEGIN YOUR SNEAKER SEARCH</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input 
                    name="text" 
                    type="text" 
                    placeholder="brand"
                    onChange={event=>this.handleOnChange(event)}
                    value={this.state.searchValue}
                    
                    />
                    
                    <br></br>
                    <br></br>
                    <button onClick={this.handleSearch} >
                        Search
                    </button>
                </div>
               </div> 
            {/* <div className="row">
               
               {shoes}
              
            </div> */}

        </div>
       
    );
        }
    

}



export default Search;




