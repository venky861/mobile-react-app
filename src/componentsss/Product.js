import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'
import '../App.css'

class Product extends PureComponent {
    
    render() {

        const styletit={
            backgroundColor:"grey"
        
        }
            

       const {id, title, img,price, inCart} =this.props.product
        return (
            
            <div>
               
                <div className="container ">
                    <div className="card mb-4 ml-4">
                       <ProductConsumer>

                           {value =>{

                                  return(<div className="styleimg" onClick={()=> {value.handleDetail(id)}} >
                                  <Link to="/details">
                                      <img src={img} alt="xxx" />
                                  </Link>

                              <button   className="cart" disabled={inCart} onClick={()=>{value.addToCart(id); value.openModel(id) } }>

                                  {inCart?(<p className="mb-0 p-1" disabled>In cart</p>) : (<i className="fas fa-cart-plus p-2"></i>)}
                              </button>
                              
                              </div>)  
                           }}
                       </ProductConsumer>
                        
                        <div className="card-footer d-flex justify-content-between mb-0" style={styletit}>
                            <p className="mb-0">{title}</p>
                            <h4><span className="mr-1">$</span>{price}</h4>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Product