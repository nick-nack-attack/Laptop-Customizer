import React, { Component } from 'react';
import './Product.css'
import Option from '../Option/Option'

export default class Product extends Component {

    render() {

        const options = this.props.feature;
        const product = this.props.product;

        return (
            <div className="a_product">
                <h3>{this.props.feature}</h3>
                <Option product="A" price="100" />
                <Option />
            </div>


        )

        
    }
}