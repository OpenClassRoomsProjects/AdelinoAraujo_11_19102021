import React from "react";
import "./Host.css";

class Host extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="host">
                <div className="host__name">
                    {this.props.name}
                </div>
                <div className="host__picture">
                    <img src={this.props.src} alt={this.props.alt} title={this.props.title}/>
                </div>
            </div>
        )
    }
}

export default Host ;