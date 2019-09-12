import React from 'react'
import {Link} from 'react-router-dom'

function CartTotals({value}) {
    
    const {cartSubTotal, cartTax ,cartTotal,clearCart}=value
    return (
        <div>

        <div className="container">
            <div row>
                <Link to="/">


                    <button onClick={()=>clearCart()}> Clear Cart</button>
                
                </Link>

                <h5>
                    <div>
                        <span>Subtotal:</span>$ {cartSubTotal}
                    </div>
                </h5>

                <h5>
                    <div>
                        <span>tax:</span>$ {cartTax}
                    </div>
                </h5>

                <h5>
                    <div>
                        <span>Total:</span>$ {cartTotal}
                    </div>
                </h5>


            </div>
        </div>
        </div>
        
    )
}

export default CartTotals
