import React from "react";
import "./Information.scss" ;

class Information extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="information">
                <h1 className="information__title">
                    {this.props.title}
                </h1>
                <h2 className="information__subtitle">
                    {this.props.location}
                </h2>
            </div>
        );
    }
}

export default Information ;