import React, { PureComponent } from 'react'
import Product from './Product'
import {ProductConsumer} from './Context'
import Title from './Title'
import '../App.css'

class ProductList extends PureComponent {
    
    render() {

       
        return (
            <React.Fragment>
             
                <div className="container-fluid bgcolor">
                    <Title name="Our" title="products"/>
                    <div className="row">
                        <ProductConsumer>

                            { value => {
                                return value.products.map(product =>{
                                    return <Product key={product.id} product={product}></Product>
                                })
                            }}
                            
                        </ProductConsumer>

                    </div>
                </div>
                
            </React.Fragment>
            
        )
    }
}

export default ProductList