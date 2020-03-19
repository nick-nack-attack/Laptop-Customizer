import React, { Component } from 'react';
import './Customize.css'
import slugify from "slugify";
import Product from '../Product/Product';
import Option from '../Option/Option';

export default class Customize extends Component {

    render() {

        const products = Object.keys(this.props.store).map((feature, id) => {
            
            const featureHash = feature + "—" + id;

            const options = this.props.store[feature].map( item => {
                
                const itemHash = slugify(JSON.stringify(item));

                return (

                    <div>
                        <input 
                            type="radio" 
                            id={itemHash}
                            className="feature__option"
                            name={slugify(feature)}
                            checked={item.product === this.props.selected[feature].product}
                            onChange = { e => this.props.updateSelection(feature,item)}
                        />
                        <label
                            htmlFor={itemHash}
                            className="feature__label"
                        >
                                {item.product} ({this.props.USCurrencyFormat.format(item.price)})
                        </label>
                    </div>

                )

            });
            
            return (
                <fieldset
                    className="feature"
                    key={featureHash}
                >
                    <legend>
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
        )});

        return (
            <div>
                <h2>Customize Your Laptop</h2>
                {products}
            </div>
        )
    }

}