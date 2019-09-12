import React from 'react'
import CartItem from './CartItem'

function CartList({value}) {
    const {cart} = value

    return (
        <div className="container-fluid p-2">
            
            
            { cart.map(items => <CartItem key={items.id} items={items} value={value} />)}
            

        </div>
        
    )
}

export default CartList
