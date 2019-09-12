import React, { PureComponent } from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'
import '../App.css'


class Model extends PureComponent {
    

    render() {
        return (
            <ProductConsumer>
                
                {value =>{
                    const {modalOpen, closeModel} = value
                    const{img,price,title} = value.modalProduct

                    if(!modalOpen){
                        return null
                    }
                    else{
                        return(
                            <div>
                                <div className="container contain">
                                    <div className="row">
                                        <div  className="mx-auto position text-center" >
                                            <div className="bg" >
                                                <h2 >Items added to the Cart</h2>
                                                <img src={img} alt="xxx" ></img>
                                                <h5>{title}</h5>
                                                <h5>Price: $ {price} </h5>
                                                <Link to="/">
                                                    <div className="model" onClick ={()=> {closeModel()}}  >
                                                    Continue Shopping
                                                    </div>
                                                </Link>
                                                <Link to="/cart">
                                                    <div className="model" onClick ={()=> {closeModel()}}  >
                                                    Go to Cart
                                                    </div>
                                                </Link>
                                               
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                    
                }}


            </ProductConsumer>
        )
    }
}

export default Model