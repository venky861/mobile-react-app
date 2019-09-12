import React, { PureComponent } from 'react'

class CartColumns extends PureComponent {


    render() {
        return (
            <div>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="mx-auto">
                            <p className="text-uppercase"> Products</p>
                        </div>

                        <div className="mx-auto">
                            <p className="text-uppercase"> Name of the product</p>
                        </div>

                        <div className="mx-auto">
                            <p className="text-uppercase"> Price</p>
                        </div>

                        <div className="mx-auto">
                            <p className="text-uppercase"> Quantity</p>
                        </div>

                        <div className="mx-auto">
                            <p className="text-uppercase"> Remove</p>
                        </div>
                        <div className="mx-auto">
                            <p className="text-uppercase"> Total</p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default CartColumns