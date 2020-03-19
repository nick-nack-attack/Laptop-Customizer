import React, { Component } from 'react';
import './Option.css';

export default class Option extends Component {

    render() {

        return (
            <div className="product-option">
                <input 
                    type="radio"
                    id={this.props.id}
                    className="feature__option"
                    name={this.props.name}
                    checked={this.props.checked}
                />
                <label
                    htmlFor={this.props.htmlFor}
                    className="feature__label"
                >
                        {this.props.product} ({this.props.price})
                </label>
            </div>
        )
    }
}