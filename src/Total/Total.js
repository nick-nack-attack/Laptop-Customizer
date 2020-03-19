import React, { Component } from 'react';

export default class Total extends Component {
    render() {

        const { total, USCurrencyFormat } = this.props

        return(
            <div className="summary__total">
                <div className="summary__total__label">
                    Total
                </div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
            </div>
        )
    }
}