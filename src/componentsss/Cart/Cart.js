import React from 'react'
import Title from '../Title'
import CartColumn from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import {ProductConsumer} from '../Context'
import CartTotals from './CartTotals'

class Cart extends React.Component {
    

    render() {
        return (

            <div>
                 <ProductConsumer>
                    {value =>{

                        const {cart} = value

                        if(cart.length > 0){
                            return (
                                <div>
                                    <Title name="Your" title="Cart" />
                                    <CartColumn></CartColumn>
                                    <CartList value={value}> </CartList>
                                    <CartTotals value={value}></CartTotals>
                                </div>
                            ) 
                        }else{

                            return <EmptyCart></EmptyCart>

                        }

                    }}
                </ProductConsumer>
               
               

            </div>
            
        )
    }
}

export default Cart