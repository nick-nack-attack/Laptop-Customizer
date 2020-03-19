import React, { Component } from 'react';

export default class Cart extends Component {

    render() {

        const { hash, feature, selectedOption, USCurrencyFormat } = this.props;

        return (
            <div className="summary__option" key={hash}>
                <div className="summary__option__label"> {feature} </div>
                <div> {selectedOption.product} </div>
                <div className="summary__option__cost"> {USCurrencyFormat.format(selectedOption.price)} </div>
            </div>
        )
    }
}