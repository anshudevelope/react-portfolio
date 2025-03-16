import "./Heroimg2.css";

import React, { Component } from 'react'

class Heroimg2 extends Component {

    render() {

        return (
            <div className="heroimg2">
                <div className="heading">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );

    }

}

export default Heroimg2;
