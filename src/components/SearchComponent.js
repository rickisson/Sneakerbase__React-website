import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class Search extends Component{
    constructor(props){
        super(props);

    }

    render(){


    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>BEGIN YOUR SNEAKER SEARCH</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">

                </div>

            </div>

        </div>
        <div className="container">
            <div className="row">
                <Form>
                    <FormGroup>
                        <Label htmlFor ="brand">Brand</Label>
                        <Input type="text" name="brand" id="brand" placeholder="brand"
                        innerRef={input=>this.brand=input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="store"></Label>
                        <Input type="text" name="store" id="store" placeholder="store"
                        innerRef={input=>this.store=input}/>
                    </FormGroup>
                </Form>
            </div>

        </div>
        </React.Fragment>
    )
}

}

export default Search;