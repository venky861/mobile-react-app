import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

class Navbar extends PureComponent {
     
    
    render() {

    
        return (
            
           <div>
                    <nav className="navbar narvbar-expand-sm  px-sm-5 nav-dark navb ">
                        <Link to="/">
                            
                           Home
                        </Link>

                        <ul className="navbar-nav align-items-center"> 
                            <li className="nav-item">
                            <Link to="/" className="nav-link mr-auto"> Product </Link>
                            </li>
                        </ul>

                        <Link to="/Cart">
                            
                          <button> 
                              <i className="fas fa-cart-plus"></i> My Cart
                          </button>
                        </Link>
                        

                    </nav>

           </div>
                  
        )
    }
}

export default Navbar


