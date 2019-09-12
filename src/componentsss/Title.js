import React from 'react'

function Title({name , title}) {

    const stylee={
        color:"red",
        textAlign:"center",
        padding:15
    }

    return (
        <div>
                 <div >
                     <h2  style={stylee} >{name}  {title}
                     </h2>
                </div>

        </div>

    )
}

export default Title
