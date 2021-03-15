import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import t from "../img/t.png";


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
        const searchUrl = "https://api.thesneakerdatabase.com/v1/sneakers?limit=50&brand=nike&sort=retailPrice:asc";

        fetch(searchUrl)
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
                <h1>{brands.shoe}</h1>
                <h1>{brands.year}</h1>
               <img src={brands.media.thumbUrl} alt="shoe-thumbnail" />
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
            <div className="row">
               
               {shoes}
              
            </div>

        </div>
       
    );
        }
    

}



export default Search;




