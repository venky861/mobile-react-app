import React from 'react'
import '../../App.css'

function CartItem({items,value}) {

    const {id , title,img , price , total ,count} = items
    const {increment , decrement , removeItem} = value

    return (
        <div>

            <div className="row text-center">
                <div className="mx-auto"> 
                    <img src={img} className="img-fluid" style={{width:"5rem", height:"5rem"}} alt="xxx"></img>

                </div>

                <div className="mx-auto"> 
                    <span>Product:</span> {title}
                </div>

                <div className="mx-auto "> 
                    <span>Price:</span> {price}
                </div>

                <div className="mx-auto"> 
                   <div className="d-flex justify-content-center">
                       <button  className="mx-1 btncart" onClick={() => decrement(id)}>
                            -
                       </button>
                       <span className="mx-1 cartgap">
                           {count}
                       </span>

                       <button  className="mx-1 btncart" onClick={() => increment(id)}>
                            +
                       </button>

                   </div>
                </div>
                <div className="mx-auto"> 
                    <i className="fas fa-trash" onClick={() => removeItem (id)}/>
                </div>

                <div className="mx-auto"> 

                    <span>Item total: </span> $ {total}
                   
                </div>


            </div>
            
        </div>
        
    )
}

export default CartItem

