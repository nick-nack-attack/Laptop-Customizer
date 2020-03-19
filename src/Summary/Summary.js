import React, { Component } from 'react';
import './Summary.css'
import Cart from '../Cart/Cart';
import Total from '../Total/Total'

export default class Summary extends Component {
    render() {

        const { selected, USCurrencyFormat, total } = this.props;

        const summary = Object.keys(selected).map( (feature, idx) => (
            <Cart 
                hash={feature + "—" + idx}
                feature={feature}
                selectedOption={selected[feature]}
                USCurrencyFormat={USCurrencyFormat}
            />
        ) )

        return (
            <div>
                <h2>Your Cart</h2>
                {summary}
                <Total 
                    total={total}
                    USCurrencyFormat={USCurrencyFormat}
                />
            </div>
        )
    }
}