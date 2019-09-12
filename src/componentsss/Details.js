import React, { PureComponent } from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'


class Details extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
       const stylebtn={

            borderRadius:5,
            color:"red",
            borderColor:"grey"

        }
        return (
           <ProductConsumer>
               {
                   (value) =>{

                    const {id,company,img,info,price,title,inCart}= value.detailProduct

                    return(
                        <div className="container py-5">
                            <div className="row card p-4">
                                <div className="mx-auto py-5">


                                    <h3>{title}</h3>
                                    <img src={img} alt="title" />
                                    <h2>Model: {title}</h2>
                                    <h3 className="text-uppercase text-muted"> made by: {company}</h3>
                                    <h4> Price: <span>${price}</span></h4>
                                    <p>Some info about product</p>
                                    <p className="text-muted" >{info}</p>
                                    <div>
                                        <Link to="/" >
                                            <button  className="m-2 p-2" style={stylebtn}>
                                            Back To Products
                                            </button>
                                        </Link>
                                        
                                             <button className="m-2 p-2" style={stylebtn} onClick={()=> {value.addToCart(id) ; value.openModel(id)} } disabled={inCart ? true :false }> {inCart?("InCart"):("Add to Cart")}</button>
                                        
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    )

                   }
               }

           </ProductConsumer>
            
        )
    }
}

export default Details