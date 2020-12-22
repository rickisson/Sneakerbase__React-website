import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return(
        <footer className="site-footer">
            <div className = "container">
                <div className= "row">
                    <div className ="col">
                        <h5>Links</h5>
                        <ul>
                            {/* <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;