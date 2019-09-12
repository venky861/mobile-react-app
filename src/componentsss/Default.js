import React, { PureComponent } from 'react'

class Default extends PureComponent {
    
    render() {

       let style={
            color:"red",
            padding:"40px",
            border:"4px"
        }
        return (

            <div>
                
               <div clasName="container">
                   <div className="row d-flex justify-content-center">
                        <div style={style}>
                            <h2>404 Requested Page not found: {this.props.location.pathname}</h2>
                        </div>
                   </div>
               </div>
            </div>
            
            
        )
    }
}

export default Default


                